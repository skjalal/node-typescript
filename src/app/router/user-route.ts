import { Router, Request, Response, NextFunction } from "express";
import {
  create,
  deleteUser,
  fetchAllUsers,
  getUser,
  update,
} from "../controller/user-controller";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const param = req.query;
    const result = await fetchAllUsers(param);
    res.status(200).json(result);
    return;
  } catch (err) {
    console.log("Failed to fetch users", err);
    next(err);
  }
});

userRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const result = await getUser(id);
      res.status(200).json(result);
      return;
    } catch (err) {
      console.log("Failed to fetch user", err);
      next(err);
    }
  }
);

userRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const payload: UpdateUserDTO = req.body;
      const result = await update(id, payload);
      res.status(200).json(result);
      return;
    } catch (err) {
      console.log("Failed to update user", err);
      next(err);
    }
  }
);

userRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload: CreateUserDTO = req.body;
      const result = await create(payload);
      res.status(200).json(result);
      return;
    } catch (err) {
      console.log("Failed to create user", err);
      next(err);
    }
  }
);

userRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const result = await deleteUser(id);
      res.status(200).json({ success: result });
      return;
    } catch (err) {
      console.log("Failed to fetch user", err);
      next(err);
    }
  }
);

export default userRouter;
