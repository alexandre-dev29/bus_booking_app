import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserSecurity } from './user.security';

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const { id, userName, roles, isSuperAdmin, phoneNumber }: UserSecurity =
      GqlExecutionContext.create(context).getContext().req.user;
    return {
      id,
      userName,
      roles,
      isSuperAdmin,
      phoneNumber,
    };
  },
);
