import { User } from "../model";
import { UserInput, UserOutput } from "../model/User";

export const create = async (input: UserInput): Promise<UserOutput> => {
  return User.create(input);
};

export const update = async (
  id: number,
  input: Partial<UserInput>
): Promise<UserOutput> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user.update(input);
};

export const getById = async (id: number): Promise<UserOutput> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const getAll = async (): Promise<UserOutput[]> => {
  return User.findAll();
};

export const deleteById = async (id: number): Promise<boolean> => {
  const numDeletedTags = await User.destroy({
    where: { id },
  });

  return !!numDeletedTags;
};
