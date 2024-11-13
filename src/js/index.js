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

function zoomInImagePopupIcon() {
  const icon = document.querySelector(".focus-icon-image-popup");
  const imagePopup = document.querySelector(".img-popup");

  icon.addEventListener("click", function () {
    const scale = 1.5;

    if (!imagePopup.classList.contains("zoomed")) {
      imagePopup.classList.add("zoomed");
      imagePopup.style.transformOrigin = "center";
      imagePopup.style.transform = `scale(${scale})`;
    } else {
      imagePopup.classList.remove("zoomed");
      imagePopup.style.transform = "scale(1)";
      imagePopup.style.transformOrigin = "center";
    }
  });
}

function imageAboutmeClick() {
  const aboutMeSection = document.getElementById("aboutme");
  const imagePopupContainer = document.querySelector(".container-image-popup");
  const popupImage = document.querySelector(".img-popup");
  const body = document.querySelector("body");

  aboutMeSection.addEventListener("click", (event) => {
    const clickedImage = event.target;
    if (clickedImage.tagName === "IMG") {
      popupImage.src = clickedImage.src;
      body.classList.remove("overflow-y-auto");
      body.classList.add("overflow-y-hidden");
      imagePopupContainer.classList.remove("hidden");
    }
  });

  const deleteIcon = document.querySelector(".delete-icon-image-popup");

  deleteIcon.addEventListener("click", () => {
    imagePopupContainer.classList.add("hidden");
    body.classList.remove("overflow-y-hidden");
    body.classList.add("overflow-y-auto");
    popupImage.src = "";
  });
}

function zoomInImagePopup() {
  const imagePopup = document.querySelector(".img-popup");

  imagePopup.addEventListener("dblclick", function (e) {
    const rect = imagePopup.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scale = 2;
    let translateX = ((x / rect.width) * 100 - 50) * -1;
    let translateY = ((y / rect.height) * 100 - 50) * -1;

    translateX = Math.max(-50, Math.min(translateX, 50));
    translateY = Math.max(-50, Math.min(translateY, 50));

    if (!imagePopup.classList.contains("zoomed")) {
      imagePopup.classList.add("zoomed");
      imagePopup.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%)`;
    } else {
      imagePopup.classList.remove("zoomed");
      imagePopup.style.transform = "scale(1)";
    }
  });
}

function hoverProject() {
  let items = document.querySelectorAll(".items-content");
  items.forEach((item) => {
    let maincontent = item.querySelector(".items-container-project");

    item.addEventListener("mouseover", () => {
      maincontent.classList.add("hidden");
    });

    item.addEventListener("mouseout", () => {
      maincontent.classList.remove("hidden");
    });
  });
}

$(document).ready(function () {
  $("#hamburger").click(function () {
    toggleNavbar();
  });
  $(".nav-link").click(function () {
    toggleNavbar();
  });
  scrollWindow();
  zoomInImagePopup();
  zoomInImagePopupIcon();
  imageAboutmeClick();
  hoverProject();
});
