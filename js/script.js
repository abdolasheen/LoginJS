let sUpName = document.querySelector("#nameSignUp");
let sUpEmail = document.querySelector("#emailSignUp");
let sUpPass = document.querySelector("#passSignUp");
let sInEmail = document.querySelector("#sInEmail");
let sInPass = document.querySelector("#sInPass");

let allUsers = [];

function addUser() {
  let user = {
    name: sUpName.value.toLowerCase(),
    Email: sUpEmail.value.toLowerCase(),
    Pass: sUpPass.value.toLowerCase(),
  };
  if (getLocal() != null) {
    allUsers = getLocal();
  }
  const isHere = allUsers.some((e) => {
    return e.Email == user.Email || e.name == user.name;
  });

  if (!isHere && user.name != "" && user.Pass != "" && user.Email != "") {
    allUsers.push(user);
    toLocal(allUsers);
    clr();
    document.querySelector(".signUpMsg").classList.add("d-none");
  } else if (user.name == "" || user.Pass == "" || user.Email == "") {
    document.querySelector(".signUpMsg").classList.remove("d-none");
    document.querySelector(".signUpMsg").innerText =
      "Please fill all the fields";
  } else {
    document.querySelector(".signUpMsg").classList.remove("d-none");
    document.querySelector(".signUpMsg").innerText = "This user is taken";
  }
}
function logInUser() {
  let user = {
    Email: sInEmail.value,
    Pass: sInPass.value,
  };
  // checking if the local empty means u need to signup first
  if (getLocal() != null) {
    const userFounded = getLocal().some((e) => {
      return e.Email == user.Email && e.Pass == user.Pass;
    });
    if (userFounded) {
      //sending current user to local to get it in the home.js file
      let currentUser = [];
      currentUser.push(user);
      currentToLocal(currentUser);
      (async function () {
        await window.open("/home.html", "_self");
      })();
      //no need for async fcn here
    } else if (user.Email == "") {
      document.querySelector(".incorrectMSG").classList.remove("d-none");
      document.querySelector(".incorrectMSG").innerText =
        "Please enter your Email ";
    } else if (user.Pass == "") {
      document.querySelector(".incorrectMSG").classList.remove("d-none");
      document.querySelector(".incorrectMSG").innerText =
        "Please enter your Password ";
    } else {
      document.querySelector(".incorrectMSG").classList.remove("d-none");
      document.querySelector(".incorrectMSG").innerText =
        "Incorrect Email or password ";
    }
  } else {
    document.querySelector(".incorrectMSG").classList.remove("d-none");
    document.querySelector(".incorrectMSG").innerText = "Please sign up first ";
  }
}
function clr() {
  sUpEmail.value = "";
  sUpName.value = "";
  sUpPass.value = "";
}
function toLocal(arr) {
  localStorage.setItem("allUsers", JSON.stringify(arr));
}
function currentToLocal(arr) {
  localStorage.setItem("currentUser", JSON.stringify(arr));
}
function getLocal() {
  return JSON.parse(localStorage.getItem("allUsers"));
}

//!need to lookUp
//1-impoting data from another JS file
//2-select from DOM in multiple HTML file using a single JS file
// 3- refactoring validation functions
//4- refactor get from local function
