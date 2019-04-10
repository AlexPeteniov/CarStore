export class AuthService {
  loggedIn = false;
  login() {
    this.loggedIn = true;
  }
}
