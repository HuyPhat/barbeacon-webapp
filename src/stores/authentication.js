import { observable, action } from "mobx";
import * as AuthService from "services/api/authentication";
import { toJS } from "mobx";

class AuthStore {
	@observable inProgress = false;
	@observable errors = null;
	@observable loginPayload = {
		email: "",
		password: "",
	};

	@action setLoginPayload({ email, password }) {
		this.loginPayload.email = email;
		this.loginPayload.password = password;
	}

	@action async login() {
		this.inProgress = true;
		this.errors = null;
		try {
			const rs = await AuthService.authenticate(this.loginPayload);
			console.log(rs);
		} catch (e) {
			this.errors = e;
		} finally {
			this.inProgress = false;
		}
	}
}

export default new AuthStore();
