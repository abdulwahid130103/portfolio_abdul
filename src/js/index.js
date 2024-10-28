$(document).ready(function () {
  $("#hamburger").click(function () {
    $("#hamburger").toggleClass("hamburger-active");
    $("#nav-menu").toggleClass("hidden");
    $("#head-logo").toggleClass("head-logo-active");
    $(".container-hamburger").toggleClass("relative");
  });
});
//   navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};
