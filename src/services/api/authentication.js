import feathersClient from "services/featherClient";

export const authenticate = (payload) => {
	console.log(payload);
	return feathersClient.authenticate(payload);
};
