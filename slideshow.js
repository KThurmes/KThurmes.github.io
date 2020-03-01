var slideIndex = 0;
var slideDeck = document.getElementsByClassName("slideDeckImage");
var deckLength = slideDeck.length;

/* for(int i = 0; i < deckLength; i++){
	slideDeck[i].style.display = "none";
} */

function advanceSlide(n){

	slideDeck[slideIndex].style.display = "none";
	slideIndex += n;

	if(slideIndex >= deckLength){
		slideIndex = 0;
	}
	else if(slideIndex < 0){
		slideIndex = deckLength - 1;
	}
	showSlide(slideIndex);
}

function showSlides(){
	advanceSlide(1);
	setTimeout(showSlides, 5000);
}

function showSlide(i){
	slideDeck[slideIndex].style.display = "block";
	slideIndex = i;
}

showSlides();