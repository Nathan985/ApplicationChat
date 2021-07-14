import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("Tbl_Friends")
export class Friends{

  @PrimaryColumn()
  _id_User: string;

  @PrimaryColumn()
  _id_Friend: string;
}