var firebaseConfig = {
      apiKey: "AIzaSyB_4LnFCHIxSjLS_nW692iMxUxAWl5XfWA",
      authDomain: "let-s-chat-page.firebaseapp.com",
      projectId: "let-s-chat-page",
      storageBucket: "let-s-chat-page.appspot.com",
      messagingSenderId: "57837290628",
      appId: "1:57837290628:web:238ec6772f7bd8930aeed1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
    });
    
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData()
   {firebase.database().ref("/").on('value',
   function(snapshot) 
   {document.getElementById("output").innerHTML ="";
   snapshot.forEach(function(childSnapshot) 
   {childKey = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}