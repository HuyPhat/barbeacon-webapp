import { observable, action } from "mobx";
import * as AuthService from "services/api/authentication";

class AuthStore {
  @observable inProgress = false;
  @observable errors = null;
  @observable loginPayload = {
    username: "",
    password: ""
  };

  @action login() {
    this.inProgress = true;
    this.errors = null;
    AuthService.login(loginPayload);
  }
}

export default new AuthStore();
