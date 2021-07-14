import { getRepository } from 'typeorm';
import { Message } from '../../entities/Message';
import { User } from '../../entities/User';
import { Friends } from '../../entities/Friends';
import { GlobalFunctions } from '../../functions/GlobalFunctions/GlobalFunctions';
import { IAddFirendDTO } from './AddFriendDTO';

export class AddFriendUseCase{
  
  constructor(
    private SystemFunctions: GlobalFunctions
  ){}

  async execute(data: IAddFirendDTO){
    const isValidFields = this.SystemFunctions.validateFields(data);
    if(isValidFields.error){
      throw new Error(`Invalid Field ${isValidFields.field}`)
    }

    const UserRepository = getRepository(User);

    const isValidIdUser = await UserRepository.findOne({where: {_id: data.id_user}})
    if(!isValidIdUser){
      throw new Error('Invalid id User')
    }

    const isValidIdFriend = await UserRepository.findOne({where: {_id: data.id_friend}})
    if(!isValidIdFriend){
      throw new Error('Invalid id Friend')
    }

    const FriendsRepository = getRepository(Friends);

    const AlreadyFriendsExists = await FriendsRepository.findOne({where: {
      _id_Friend: data.id_friend,
      _id_User: data.id_user
    }})

    if(AlreadyFriendsExists){
      throw new Error('Already Exists Friends');
    }

    const friends = FriendsRepository.create({
      _id_Friend: data.id_friend,
      _id_User: data.id_user
    })

    await FriendsRepository.save(friends);

    return friends;
  }

}