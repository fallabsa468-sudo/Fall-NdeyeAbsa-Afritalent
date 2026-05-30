
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
      observer.unobserve(counter);
    }
  });
});

counters.forEach(counter => observer.observe(counter));
const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("navbar-scroll");
    }else{
        navbar.classList.remove("navbar-scroll");
    }

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = "🌙";
    }

});
