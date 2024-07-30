importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDWuxAICNtVQTj9PDyAiSjKabeUQLTuQiI",
    authDomain: "notification-b6b5d.firebaseapp.com",
    projectId: "notification-b6b5d",
    storageBucket: "notification-b6b5d.appspot.com",
    messagingSenderId: "302879837880",
    appId: "1:302879837880:web:0583c239b2331e38156e4d",
    measurementId: "G-40DEM535T1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
   console.log("hello world")
  self.registration.showNotification(notificationTitle, notificationOptions);
});