import { get, post } from "./Utils";

export interface User {
  name: string;
  creationDate: string;
}

export default {
  async getUsers () {
    const res = await get('users');
    const us: User[] = await res.json();
    return us;
  },
  async createUser(username: string) {
    const res = await post('users', { name: username });
    const user: User = await res.json();
    return user;
  }
}
