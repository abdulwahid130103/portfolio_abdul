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
  document.addEventListener("DOMContentLoaded", function () {
    // Bagian yang ingin di-scroll otomatis
    const sections = ["#hero", "#about", "#project"];
    const sectionOffsets = sections.map(
      (id) => document.querySelector(id).offsetTop
    );
  });
};

// Inisialisasi LocomotiveScroll
const locomotiveScroll = new LocomotiveScroll({
  el:
    document.querySelector("[data-scroll-container]") ||
    document.documentElement,
  smooth: true,
  smoothMobile: true,
  lenisOptions: {
    lerp: 0.1, // tingkat kehalusan (adjust as needed)
    duration: 2, // durasi scroll
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // efek easing untuk animasi halus
  },
});
