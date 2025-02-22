document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85; 

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on load
});
// Get elements
let toggleButton = document.getElementById('toggle-button');
let extraText = document.querySelector('.extra-text');

// Add event listener to the button
toggleButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Toggle visibility of the extra paragraph
    if (extraText.style.display === "none") {
        extraText.style.display = "block"; // Show the second paragraph
        toggleButton.textContent = "Read Less"; // Change button text
    } else {
        extraText.style.display = "none"; // Hide the second paragraph
        toggleButton.textContent = "Read More"; // Reset button text
    }
});



function toggleDescription(event) {
    // Prevent the default anchor link behavior
    event.preventDefault();
    
    const serviceBox = event.target.closest('.services-box');
    const shortDesc = serviceBox.querySelector('.short-description');
    const fullDesc = serviceBox.querySelector('.full-description');
    const btn = serviceBox.querySelector('.btn');

    // Toggle visibility of descriptions
    if (fullDesc.style.display === "none" || fullDesc.style.display === "") {
        fullDesc.style.display = "block";
        shortDesc.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        fullDesc.style.display = "none";
        shortDesc.style.display = "block";
        btn.innerText = "Read More";
    }
}
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjusted the offset for better visibility
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};
menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
} 
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const formData = new FormData(form);

    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show a success or error message to the user
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});