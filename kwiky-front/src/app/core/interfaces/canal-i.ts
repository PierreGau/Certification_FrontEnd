import { Message } from '../models/message';
import { User } from '../models/user';

export interface CanalI {
  id: number;
  name: Text;
  user: User;
  general: boolean;
  messages: Message[];
}
