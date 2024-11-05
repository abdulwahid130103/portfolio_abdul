function toggleNavbar() {
  $("#hamburger").toggleClass("hamburger-active");
  $("#nav-menu").toggleClass("hidden");
  $("#head-logo").toggleClass("head-logo-active");
  $(".container-hamburger").toggleClass("relative");
}

function scrollWindow() {
  //   navbar fixed
  const header = document.querySelector("header");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(
    ".container-sidebar .container-sidebar-sub li a"
  );
  window.onscroll = function () {
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("nav-fixed");
    } else {
      header.classList.remove("nav-fixed");
    }
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      // console.log("nama: " + id);

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("menu-active");
          document
            .querySelector(
              ".container-sidebar .container-sidebar-sub li a[href*=" + id + "]"
            )
            .classList.add("menu-active");
        });
      }
    });
  };
}
$(document).ready(function () {
  $("#hamburger").click(function () {
    toggleNavbar();
  });
  $(".nav-link").click(function () {
    toggleNavbar();
  });
  scrollWindow();
  // scrollSmothMenu();
});
