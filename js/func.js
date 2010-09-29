// --------- Easy Slider

	$(document).ready(function(){	
		$("#slider").easySlider({
			auto: true, 
			continuous: true,
			numeric: true
		});
	});

// --------- Tabs

	$(document).ready(function() {
		//When page loads...
		$(".tab_content").hide(); //Hide all content
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab_content:first").show(); //Show first tab content

		//On Click Event
		$("ul.tabs li").click(function() {

			$("ul.tabs li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected tab
			$(".tab_content").hide(); //Hide all tab content

			var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			$(activeTab).fadeIn(1000); //Fade in the active ID content
			return false;
		});
	});

// --------- Cufon

Cufon.replace('h3');
Cufon.replace('h4');