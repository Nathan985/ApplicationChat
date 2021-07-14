import { Router } from "express";
import { FriendRoutes } from "./routes/Friends";
import { UserRoutes } from "./routes/User";

const router = Router();

// Rotas da API

router.use('/friend', FriendRoutes);
router.use('/user', UserRoutes);

router.use((req, res, next) => {
  const erro = new Error('Not Found')
  next(erro)
});

router.use((error, req, res, next) => {
  res.status(error.status || 401)

  return res.send({
      error: {
          success: 0,
          mensagem: error.message
      }
  })
})

export { router };