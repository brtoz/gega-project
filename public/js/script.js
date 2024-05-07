const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");
const body = document.querySelector("body");

sunIcon.addEventListener("click", () => {
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
  body.classList.remove("dark");
});

moonIcon.addEventListener("click", () => {
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
  body.classList.add("dark");
});


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
