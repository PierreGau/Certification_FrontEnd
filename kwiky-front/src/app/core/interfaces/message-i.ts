import { User } from '../models/user';

export interface MessageI {
  id: number;
  content: string;
  postTime: Date;
  editTime: Date;
  user: User;
}
