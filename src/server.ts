import { app } from "./app";
import cors from 'cors';

app.use(cors()); // Configuração de CORS a API

app.listen(process.env.PORT || 3333, () => {
  console.log("API started at port: " + process.env.PORT || 3333);
});