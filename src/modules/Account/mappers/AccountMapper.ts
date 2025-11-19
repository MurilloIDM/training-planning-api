import { Account as AccountPrisma, LANGUAGE } from "@prisma/client";

import { Account } from "../entities/Account";
import { AccountResponseDto } from "../dto/AccountResponseDto";

export class AccountMapper {
  public static toDomain(accountPrisma: AccountPrisma): Account {
    return new Account(
      accountPrisma.id,
      accountPrisma.name,
      accountPrisma.email,
      accountPrisma.password,
      accountPrisma.language
    );
  }

  public static toPrisma(account: Account): AccountPrisma {
    return {
      id: account.id,
      name: account.name,
      email: account.email,
      password: account.password,
      language: LANGUAGE[account.language],
    } as AccountPrisma;
  }

  public static toResponseDto(account: Account): AccountResponseDto {
    return {
      id: account.id,
      name: account.name,
      email: account.email,
      language: account.language,
    };
  }
}
