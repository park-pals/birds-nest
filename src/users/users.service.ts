import { Injectable } from '@nestjs/common';

// TODO: Hook up to actual persistence layer (TypeORM or Sequelize) and create an actula user model
export type User = {
  readonly id: number;
  readonly username: string;
  readonly password: string;
};

@Injectable()
export class UsersService {
  // TODO: Don't store password in plain text.
  // Look into bcrypt: https://github.com/kelektiv/node.bcrypt.js/
  private readonly users: User[] = [
    {
      id: 1,
      username: 'pat',
      password: 'noonan',
    },
    {
      id: 2,
      username: 'blake',
      password: 'kanger',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
