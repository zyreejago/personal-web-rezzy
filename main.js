// Toggle Class Active

const NavbarNav = document.querySelector(`.navbar-nav`);

document.querySelector(`#humberger-menu`).onclick = () => {
  NavbarNav.classList.toggle("active");
};

// Klik dimanapun sidebar navnya akan tutup

const hamburger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
});

const download1 = document.querySelector("#btn");

function ClickButton() {
  download1.style.background = "#112e42";
  download1.innerHTML = "Download Success";
}
