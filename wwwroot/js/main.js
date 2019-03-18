{
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

    // navigator.serviceWorker.register('../sw.js');
    // navigator.serviceWorker.ready;

    firebase.initializeApp({
        'messagingSenderId': '785381922472'
    });

    const messaging = firebase.messaging();

    const btnRegisterToken = document.getElementById('btnRegisterToken');
    const txtRegisterToken = document.getElementById('txtRegisterToken');

    btnRegisterToken.addEventListener('click', register);

    function register() {
        alert("Sign In");

        messaging.requestPermission().then(function () {
            console.log('Notification permission granted.');
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            // ...

            getRegisterToken();

        }).catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });

        //FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAnthProvider());
    }

    function getRegisterToken() {
        messaging.getToken().then(function (currentToken) {
            if (currentToken) {
                //sendTokenToServer(currentToken);
                //updateUIForPushEnabled(currentToken);

                txtRegisterToken.value = currentToken;

                console.log(currentToken);
            } else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                // Show permission UI.
                //updateUIForPushPermissionRequired();
                //setTokenSentToServer(false);
            }
        }).catch(function (err) {
            console.log('An error occurred while retrieving token. ', err);
            //showToken('Error retrieving Instance ID token. ', err);
            //setTokenSentToServer(false);
        });
    }
        
    messaging.onMessage(function (payload) {
        console.log('Message received. ', payload);
        // ...
    });
}