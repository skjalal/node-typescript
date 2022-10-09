import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";

interface UserAttributes {
  id: number;
  name: string;
  age: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public age!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "user_id",
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "user_name",
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_date",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_date",
    },
  },
  {
    sequelize: sequelize,
    tableName: "user",
  }
);

export default User;
