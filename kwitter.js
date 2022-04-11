const firebaseConfig = {
  apiKey: "AIzaSyDYz9-Sy1uAdMGFi25JTjoxSVLftxB8CWM",
  authDomain: "c-93-a21ac.firebaseapp.com",
  databaseURL: "https://c-93-a21ac-default-rtdb.firebaseio.com",
  projectId: "c-93-a21ac",
  storageBucket: "c-93-a21ac.appspot.com",
  messagingSenderId: "772462468296",
  appId: "1:772462468296:web:7f9957788c2f37460419fd"
};

  firebase.initializeApp(firebaseConfig);

function adduser() {
    adduser_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
window.location = "kwitter_room.html";
//firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}