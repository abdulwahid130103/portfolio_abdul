function toggleNavbar() {
  $("#hamburger").toggleClass("hamburger-active");
  $("#nav-menu").toggleClass("hidden");
  $("#head-logo").toggleClass("head-logo-active");
  $(".container-hamburger").toggleClass("relative");
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
  zoomInImagePopup();
  zoomInImagePopupIcon();
  hoverProject();
});
