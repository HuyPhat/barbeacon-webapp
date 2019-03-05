import feathersClient from "services/featherClient";

export const authenticate = payload => {
  return feathersClient.authenticate(payload);
};
