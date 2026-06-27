// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");
const icon = document.querySelector(".icon");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    icon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        icon.textContent = "☀️";
        localStorage.setItem("theme","light");

    }else{

        icon.textContent = "🌙";
        localStorage.setItem("theme","dark");

    }

});

// =========================
// SECTION ANIMATION
// =========================

const sections = document.querySelectorAll("section");

function revealSections(){

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight * 0.8){

            section.classList.add("section-show");
            section.classList.add("section-active");

        }else{

            section.classList.remove("section-active");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =========================
// ACTIVE NAV LINK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



const counters = document.querySelectorAll('.counter');

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

window.addEventListener("load", startCounters);

const btn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll',()=>{

    if(window.scrollY > 500)
        btn.classList.add('show');
    else
        btn.classList.remove('show');

});

btn.onclick = ()=>{

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

};