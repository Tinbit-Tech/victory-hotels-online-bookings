
        document.addEventListener("scroll", function () {
                const btn = document.querySelector(".btn-book");
                const backgroundColor = window.getComputedStyle(btn).backgroundColor;
        
                // Detect background color behind the button
                const rect = btn.getBoundingClientRect();
                const elementBehind = document.elementFromPoint(rect.left, rect.top);
        
                if (elementBehind) {
                    const bgColorBehind = window.getComputedStyle(elementBehind).backgroundColor;
        
                    // Compare colors and change if they match
                    if (bgColorBehind === backgroundColor) {
                        btn.style.color = "black"; // Change text color
                        btn.style.background = "yellow"; // Change button background
                    } else {
                        btn.style.color = "rgba(253, 101, 0, 0.918)"; // Original text color
                        btn.style.background = "#2b1001e1"; // Original button background
                    }
                }
            });
  
        window.addEventListener("scroll", () => {
            const heroSection = document.querySelector(".hero");
            const scrollY = window.scrollY;
    
            if (scrollY > 50) {
                heroSection.classList.add("scrolled");
            } else {
                heroSection.classList.remove("scrolled");
            }
        });
   
  const sliderImages = document.querySelectorAll('.slider-img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100; // Calculate offset
    sliderImages.forEach((img) => {
        img.style.transform = `translateX(${offset}%)`;
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length; // Loop back to the first
    updateSlider();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length; // Loop back to the last
    updateSlider();
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Auto-slide every 5 seconds
setInterval(showNextImage, 5000);

