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

 function addroom() {
   room_name = document.getElementById("room_name").value;
   localStorage.setItem("room_name",room_name);
firebase.database().ref("/").child(room_name).update({purpose:"adding room"});
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML += row;
      });
   });

}   

  getData();
function redirectToRoomName(name)
{
   console.log(name);
 localStorage.setItem("room_name",name);
 window.location = "kwitter_page.html";  
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}

