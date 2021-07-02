
var firebaseConfig = {
      apiKey: "AIzaSyDmgvX9vGFM-OGiykkX_H3_piTolvwcA8A",
      authDomain: "chat-app-59431.firebaseapp.com",
      databaseURL: "https://chat-app-59431-default-rtdb.firebaseio.com",
      projectId: "chat-app-59431",
      storageBucket: "chat-app-59431.appspot.com",
      messagingSenderId: "1048781662952",
      appId: "1:1048781662952:web:0b6247fd89e61ad7fb375d"    
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
