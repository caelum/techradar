var quadrants = document.querySelectorAll(".quadrant")

function getLabel(quadrant){
  var quadrant_class = quadrant.classList.item(1)
	return document.querySelector("#" + quadrant_class + "-labels")
}

function quadrantHover(e) {
  var labels = getLabel(this)
 	labels.classList.add("hovered")
}

function quadrantHoverOut(e){
	var labels = getLabel(this)
  labels.classList.remove("hovered")
}

document.onreadystatechange = function () {
  if(document.readyState == "complete") {
    quadrants.item(0).addEventListener("mouseover", quadrantHover)
    quadrants.item(0).addEventListener("mouseout", quadrantHoverOut)

    quadrants.item(1).addEventListener("mouseover", quadrantHover)
    quadrants.item(1).addEventListener("mouseout", quadrantHoverOut)

    quadrants.item(2).addEventListener("mouseover", quadrantHover)
    quadrants.item(2).addEventListener("mouseout", quadrantHoverOut)

    quadrants.item(3).addEventListener("mouseover", quadrantHover)
    quadrants.item(3).addEventListener("mouseout", quadrantHoverOut)
  }
}