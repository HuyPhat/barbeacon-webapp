import io from "socket.io-client";
import feathers from "feathers/client";
import socketio from "feathers-socketio/client";
import authentication from "feathers-authentication-client";
import hooks from "feathers-hooks";
const localStorage = require("localstorage-memory");

const socket = io("https://staging.barbeacon.com/manager/", {
  transports: ["websocket"],
  forceNew: true
});
const feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(authentication({ storage: localStorage }));

function authLocal(username, password) {
  console.log("authenticating");
  client
    .authenticate({
      strategy: "local",
      email: username,
      password: password
    })
    .then(response => {
      console.log("Authenticated!", response);
      return client.passport.verifyJWT(response.accessToken);
    })
    .then(payload => {
      console.log("JWT Payload", payload);
      return client.service("users").get(payload.userId);
    })
    .then(user => {
      client.set("user", user);
      console.log("User", client.get("user"));
    })
    .catch(function(error) {
      console.error("Error authenticating!", error);
    });
}

// module.exports={
//   sendMessage: sendMessage,
//   authLocal: authLocal
// }

export default feathersClient;
