import { Entity, Column, PrimaryColumn } from 'typeorm';
import { GlobalFunctions } from '../functions/GlobalFunctions/GlobalFunctions';

@Entity("Tbl_Users")
export class User {

  @PrimaryColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  active: boolean;

  constructor(){
    const SystemFunctions = new GlobalFunctions();
    if(!this._id){
      this._id = SystemFunctions.hashValue();
      this.active = true;
    }
  }
}