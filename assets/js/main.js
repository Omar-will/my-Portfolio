/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);
  
  
  /*=============== SERVICES MODAL ===============*/
  // Get the modal
  const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalClose = document.querySelectorAll(".services__modal-close");
  
  let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
  };
  
  modalBtns.forEach((mb, i) => {
    mb.addEventListener("click", () => {
      modal(i);
    });
  });
  
  modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
      modalViews.forEach((mv) => {
        mv.classList.remove("active-modal");
      });
    });
  });
  
  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  
  const sections = document.querySelectorAll("section[id]");
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
  
  /*=============== LIGHT DARK THEME ===============*/
  const themeButton = document.getElementById("theme-button");
  const lightTheme = "light-theme";
  const iconTheme = "bx-sun";
  
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");
  
  const getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
  
  if (selectedTheme) {
    
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      lightTheme
    );
    themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
      iconTheme
    );
  }
  
  themeButton.addEventListener("click", () => {

    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
  
  /*=============== EMAIL ===============*/
  function sendMail() {
    (function () {
      emailjs.init("8DPURZQ6Wq5Ge97Ek");
    })();
  
    var params = {
      sendername: document.querySelector("#sendername").value,
      to: document.querySelector("#to").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
  
    var serviceID = "service_ztthwyc";
    var templateID = "template_p984jv5";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        alert("Email Sent Successfully");
  
        document.querySelector("#sendername").value = "";
        document.querySelector("#to").value = "";
        document.querySelector("#subject").value = "";
        document.querySelector("#message").value = "";
  
      })
      .catch(error => {
        console.error("Error sending email:", error);
      });
  }
  
  /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });
  
  sr.reveal(`.nav__menu`, {
    delay: 100,
    scale: 0.1,
    origin: "bottom",
    distance: "300px",
  });
  
  sr.reveal(`.home__data`);
  sr.reveal(`.home__handle`, {
    delay: 100,
  });
  
  sr.reveal(`.home__social, .home__scroll`, {
    delay: 100,
    origin: "bottom",
  });
  
  sr.reveal(`.about__img`, {
    delay: 100,
    origin: "left",
    scale: 0.9,
    distance: "30px",
  });
  
  sr.reveal(`.about__data, .about__description, .about__button-contact`, {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  });
  
  sr.reveal(`.skills__content`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
  
  sr.reveal(`.services__title, .services__button, .work__button, .work__img` ,  {
    delay: 100,
    scale: 0.9,
    origin: "top",
    distance: "30px",
  });
  
  sr.reveal(`.work__card`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
  
  sr.reveal(`.testimonial__container`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
  
  sr.reveal(`.contact__info, .contact__title-info`, {
    delay: 100,
    scale: 0.9,
    origin: "left",
    distance: "30px",
  });
  
  sr.reveal(`.contact__form, .contact__form-div, .contact__title-form`, {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  });
  
  sr.reveal(`.footer, .footer__container`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
  