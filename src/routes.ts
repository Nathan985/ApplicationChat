import { Router } from "express";

const router = Router();

// Rotas da API

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