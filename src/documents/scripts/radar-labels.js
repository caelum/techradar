var quadrants = document.querySelectorAll(".quadrant")

function getLabel(quadrant){
  var quadrant_class = quadrant.classList.item(1)
	return document.querySelector("#" + quadrant_class + "-labels")
}

function quadrantHover() {
  var labels = getLabel(this)
 	labels.classList.add("hovered")
}

function quadrantHoverOut(){
	var labels = getLabel(this)
  labels.classList.remove("hovered")
}

function arcHover(){
  var arc = this.classList.item(1)
  var labels = getLabel(this.parentNode)
  var label = labels.querySelector("." + arc)
  if(label) label.classList.add("hovered")
}

function arcHoverOut(){
  var arc = this.classList.item(1)
  var labels = getLabel(this.parentNode)
  var label = labels.querySelector("." + arc)
  if (label) label.classList.remove("hovered")
}

document.onreadystatechange = function () {
  if(document.readyState == "complete") {
    for(var i = 0; i < quadrants.length; i++){
      quadrants[i].addEventListener("mouseover", quadrantHover)
      quadrants[i].addEventListener("mouseout", quadrantHoverOut)
      var arcs = quadrants[i].querySelectorAll(".radar-arc")
      for(var j = 0; j < arcs.length; j++){
        arcs[j].addEventListener("mouseover", arcHover)
        arcs[j].addEventListener("mouseout", arcHoverOut)
      }
    }
  }
}