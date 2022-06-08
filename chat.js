// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HE
const firebaseConfig = {
    apiKey: "AIzaSyCOt097CctiB8rTGfUNgYX6R2Sygl7024c",
    authDomain: "kwitter-81690.firebaseapp.com",
    databaseURL: "https://kwitter-81690-default-rtdb.firebaseio.com",
    projectId: "kwitter-81690",
    storageBucket: "kwitter-81690.appspot.com",
    messagingSenderId: "282677468967",
    appId: "1:282677468967:web:fb87b06a6e9ae56cc25302"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



