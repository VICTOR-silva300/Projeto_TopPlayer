import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuariosRoutes.js"
import jogosRoutes from "./routes/jogosRoutes.js"
import playersRoutes from "./routes/playersRoutes.js"
import partidasRoutes from "./routes/partidasRoutes.js"
import rankingsRoutes from "./routes/rankingsRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.json({msg: "Hello world"})
})

app.use("/usuarios", usuariosRoutes)
app.use("/jogos", jogosRoutes)
app.use("/players", playersRoutes)
app.use('/partidas', partidasRoutes)
app.use("/rankings", rankingsRoutes);


export default app;