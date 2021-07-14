import { Request, Response } from 'express';
import { AddFriendUseCase } from './AddFriendUseCase'

export class AddFriendController{

  constructor(
    private AddFriendUseCase: AddFriendUseCase
  ){}

  async handle(Request: Request, Response: Response){
    const { id_user, id_friend } = Request.body;
    try {
      const data = await this.AddFriendUseCase.execute({
        id_friend,
        id_user
      });
      Response.status(200)
      return Response.send({
        success: 1,
        message: "Friend add successfully!",
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