import { CanalI } from '../interfaces/canal-i';
import { Message } from './message';
import { User } from './user';

export class Canal implements CanalI {
  id!: number;
  name!: Text;
  user!: User;
  general!: boolean;
  messages!: Message[];
}
