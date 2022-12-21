import { MessageI } from "../interfaces/message-i";
import { User } from "./user";

export class Message implements MessageI{
  id!: number;
  content!: Text;
  postTime!: Date;
  editTime!: Date;
  user!: User;
}
