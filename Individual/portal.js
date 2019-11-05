function validate()
{
    var name = document.getElementById("uname")
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var subject = document.getElementById("subject");
    var subject = document.getElementById("message");

    if(name.value =="" && email.value =="" && phone.value =="" && subject.value =="" ||message.value =="")
    {
    alert("No blank values allowed");
        return false;
    }
    else
    {
        true;
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        //   openDropdown.classList.remove('show');
        }
      }
    }
  }

// Navbar menu
const navbarCollapseEl = document.getElementsByClassName('navbar-collapse')[0];
// Toggle menu button
const navbarTogglerEl = document.getElementsByClassName('navbar-toggler')[0];
// This checks if the menu is showing and if so, close it. And viceversa.
function toggleMenu() {
  const isShowingMenu = !navbarTogglerEl.classList.contains('collapsed');
  if (isShowingMenu) {
      navbarTogglerEl.classList.add('collapsed');
      navbarCollapseEl.classList.remove('show');
  } else {
      navbarTogglerEl.classList.remove('collapsed');
      navbarCollapseEl.classList.add('show');
  }
}
// We need to close the menu after the item is clicked if the toggle button is showing
function onNavbarMenuItemClick() {
  if (navbarTogglerEl.style.display !== 'none') {
      this.toggleMenu();
  }
}
// Listens for a click on the toggler menu button.
navbarTogglerEl.addEventListener('click', toggleMenu);