var courseLinks = document.getElementsByClassName("course-links");
var courseContents = document.getElementsByClassName("course-contents");
var coursesAvailable = document.getElementById("coursesAvailable");
var mentors = document.getElementById("mentors");
var students = document.getElementById("students");
var recognition = document.getElementById("recognition");

coursesAvailable.innerHTML = 0;
mentors.innerHTML = 0;
students.innerHTML = 0;
recognition.innerHTML = 0; 

function animateFigures () {
    const figures = document.querySelectorAll('.figures h1');
    figures.forEach((figure) => {
        const targetNumber = parseInt(figure.dataset.target);
        let currentNumber = 0;
        const interval = setInterval(() => {
            if (currentNumber < targetNumber){
                currentNumber += 10;
                figure.innerText = currentNumber.toString();
            }
            else {
                clearInterval(interval);
            }
        }, 10);
    })
}


window.addEventListener("scroll", () => {
    const figuresContainer = document.querySelector(".figures");
    const top = figuresContainer.getBoundingClientRect().top;
    const height = figuresContainer.getBoundingClientRect().height;
    if (top + height / 2 < window.innerHeight) {
        animateFigures();
        window.removeEventListener("scroll", animateFigures);
    }
});


function openCourse(courseName, event) {

console.log("Clicked:", courseName); 
// Remove active link and active content from all tabs
for (courseLink of courseLinks) {
    courseLink.classList.remove("active-link");
}

for (courseContent of courseContents) {
    courseContent.classList.remove("active-content");
}

// Add active link class to clicked link
event.currentTarget.classList.add('active-link');

// Add active content class to the corresponding content section
document.getElementById(courseName).classList.add('active-content');
}