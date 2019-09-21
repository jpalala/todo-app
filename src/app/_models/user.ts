export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  auth0: string;
  fb_id: number;

  constructor(id: number,
    username: string,
    email: string,
    password: string,
     auth0: string,
    fb_id: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.auth0 = auth0;
    this.fb_id = fb_id;
  }
}
