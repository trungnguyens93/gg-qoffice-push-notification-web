{
    firebase.initializeApp({
        'messagingSenderId': '785381922472'
    });

    const messaging = firebase.messaging();

    $("#subscribe").click(function () {
        var formData = {
            "token": $("#txtRegisterToken").val()
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8082/api/notifications/subscribe",
            contentType: "application/json;",
            dataType: "json",
            data: JSON.stringify(formData),
            success: function (responseData) {
                console.log("success");
            },
            error: function (responseData) {
                console.log("error");
            }
        });
    });

    $("#register").click(function () {
        var formData = {
            "nhanVienId" : 1,
            "chucDanhId" : 1,
            "token": $("#txtRegisterToken").val(),
            "thongTin" : "Google Browser"
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8082/api/notifications/devices",
            contentType: "application/json;",
            dataType: "json",
            data: JSON.stringify(formData),
            success: function (responseData) {
                console.log("success");
            },
            error: function (responseData) {
                console.log("error");
            }
        });
    });

    function getCurrentToken() {
        messaging.getToken().then(function (currentToken) {
            if (currentToken) {
                $("#txtRegisterToken").val(currentToken);
                console.log(currentToken);
            } else {
                console.log('No Instance ID token available. Request permission to generate one.');
            }
        }).catch(function (err) {
            console.log('An error occurred while retrieving token. ', err);
        });
    }

    function sendTokenToServer() {
        var formData = {

        };

        $.ajax({
            type: "POST",
            url: controller.URL.notifications,
            contentType: "application/json;",
            dataType: "json",
            data: JSON.stringify(formData),
            success: function (responseData) {

            },
            error: function (responseData) {

            }
        });
    }

    messaging.onTokenRefresh(function () {

    });

    messaging.onMessage(function (payload) {
        console.log('Message received. ', payload);

        var notification = $(".list-group-item");
        box = notification.clone(true, true);
        box.find(".noi-dung").html(payload.data.message);

        $(".list-group-content").append(box);
    });



    $(document).ready(function () {

        // Load data for notifications
        var controller = {
            URL: {
                notifications: "http://localhost:8082/api/notifications/nhan-vien/1?status=ALL&page=1&limit=15"
            },
            HTML: {
                listOfNotifications: ".list-group-content",
                notification: ".list-group-item"
            }
        };

        $.ajax({
            type: "GET",
            url: controller.URL.notifications,
            contentType: "application/json;",
            success: function (responseData) {

                for (var i = 0; i < responseData.data.length; i++) {
                    var notification = $(controller.HTML.notification);
                    box = notification.clone(true, true);
                    box.find(".noi-dung").html(responseData.data[i].noiDung);

                    $(controller.HTML.listOfNotifications).append(box);
                }
                $(controller.HTML.notification)[0].remove();
            },
            error: function (responseData) {
                $(controller.HTML.notification)[0].remove();
            }
        });

        // Get current token
        messaging.requestPermission().then(function () {
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            // ...
            console.log('Notification permission granted.');
            getCurrentToken();

        }).catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });

    });
}