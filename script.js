// Toggle Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll to Sections
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: "smooth"
    });

    navLinks.classList.remove("active"); // Close menu on small screens
  });
});

// heading animation
var typed = new Typed('#element', {
    strings: ['A Full-Stack Developer|', 'A Tech-Enthusiast|'],
    typeSpeed: 60,
    loop: true, // Add this line to make the animation loop continuously
    backSpeed: 60, // Optional: controls the speed of the "backspace" effect
    backDelay: 1000 
  });

// JavaScript for automatic carousel for Project 1
let slideIndex1 = 0;
const slides1 = document.querySelectorAll(" .carousel-slide");
const dots1 = document.querySelectorAll(".carousel-dot");

function showSlides1() {
    for (let i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    }
    for (let i = 0; i < dots1.length; i++) {
        dots1[i].classList.remove("active");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].classList.add("active");
    setTimeout(showSlides1, 3000); // Change slide every 3 seconds
}

function currentSlide1(n) {
    slideIndex1 = n;
    showSlides1();
}

// Initialize first carousel
showSlides1();


// JavaScript for automatic carousel for Project 2
let slideIndex2 = 0;
const slides2 = document.querySelectorAll(" .carousel-slide2");
const dots2 = document.querySelectorAll(" .carousel-dot2");

function showSlides2() {
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {
        slideIndex2 = 1;
    }
    for (let i = 0; i < dots2.length; i++) {
        dots2[i].classList.remove("active");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].classList.add("active");
    setTimeout(showSlides2, 3000); // Change slide every 3 seconds
}

function currentSlide2(n) {
    slideIndex2 = n;
    showSlides2();
}

// Initialize second carousel
showSlides2();


//*******************  Resume download  ************ */

document.getElementById("resume-button").addEventListener("click", function() {
    // URL of your resume file
    const resumeUrl = "./Ashwini-Patil-Resume.pdf"; // Replace with the actual path to your resume file

    // Open resume in a new tab
    window.open(resumeUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "./Ashwini-Patil-Resume.pdf"; // Customize the download filename
    link.style.display = "none"; // Hide the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.getElementById("resume-button1").addEventListener("click", function () {
    // URL of your resume file
    const resumeUrl = "./Ashwini-Patil-Resume.pdf"; // Replace with the actual path to your resume file

    // Open resume in a new tab
    window.open(resumeUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "./Ashwini-Patil-Resume.pdf"; // Customize the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

