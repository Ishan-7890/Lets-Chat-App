
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBVijfSdqhaqmWKYMJQwqiCmIyYq5B9S10",
      authDomain: "kwitter-58391.firebaseapp.com",
      databaseURL: "https://kwitter-58391-default-rtdb.firebaseio.com",
      projectId: "kwitter-58391",
      storageBucket: "kwitter-58391.appspot.com",
      messagingSenderId: "1078532896522",
      appId: "1:1078532896522:web:490131acaf19534c47ecf3"
    };
   // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
