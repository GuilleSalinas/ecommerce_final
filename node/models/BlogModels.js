// importar la conexion a la base de datos (db)
import db from "../database/db.js";

// importar sequelize con DataTypes
import { DataTypes } from "sequelize";

// defino la conexion
const BlogModel = db.define(
  "blogs",
  {
    name: { type: DataTypes.STRING },
    descriptionLong: { type: DataTypes.STRING },
    descriptionShort: { type: DataTypes.STRING },
    price: { type: DataTypes.NUMBER },
    link: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

export default BlogModel;
