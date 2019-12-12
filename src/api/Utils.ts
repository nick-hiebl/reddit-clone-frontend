const BACKEND_URL = 'http://localhost:3000';

export const get = (endpoint: string) => {
  return fetch(`${BACKEND_URL}/${endpoint}`);
}

export const post = (endpoint: string, body: any) => {
  return fetch(`${BACKEND_URL}/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
