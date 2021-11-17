export class UserService {
  constructor() {}

  save(request: { name: string; password: string }) {
    const { name, password } = request;

    return fetch('http://example.com/api/endpoint/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        name,
        password,
      }),
    }).then((response) => {
      //do something awesome that makes the world a better place
    });
  }
}
