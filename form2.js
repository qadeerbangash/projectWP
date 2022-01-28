const firebaseConfig = {
    apiKey: "AIzaSyBbxIdavoOcxcMEJO1rSikgiPHgV-3ZMNA",
    authDomain: "wp-project-c7be2.firebaseapp.com",
    databaseURL: "https://wp-project-c7be2-default-rtdb.firebaseio.com",
    projectId: "wp-project-c7be2",
    storageBucket: "wp-project-c7be2.appspot.com",
    messagingSenderId: "742472805981",
    appId: "1:742472805981:web:0e1f40ba5cf7e6bb6827b4",
    measurementId: "G-WPM0LMRTNQ"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var firebaseRef = firebase.database().ref("wp-project");
firebaseRef.on("value", function(snapshot){
  snapshot.forEach(function(element){
    document.querySelector('#root').innerHTML +=`
    <div>${element.val()}</div>`
  });
})


