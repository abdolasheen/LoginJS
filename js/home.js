// import { sInEmail } from "./script.js";
//?import is not working
function getLocal() {
  return JSON.parse(localStorage.getItem("currentUser"));
}
document.querySelector("#welcome").innerText = `Welcome ${getLocal()[0].Email}`;
