import { getRepository } from 'typeorm';
import { GlobalFunctions } from '../../functions/GlobalFunctions/GlobalFunctions';
import { ICreateUserDTO } from './CreateUserDTO';
import { User } from '../../entities/User';

export class CreateUserUseCase{

  constructor(
    private SystemFunctions: GlobalFunctions
  ){}

  async execute(data : ICreateUserDTO){
    const isValidFields = this.SystemFunctions.validateFields(data);
    if(isValidFields.error){
      throw new Error(`Invalid Field ${isValidFields.field}`);
    }

    const isValidEmail = this.SystemFunctions.validateEmail(data.email);
    if(isValidEmail){
      throw new Error('Invalid Email Format');
    }

    const UserRespository = getRepository(User);
    const NewUser = UserRespository.create({
      avatar: data.avatar,
      email: data.email,
      name: data.name,
      password: this.SystemFunctions.hashValue(data.password)
    })

    await UserRespository.save(NewUser);
    
    return User
  }

}