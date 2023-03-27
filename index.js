/** Once the arrow is clicked, toggle the src attribute of the image tag*/
function changeArrowColor() {
    document.getElementById("arrow-one").addEventListener("click", function() {
        // select img
        const arrowOne = document.getElementById("arrow-one")
        console.info(arrowOne.getAttribute("img"))
        if (arrowOne.getAttribute("src") === "images/down-vector.png") {
            arrowOne.setAttribute("src", "images/up-vector.png");
        } else {
            arrowOne.setAttribute("src", "images/arrow-down.png");
        }
    }
    )
}

changeArrowColor();

