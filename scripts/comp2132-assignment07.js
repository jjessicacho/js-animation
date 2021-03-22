//three second delay before popup
const delay = 3000; 

//track if he user has already started the animation
//don't show the popup if they have
let   userHasNotStartedAnimationYet = true;


// get page elements
const popup = document.getElementById("pop-up");
const closePopup = document.getElementById("btn-close");

/*
show the pop-up after waiting for a few seconds
    setTimeout( function(){}, delayInMilliseconds );
*/
setTimeout(function(){
    popup.style.display = "block";
   popup.style.opacity = 1;
}, delay);    


/*
allow user to close and hide the pop-up after they have seen it
*/
closePopup.addEventListener("click", function(){
    popup.style.display = "none";
});


/*
-------------------------------------
Spining bike start and stop
-------------------------------------
*/
const mainPictureInHTML = document.getElementById("main-image");
const startAnimation    = document.getElementById("btn-start");
const stopAnimation     = document.getElementById("btn-stop");

//need an animation handler 
let bikeAnimationHandler;
//flag to track if user has chosen to start or stop
let keepSpining = false;
//the first image # in the group
let currentImageNumber = 1;
//the last image # in the group
const maxImageNumber = 34;
//one second delay for animation 
delayAnimation = 100;
//
let timeoutHandler;

//start button is clicked
startAnimation.addEventListener("click", function(){
    console.log("Start");

    // start the animation
    bikeAnimationHandler = requestAnimationFrame( spinImage );

});


//stop button is clicked
stopAnimation.addEventListener("click", function(){
    console.log("Stop");

    // clear interval
    clearInterval(timeoutHandler);
    // cancel the animation
    cancelAnimationFrame(bikeAnimationHandler);
});


/*
run this with each frame of animation
*/
function spinImage(){
  //display something to show new frames
  mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;
  currentImageNumber++;

  //decide if enough frames have been called
  if (currentImageNumber > maxImageNumber){
    // cancel animation
    cancelAnimationFrame(bikeAnimationHandler);
  }else{
    //if not, keep animating
    //use a callback
    //use setTimeout to slow down the speed
    timeoutHandler = setTimeout(function(){
        bikeAnimationHandler = requestAnimationFrame( spinImage );
    }, delayAnimation);
  }
}