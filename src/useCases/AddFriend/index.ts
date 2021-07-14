import { GlobalFunctions } from "../../functions/GlobalFunctions/GlobalFunctions";
import { AddFriendController } from './AddFriendController';
import { AddFriendUseCase } from './AddFriendUseCase';

const globalFunctions = new GlobalFunctions();

const addFriendUseCase = new AddFriendUseCase(
  globalFunctions
);

const addFriendController = new AddFriendController(
  addFriendUseCase
);

export { addFriendController };