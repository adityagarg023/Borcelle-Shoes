var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-image");

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {

        var image = e.dataset.image;

        console.log(image);

        fixed.style.backgroundImage = `url("${image}")`;
        fixed.style.backgroundSize = "cover";
        fixed.style.backgroundPosition = "center";
        fixed.style.backgroundRepeat = "no-repeat";
    });
});

let heading = document.querySelector('.heading')
let design = document.querySelector('#design')
let project = document.querySelector('#project')
let execution = document.querySelector('#execution')
let text = document.querySelector('.blacky .left p')
let img = document.querySelector('.blacky .right')

design.setAttribute('marginLeft', '0.2vw');
design.setAttribute('color', 'white')
img.style.backgroundImage = "url('./Media/page4-1.jpg')"

design.addEventListener("click", function () {
    design.style.marginLeft = '0.2vw'
    design.style.color = 'white'
    project.style.marginLeft = '1.5vw'
    project.style.color = '#504A45'
    execution.style.marginLeft = '1.5vw'
    execution.style.color = '#504A45'
    text.innerHTML = 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.'
    img.style.backgroundImage = "url('./Media/page4-1.jpg')"
})

project.addEventListener("click", function () {
    project.style.marginLeft = '0.2vw'
    project.style.color = 'white'
    design.style.marginLeft = '1.5vw'
    design.style.color = '#504A45'
    execution.style.marginLeft = '1.5vw'
    execution.style.color = '#504A45'
    text.innerHTML = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.'
    img.style.backgroundImage = "url('./Media/page4-2.jpg')"
})

execution.addEventListener("click", function () {
    execution.style.marginLeft = '0.2vw'
    execution.style.color = 'white'
    design.style.marginLeft = '1.5vw'
    design.style.color = '#504A45'
    project.style.marginLeft = '1.5vw'
    project.style.color = '#504A45'
    text.innerHTML = 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.'
    img.style.backgroundImage = "url('./Media/page4-3.jpg')"
})

let loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 2900)

let comfort = document.querySelector("#comfort")
let fashion = document.querySelector("#fashion")
let performance = document.querySelector("#performance")
comfort.style.display = "none"
fashion.style.display = "none"
performance.style.display = "none"
setTimeout(function () {
    comfort.style.display = ""
}, 500)
setTimeout(function () {
    comfort.style.display = "none"
    fashion.style.display = ""
}, 1300)
setTimeout(function () {
    performance.style.display = ""
    fashion.style.display = "none"
}, 2100)