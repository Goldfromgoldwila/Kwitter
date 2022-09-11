var firebaseConfig = {
      apiKey: "AIzaSyBMbE-wt5eFDp1nBNmNUZetq8b0CMy_Ijk",
      authDomain: "kwitter-fc961.firebaseapp.com",
      databaseURL: "https://kwitter-fc961-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc961",
      storageBucket: "kwitter-fc961.appspot.com",
      messagingSenderId: "420362713996",
      appId: "1:420362713996:web:719b7868b93dde3cf134a9",
      measurementId: "G-V87FKDM2XX"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"room name"

});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}