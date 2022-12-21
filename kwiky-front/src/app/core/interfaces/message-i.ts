import { User } from "../models/user";

export interface MessageI {
  id: number;
  content: Text;
  postTime: Date;
  editTime: Date;
  user: User;
}
