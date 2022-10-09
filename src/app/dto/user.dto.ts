import { Optional } from "sequelize/types";

export type CreateUserDTO = {
  name: string;
  age: number;
};

export type UpdateUserDTO = Optional<CreateUserDTO, "name">;
