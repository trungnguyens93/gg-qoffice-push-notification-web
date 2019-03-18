// firebase.initializeApp({
//     'messagingSenderId': '785381922472'
// });

// Init firebase
// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBCjM7eX24t-lyyhuZmFee0i8SPfgItmXg",
//     authDomain: "gcmsenderservice.firebaseapp.com",
//     databaseURL: "https://gcmsenderservice.firebaseio.com",
//     projectId: "gcmsenderservice",
//     storageBucket: "gcmsenderservice.appspot.com",
//     messagingSenderId: "785381922472"
// };
// var defaultApp = firebase.initializeApp(config);

// console.log(defaultApp);

// const messaging = firebase.messaging();

// //FIREBASE_MESSAGING.usePublicVapidKey("BAKRw67qNP15TXF7W15ZHtMjLJzWaR4v9YBHAKQTbNLTsrm-n9op2hTUoFoS2TIiENfyubYiDe0sE5X5AVBUX_Eb");

// const subscribeButton = document.getElementById('subscribe');

// subscribeButton.addEventListener("click", subscribeToNotifications);

// function subscribeToNotifications() {
//     console.log("Clicked!");

//     messaging.requestPermission()
//         .then(function (e = null) {
//             console.log("Granted!" + e);
//             return messaging.getToken()
//                 .then(function (token) {
//                     console.log(token);
//                 }).catch(function (err) {
//                     console.log("Error! :: " + err);
//                 });
//         })

// }


