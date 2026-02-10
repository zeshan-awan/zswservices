// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// HERO SLIDER
const slides = document.querySelectorAll(".slide");
let heroIndex = 0;

setInterval(() => {
  slides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + 1) % slides.length;
  slides[heroIndex].classList.add("active");
}, 4000);

// SCROLL REVEAL & COUNTER
let countersStarted = false;
const revealElements = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        if (
          entry.target.classList.contains("stats-section") &&
          !countersStarted
        ) {
          startCounters();
          countersStarted = true;
        }
      }
    });
  },
  { threshold: 0.3 },
);

revealElements.forEach((el) => observer.observe(el));

// COUNTER
function startCounters() {
  counters.forEach((counter) => {
    const target = +counter.dataset.target;
    let count = 0;
    const speed = target / 100;

    function update() {
      count += speed;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    }
    update();
  });
}

// CSR SLIDER
const images = [
  "https://picsum.photos/500/320?1",
  "https://picsum.photos/500/320?2",
  "https://picsum.photos/500/320?3",
];

let csrIndex = 0;
const sliderImage = document.getElementById("sliderImage");

document.getElementById("next").onclick = () => {
  csrIndex = (csrIndex + 1) % images.length;
  sliderImage.src = images[csrIndex];
};

document.getElementById("prev").onclick = () => {
  csrIndex = (csrIndex - 1 + images.length) % images.length;
  sliderImage.src = images[csrIndex];
};

setInterval(() => {
  csrIndex = (csrIndex + 1) % images.length;
  sliderImage.src = images[csrIndex];
}, 4000);

// SUBSCRIBE
function subscribe() {
  const email = document.getElementById("email");
  if (!email.value || !email.value.includes("@")) {
    alert("Please enter a valid email");
    return;
  }
  alert("Subscribed successfully!");
  email.value = "";
}
