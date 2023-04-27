import UserModel from "../models/UserModels.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// crear un registro
export const createUsers = async (req, res) => {
  try {
    await UserModel.create(req.body);
    res.json({ message: "Registro creado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
