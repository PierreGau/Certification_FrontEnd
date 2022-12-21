import { Canal } from '../models/canal';
import { User } from '../models/user';

export interface ServerI {
  id: number;
  name: Text;
  users: User[];
  creator: User;
  canaux: Canal[];
}
