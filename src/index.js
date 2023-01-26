import express from "express";
import infoRouter from "./routes/infoRoute.js";
import randomRouter from "./routes/randomRoute.js";
import Config from "./config/index.js";
import minimist from "minimist";

const optionalArgsObject = {
  alias: {
    p: "puerto",
  },
  default: {
    p: "8080",
  },
};

export const args = minimist(process.argv, optionalArgsObject);

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
  res.json("Bienvenido, para obtener informacion de la api use /info. Para el calculo de numeros random use /randoms/:cantidad por ejemplo 5")
})
app.use("/", infoRouter, randomRouter);

app.listen(Config.PORT, () =>
  console.log(`Escuchando en el puerto ${Config.PORT}`)
);
