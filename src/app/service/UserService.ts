import { UserInput, UserOutput } from "../model/User";
import {
  create,
  getById,
  update,
  deleteById,
  getAll,
} from "../middleware/user";

export const createUser = async (input: UserInput): Promise<UserOutput> => {
  return create(input);
};

export const getUserById = async (id: number): Promise<UserOutput> => {
  return getById(id);
};

export const updateUser = async (
  id: number,
  input: Partial<UserInput>
): Promise<UserOutput> => {
  return update(id, input);
};

export const deleteUserById = async (id: number): Promise<boolean> => {
  return deleteById(id);
};

export const getAllUsers = async (): Promise<UserOutput[]> => {
  return getAll();
};
