const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const auth = require("@feathersjs/authentication-client");
const socket = io("https://staging.barbeacon.com/manager/");
const app = feathers();

// Setup the transport (Rest, Socket, etc.) here
app.configure(socketio(socket));
app.configure(auth({ storage: window.localStorage }));

// function authLocal(username, password) {
// 	console.log("authenticating");
// 	client
// 		.authenticate({
// 			strategy: "local",
// 			email: username,
// 			password: password,
// 		})
// 		.then((response) => {
// 			console.log("Authenticated!", response);
// 			return client.passport.verifyJWT(response.accessToken);
// 		})
// 		.then((payload) => {
// 			console.log("JWT Payload", payload);
// 			return client.service("users").get(payload.userId);
// 		})
// 		.then((user) => {
// 			client.set("user", user);
// 			console.log("User", client.get("user"));
// 		})
// 		.catch(function(error) {
// 			console.error("Error authenticating!", error);
// 		});
// }

// module.exports={
//   sendMessage: sendMessage,
//   authLocal: authLocal
// }

export default app;
