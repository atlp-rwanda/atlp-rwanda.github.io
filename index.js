/** Once the arrow is clicked, toggle the src attribute of the image tag*/
function changeArrowColor() {
    document.getElementById("arrow-one").addEventListener("click", function() {
        // select img tag inside the section

        const arrowOne = document.getElementById("arrow-one").childNodes[3]
        if (arrowOne.getAttribute("src") === "./down-vector.png") {
            arrowOne.setAttribute("src", "./up-vector.png");
        } else {
            arrowOne.setAttribute("src", "./down-vector.png");
        }
    }
    )
}

changeArrowColor();

