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