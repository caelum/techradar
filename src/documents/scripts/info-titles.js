var info_sections = document.querySelectorAll('.quadrant-info')

var previousScrollPosition, scroll_state
var current_position = 0

var current_section = function(){
	return info_sections.item(current_position)
}

var current_title = function(){
	return current_section().querySelector(".quadrant-title")
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
	return last_article().offsetTop
}

function updateCurrent(scroll){
	if (scroll_state == "down" && scroll >= bottom_orig_offset() && current_position < info_sections.length-1){
		current_position++
		current_section()
	}
	if(scroll_state == "up" && scroll <= top_orig_offset() && current_position > 0){
		current_position--
		current_section()
	}
}

function onScroll(e) {
	var s = window.scrollY
	scroll_state = s - previousScrollPosition > 0 ? "down" :
																									s - previousScrollPosition < 0 ? "up" :
																																							 		 "stoped"
	updateCurrent(s)

	previousScrollPosition = s
}

document.addEventListener('scroll', onScroll)