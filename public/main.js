const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle('ct-top-menu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    // Click outside from Toggle top menu icon
    if(topMenu.classList.contains('ct-top-menu-expanded')){
        topMenu.classList.remove('ct-top-menu-expanded')
        topMenu.classList.add('hidden')
    }
  }
});
