var previousScrollPosition, scroll_state,
		info_sections = document.getElementsByClassName('quadrant-info'),
	 	current_position = 0,
	 	didScroll = false,

		titlesList = (function() {
			var list = []
			for(var i = 0; i < info_sections.length; i++){
				var section = info_sections[i],
						title = section.getElementsByClassName("quadrant-title")[0],
						clonedTitle = title.cloneNode(true),
						classess = clonedTitle.className.split(' ')
				classess.push('sticky-title')
				clonedTitle.className = classess.join(' ')
				section.insertBefore(clonedTitle, title)
				list.push(clonedTitle)
				title.style.opacity = "0"
			}
			return list
		})(),

		contentList = (function() {
			var list = []
			for(var i = 0; i < info_sections.length; i++){
				list.push(
					info_sections[i].getElementsByClassName("quadrant-content")[0].lastElementChild
				)
			}
			return list
		})(),

		current_section = function(){
			return info_sections[current_position]
		},

		current_title = function(){
			return titlesList[current_position]
		},

		last_article = function(){
			return contentList[current_position]
		},

		top_orig_offset = function(){
			return current_section().offsetTop
		},

		bottom_orig_offset = function(){
			return current_section().offsetHeight + current_section().offsetTop
		},

		end_offset_y = function(){
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
		current_title().style.position = "absolute"
		current_title().style.top = "0px"
		if(current_position > 0) current_position--
		current_title()
	}
}

function onScroll() {
	if(didScroll){
		didScroll = false
		var s = window.scrollY
		scroll_state = s - previousScrollPosition > 0 ? "down" :
																									s - previousScrollPosition < 0 ? "up" :
																																							 		 "stoped"
		doYourMagic(s)
		previousScrollPosition = s
	}
}

document.addEventListener('scroll', function() {didScroll = true})
window.setInterval(onScroll, 20);