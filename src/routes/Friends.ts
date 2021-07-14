import { Router } from 'express';
import { addFriendController } from '../useCases/AddFriend';

const routes = Router();

routes.post('/', (req, res) => {
  return addFriendController.handle(req, res);
})

export { routes as FriendRoutes }