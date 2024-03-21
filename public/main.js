

// Template ID : template_vhm0e06
// Service ID : service_vop9de5
// Public Key: ZfTZk7CLCI4LO28EC
// import emailjs from '@emailjs/browser'
const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

console.log("topMenu:", topMenu);
console.log("toggleTopMenuIcon:", toggleTopMenuIcon);
document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle("ct-top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    // Click outside from Toggle top menu icon
    if (topMenu.classList.contains("ct-top-menu-expanded")) {
      topMenu.classList.remove("ct-top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});






// Banner slide show

