import React, { useEffect, useState } from 'react';
import UserApi, { User } from 'api/UserApi';

export default () => {
  const [users, setUsers] = useState([] as User[]);

  const [username, setName] = useState('');

  const create = () => {
    UserApi.createUser(username);
  };

  useEffect(() => {
    UserApi.getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>All users</h1>
      { users.map(({ name }) => (
        <p key={name}>
          { name }
        </p>
      )) }
      <div>
        <h3>New user</h3>
        Name:
        <input
          value={username}
          placeholder="Username"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value);
          }}
        />
        <button onClick={create}>Create user</button>
      </div>
    </div>
  );
}