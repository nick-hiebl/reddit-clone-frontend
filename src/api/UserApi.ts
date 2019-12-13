import { get, post } from "./Utils";

export interface User {
  name: string;
  creationDate: string;
}

export default {
  async getUsers(): Promise<User[]> {
    const res = await get('users');
    const us: User[] = await res.json();
    return us;
  },
  async getUser(username: string): Promise<User> {
    const res = await get(`users/${username}`);
    const user: User = await res.json();
    return user;
  },
  async createUser(username: string): Promise<User> {
    const res = await post('users', { name: username });
    const user: User = await res.json();
    return user;
  }
}
