import { ServerI } from '../interfaces/server-i';
import { Canal } from './canal';
import { User } from './user';

export class Server implements ServerI {
  id!: number;
  name!: Text;
  users!: User[];
  creator!: User;
  canaux!: Canal[];
}
