function formValidation() {
    var uposreq = document.registration.position;
    var ufname = document.registration.firstname;
    var ulname = document.registration.lastname;
    var utel = document.registration.tel;
    var uemail = document.registration.email;
    var uaddress = document.registration.address;
    var ueducation = document.registration.education;

    if (!allLetter(uposreq, "Position Required")) return false;
    if (!allLetter(ufname, "First Name")) return false;
    if (!allLetter(ulname, "Last Name")) return false;
    if (!allnumeric(utel, "Tel")) return false;
    if (!ValidateEmail(uemail)) return false;
    if (!alphanumeric(uaddress, "Address")) return false;
    if (!selectValidation(ueducation, "Education Level")) return false;

    alert('Form Successfully Submitted');
    return true;
}

function contactValidation() {
    var uname = document.contact.name;
    var uemail = document.contact.email;

    if (!allLetter(uname, "Name")) return false;
    if (!ValidateEmail(uemail)) return false;

    alert('Message Sent Successfully');
    return true;
}

function allLetter(inputtxt, fieldName) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        return true;
    } else {
        alert(fieldName + ' must have alphabet characters only');
        inputtxt.focus();
        return false;
    }
}

function allnumeric(inputtxt, fieldName) {
    var numbers = /^[0-9]+$/; // regex ตรวจเฉพาะตัวเลข
    if (inputtxt.value.match(numbers)) {
        return true;
    } else {
        alert(fieldName + ' must have numeric characters only');
        inputtxt.focus();
        return false;
    }
}


function alphanumeric(inputtxt, fieldName) {
    var lettersNumbers = /^[0-9a-zA-Z\s]+$/;
    if (inputtxt.value.match(lettersNumbers)) {
        return true;
    } else {
        alert(fieldName + ' must have alphanumeric characters only');
        inputtxt.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function selectValidation(inputtxt, fieldName) {
    if (inputtxt.value == "") {
        alert('Please select ' + fieldName);
        inputtxt.focus();
        return false;
    } else {
        return true;
    }
}

// เลือกปุ่ม
let mybutton = document.getElementById("btnTop");

// แสดงปุ่มเมื่อ scroll ลงมาเกิน 200px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// ฟังก์ชันเลื่อนขึ้นบนสุด
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
