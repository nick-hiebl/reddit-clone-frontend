import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import UserApi, { User } from 'api/UserApi';

export default () => {
  const { username } = useParams();
  const [user, setUser] = useState(undefined as User | undefined);

  useEffect(() => {
    if (username) {
      UserApi.getUser(username).then(setUser);
    }
  }, [username]);

  if (!user) {
    return <h1>Not found</h1>;
  }

  return (
    <div>
      <h3>{ user.name }</h3>
      <p>Created on <span>{ user.creationDate }</span></p>
    </div>
  );
}
