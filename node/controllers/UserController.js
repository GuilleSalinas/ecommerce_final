import dataBase from "../database/db.js";
// importar el modelo
import UserModel from "../models/UserModels.js";

export const checkUser = async (req, res) => {
  try {
    // los datos que vienen del front que deben ser mail y password
    const mail = req.body.mail;
    const password = req.body.password;

    //  generar la consulta
    const query = `SELECT*FROM users WHERE mail="${mail}"`;
    const users = await dataBase.query(query);
    console.log("esto es eu users", users);
    const user = users[0].find((user) => user.password === password);

    if (user) {
      const { password, ...filteredUser } = user;
      // console.log(filteredUser )
      return res.status(200).json(filteredUser);
    }
    return res
      .status(401)
      .json({ message: "El Mail o Password son incorrecto" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// recibe los datos del front y los agrega a la base de datos de los usuarios
// inserta usuario nuevo en ruta http://localhost:5001/users/register
export const createUser = async (req, res) => {
  try {
    await UserModel.create(req.body);
    res.json({ message: "Registro de Usuario Creado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};