import { Entity, Column, PrimaryColumn } from 'typeorm';
import { GlobalFunctions } from '../functions/GlobalFunctions/GlobalFunctions';

Entity("Tbl_Messages")
export class Message{

  @PrimaryColumn()
  _id: string;

  @Column()
  message: string;

  @Column()
  _id_send: string;

  @Column()
  _id_recived: string;

  constructor(){
    if(!this._id){
      const SystemFunctions = new GlobalFunctions();
      this._id = SystemFunctions.hashValue();
    }
  }
}