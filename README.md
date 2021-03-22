# js-animation
Using `setTimeout()` and `requestAnimationFrame()` in JavaScript to apply various animations to an HTML document

## Requirements
- pop up message (fades in)
- product spin showcase (images 1-34) 
```jsx
mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;
```
- start and stop button
- the default spining animation speed per frame is too fast, add a `setTimeout` to slow down to 100 milliseconds 

## Missing
- If the user clicks the Start button within 3 seconds of arriving on the page, do not show pop up message.
```jsx
/*
Assignment BONUS
----------------------------
need a handler for this animation
*/
let popupAnimationHandler;
/*
track the opacity from 0-1
transparent - opaque
*/
let opacityValue = 0;
/*
show the pop-up after waiting for a few seconds
    setTimeout( function(){}, delayInMilliseconds );
*/
setTimeout( function(){
    //but dont show pop up if user has already started the animation
    if(userHasNotStartedAnimationYet === true){
        //request a frame of animation
        popupAnimationHandler = requestAnimationFrame( fadeIn );
    }
} , delay);
```
