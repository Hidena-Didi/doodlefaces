//------parallax effect

const heroImg = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  heroImg.style.transform = `translateY(${scrollY * 0.5}px)`;
});

//------email address copy function

const emailIcon = document.getElementById("email");
const copiedMessage = document.getElementById("copied");

emailIcon.addEventListener("click", () => {
  const email = "doodle.faces.k.o@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    copiedMessage.classList.add("show");
    setTimeout(() => {
      copiedMessage.classList.remove("show");
    }, 1500);
  });
});
