import cors from "cors";
import express from "express";

// importo la conexion a la base de datos
import db from "./database/db.js";

// importo el enrutados
import blogRoutes from "./routes/routes.js";
import uRoutes from "./routes/uroutes.js";

const app = express();

// configuro JSON
app.use(express.json());
app.use(cors());


// configuro la ruta para los metodos y el http.
app.use("/blogs", blogRoutes);
app.use("/users", uRoutes);


// aqui se define la conexion, en este caso con try/catch con authenticate.
try {
  await db.authenticate();
  console.log("conexion exitosa a la base de datos");
} catch (error) {
  console.log(`el error de conexion es: ${error}`);
}

app.listen(5001, () => {
  console.log("Servidor corriendo en http://localhost:5001/");
});
