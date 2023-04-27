// importar la conexion a la base de datos (db)
import db from "../database/db.js";

// importar sequelize con DataTypes
import { DataTypes } from "sequelize";

// defino la conexion
const UserModel = db.define(
  "users",
  {
    name: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN },
  },
  {
    timestamps: false,
  }
);

export default UserModel;
