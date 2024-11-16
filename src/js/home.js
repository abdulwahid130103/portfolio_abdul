let beforeIndex = 100;
function transitionHeroIndexPhone(index) {
  const sections = document.querySelectorAll("section");
  const idSection = sections[index].id;

  let mm = gsap.matchMedia();
  if (index != beforeIndex) {
    mm.add("(min-width: 992px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#${idSection}`,
            start: "top 10%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          ".container-image-me",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: 100,
          },
          {
            duration: 1,
            opacity: 0.2,
            ease: "power1.inOut",
            x: -20,
          }
        )
        .to(".container-image-me", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#${idSection}`,
            start: "top 10%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          ".text-name",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 0.5,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".text-name", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });

      gsap
        .timeline({
          delay: 0.2,
          scrollTrigger: {
            trigger: `#${idSection}`,
            start: "top 10%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          ".text-posisi",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 0.5,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".text-posisi", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });

      gsap
        .timeline({
          delay: 0.4,
          scrollTrigger: {
            trigger: `#${idSection}`,
            start: "top 10%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          ".text-tentang",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 0.5,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".text-tentang", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });

      gsap
        .timeline({
          delay: 0.6,
          scrollTrigger: {
            trigger: `#${idSection}`,
            start: "top 10%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          ".containts-button-hero",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 0.5,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".containts-button-hero", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });
    });

    mm.add("(max-width: 768px)", () => {
      gsap
        .timeline()
        .fromTo(
          ".container-image-me",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".container-image-me", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });

      gsap
        .timeline()
        .fromTo(
          ".text-name",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".text-name", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });
      gsap
        .timeline({ delay: 0.2 })
        .fromTo(
          ".text-posisi",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".text-posisi", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });
      gsap
        .timeline({ delay: 0.4 })
        .fromTo(
          ".text-tentang",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".text-tentang", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });
      gsap
        .timeline({ delay: 0.6 })
        .fromTo(
          ".containts-button-hero",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
          },
          {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            x: 20,
          }
        )
        .to(".containts-button-hero", {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          x: 0,
        });
    });
  }

  //   mm.revert();
}

function scrollInIndex() {
  const sections = document.querySelectorAll("section");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  let currentSection = 0;
  let isScrolling = false;
  let scrollTimeout;

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    updateActiveLink(index);
    transitionHeroIndexPhone(index);
  }

  function updateActiveLink(index) {
    sidebarLinks.forEach((link, i) => {
      link.classList.toggle("menu-active", i === index);
    });
  }

  function debounce(func, delay) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(func, delay);
  }

  // Event listener untuk scroll dengan mouse
  window.addEventListener("wheel", (e) => {
    debounce(() => {
      if (!isScrolling) {
        isScrolling = true;
        const delta = e.deltaY;

        const previousIndex = currentSection;
        if (delta > 0 && currentSection < sections.length - 1) {
          currentSection++;
        } else if (delta < 0 && currentSection > 0) {
          currentSection--;
        }

        if (previousIndex !== currentSection) {
          scrollToSection(currentSection);
        }

        setTimeout(() => {
          isScrolling = false;
        }, 600); // Adjust delay to control smoothness
      }
    }, 100);
  });
  let touchStartY = 0;

  // Event listener untuk perangkat sentuh
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  });

  window.addEventListener("touchend", (e) => {
    const touchEndY = e.changedTouches[0].clientY;

    debounce(() => {
      if (!isScrolling) {
        isScrolling = true;

        const previousIndex = currentSection;
        if (touchStartY > touchEndY && currentSection < sections.length - 1) {
          currentSection++;
        } else if (touchStartY < touchEndY && currentSection > 0) {
          currentSection--;
        }

        if (previousIndex !== currentSection) {
          scrollToSection(currentSection);
        }

        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    }, 100);
  });
}

$(document).ready(function () {
  scrollInIndex();
  transitionHeroIndexPhone(0);
});
