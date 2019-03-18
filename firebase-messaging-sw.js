// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js');

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
// firebase.initializeApp(config);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '785381922472'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = 'Background Message Title';
    var notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
// messaging.onMessage(function (payload) {
//     console.log('Message received. ', payload);
//     // ...
// });

