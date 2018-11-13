var slideIndex,slides,dots,captionText;
function initGallery(){
	slideIndex=0;
	slides=document.getElementsByClassName("imageHolder");
	slides[slideIndex].style.opacity=1;

	captionText=document.querySelector("captionTextHolder .captionText");
	captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

	dots=[];
	var dotsContainer=document.getElementbyId("dotsContainer")

	for(var i=0;<slides.length;i++){
		var dot=document.createEelement("span");
		dot.classList.add("dots");
		dotsContainer.append(dot);
		dots.push(dot);
	}

}
initGallery();