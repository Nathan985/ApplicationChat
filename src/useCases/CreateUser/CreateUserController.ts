import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {

  constructor(
    private CreateUserUseCase: CreateUserUseCase
  ){}

  async handle(Request: Request, Response: Response){
    const {
      name,
      email,
      password,
      avatar
    } = Request.body;
    try {
      const data = await this.CreateUserUseCase.execute({
        name,
        email,
        password,
        avatar
      });
      Response.status(200);
      return Response.send({
        success: 1,
        message: "Create user Successfully!",
        data
      })
    } 
    catch (error) {
      Response.status(500);
      return Response.send({
        success: 0,
        message: error.message
      })
    }
  }

}