import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserSecurity } from '@app-security';
import { Tokens } from '@shared-types';
import * as bcrypt from 'bcrypt';
import { Twilio } from 'twilio';

@Injectable()
export class UtilityService {
  private readonly client: Twilio;

  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {
    this.client = new Twilio(
      `${this.configService.get<string>('TWILIO_ACCOUNT_SID')}`,
      `${this.configService.get<string>('TWILIO_AUTH_TOKEN')}`,
    );
  }

  hashData = (data: string): Promise<string> => {
    return bcrypt.hash(data, 10);
  };

  getTokens = async ({
    roles,
    phoneNumber,
    isSuperAdmin,
    id,
    userName,
  }: UserSecurity): Promise<Tokens> => {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: id,
          roles,
          phoneNumber,
          id,
          userName,
          isSuperAdmin,
        },
        {
          expiresIn: 60 * 60 * 24,
          secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        },
      ),
      this.jwtService.signAsync(
        { sub: id },
        {
          expiresIn: 60 * 60 * 24 * 7,
          secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        },
      ),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    } as Tokens;
  };

  async SendOtpVerificationCode(phoneNumber: string): Promise<any> {
    return this.client.verify
      .services(`${this.configService.get('TWILIO_VERIFICATION_SERVICE_SID')}`)
      .verifications.create({
        to: phoneNumber,
        channel: 'sms',
      });
  }

  async checkTheVerificationCode(
    phoneNumber: string,
    optCode: string,
  ): Promise<any> {
    return this.client.verify
      .services(`${this.configService.get('TWILIO_VERIFICATION_SERVICE_SID')}`)
      .verificationChecks.create({ to: phoneNumber, code: optCode });
  }
}
