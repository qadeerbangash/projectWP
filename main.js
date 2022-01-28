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
var contactFormDB = firebase.database().ref("wp-project");

document.getElementById("form").addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();
  
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var dob = getElementVal("dob");
    var email = getElementVal("email");
    var number = getElementVal("number");
    var gender = getElementVal("gender");
    var address = getElementVal("address");
    var city = getElementVal("city");
    var code = getElementVal("code");
    var state = getElementVal("state");
    var country = getElementVal("country");
    var hobbies = getElementVal("hobbies");
    var other = getElementVal("other");
    var education = getElementVal("education");
    

    
  
    saveMessages(fname, lname, dob,email,number,gender,address,city,code,state,country,hobbies,other,education);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("form").reset();
  }


  const saveMessages = (fname, lname, dob,email,number,gender,address,city,code,state,country,hobbies,other,education) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      First_Name: fname,
      Last_Name: lname,
      Date_Of_Birth:dob,
      Email:email,
      Mobile_Number:number,
      Gender:gender,
      Address:address,
      Name_Of_City:city,
      Pin_Code:code,
      State:state,
      Country_Name:country,
      Hobbies:hobbies,
      Other_Hobbies:other,
      Education:education,
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  function sub(){
    document.location.href="form2.html"
  }