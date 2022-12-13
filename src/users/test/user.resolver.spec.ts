import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from '../users.resolver';
import { UsersService } from '../users.service';
import { jest } from '@jest/globals';
import { usersStub } from './stubs/users.stub';
import { UsersServiceMock } from '../__mock__/users.service';
import { PrismaService, Users } from '@bus-booking/data-access';

describe('UserResolver', () => {
  let usersResolver: UsersResolver;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: UsersServiceMock,
        },
        PrismaService,
      ],
    }).compile();

    usersResolver = module.get<UsersResolver>(UsersResolver);
    usersService = module.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it('usersResolver should be defined', () => {
    expect(usersResolver).toBeDefined();
  });
  it('usersService should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('Get All users ', () => {
    describe('when findAll is called', () => {
      let users: Users[];

      beforeEach(async () => {
        users = await usersResolver.findAll();
      });

      test('then it should call users service', async () => {
        expect(jest.spyOn(usersService, 'findAll')).toHaveBeenCalled();
      });

      test('then is should return users', () => {
        expect(users).toEqual([usersStub()]);
      });
    });
  });
});
