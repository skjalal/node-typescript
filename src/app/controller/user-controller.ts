import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
import { User } from "../interface";
import { toUser } from "../utils/user-mapper";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUser,
} from "../service/UserService";

export const create = async (input: CreateUserDTO): Promise<User> => {
  return toUser(await createUser(input));
};

export const update = async (
  id: number,
  input: UpdateUserDTO
): Promise<User> => {
  return toUser(await updateUser(id, input));
};

export const getUser = async (id: number): Promise<User> => {
  return getUserById(id);
};

export const deleteUser = async (id: number): Promise<Boolean> => {
  return deleteUserById(id);
};

export const fetchAllUsers = async (queryParam: any): Promise<User[]> => {
  console.log(queryParam);
  return getAllUsers();
};
