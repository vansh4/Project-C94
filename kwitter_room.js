  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAdtkUKwFRQplq6QvlFOsgBpagUPbvXqdE",
      authDomain: "kwitter-final-92514.firebaseapp.com",
      databaseURL: "https://kwitter-final-92514-default-rtdb.firebaseio.com",
      projectId: "kwitter-final-92514",
      storageBucket: "kwitter-final-92514.appspot.com",
      messagingSenderId: "461863921405",
      appId: "1:461863921405:web:55494b29669cd13a568094"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function godata() {
   username=document.getElementById("euser").value;
  firebase.database().ref("/").child(username).update({purpose:"adding user"});
  }
