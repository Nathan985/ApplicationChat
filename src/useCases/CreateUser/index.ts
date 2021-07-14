import { CreateUserController } from './CreateUserController';
import { GlobalFunctions } from '../../functions/GlobalFunctions/GlobalFunctions';
import { CreateUserUseCase } from './CreateUserUseCase';

const globalFunctions = new GlobalFunctions();

const createUserUseCase = new CreateUserUseCase(
  globalFunctions
)

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserController };