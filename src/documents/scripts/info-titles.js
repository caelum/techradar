var info_sections = document.querySelectorAll('.quadrant-info')
var previousScrollPosition, scroll_state
var current_position = 0

function cloneTitles() {
	for(var i = 0; i < info_sections.length; i++){
		var section = info_sections.item(i)
		var title = section.querySelector(".quadrant-title")
		var clonedTitle = title.cloneNode(true)
		var classess = clonedTitle.className.split(' ')
		classess.push('sticky-title-' + i, 'sticky-title')
		clonedTitle.className = classess.join(' ')
		section.insertBefore(clonedTitle, title)
		title.style.opacity = "0"
	}
}
cloneTitles()

var current_section = function(){
	return info_sections.item(current_position)
}

var current_title = function(){
	return current_section().querySelector(".sticky-title-"+ current_position)
}

var last_article = function(){
	return current_section().querySelector(".quadrant-content").lastElementChild
}

var top_orig_offset = function(){
	return current_section().offsetTop
}

var bottom_orig_offset = function(){
	return current_section().offsetHeight + current_section().offsetTop
}

var end_offset_y = function(){
	return top_orig_offset() + last_article().offsetTop
}

function doYourMagic(scroll){
	if(scroll_state == "down" && top_orig_offset() - scroll <= 16) {
		current_title().style.position = "fixed"
		current_title().style.width = "36%"
		current_title().style.top = "16px"
	}

	if(scroll_state == "down" && scroll >= end_offset_y() - 16) {
		current_title().style.position = "absolute"
		current_title().style.top = last_article().offsetTop + "px"
		if(current_position < info_sections.length-1) current_position++
		current_section()
	}

	if(scroll_state == "up" && scroll - end_offset_y() <= -16) {
		current_title().style.position = "fixed"
		current_title().style.width = "36%"
		current_title().style.top = "16px"
	}

	if(scroll_state == "up" && scroll - top_orig_offset() <= -16) {
		console.log(current_title())
		current_title().style.position = "absolute"
		current_title().style.top = "0px"
		if(current_position > 0) current_position--
		current_title()
	}
}

function onScroll(e) {
	var s = window.scrollY
	scroll_state = s - previousScrollPosition > 0 ? "down" :
																									s - previousScrollPosition < 0 ? "up" :
																																							 		 "stoped"
	doYourMagic(s)
	previousScrollPosition = s
}

document.addEventListener('scroll', onScroll)