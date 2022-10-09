import { User } from "../interface/User";
import { UserOutput } from "../model/User";

export const toUser = (user: UserOutput): User => ({
    id: user.id,
    name: user.name,
    age: user.age,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
})