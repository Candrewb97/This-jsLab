/*Create a single object named "slideshow" that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called photoList that contains the names of the photos as strings
2. An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
3. A nextPhoto() function that moves currentPhotoIndex to the next index ifthere is one, and:
    1. logs the current photo name.
    2. Otherwise, log "End of slideshow";
4. A prevPhoto() function that does the same thing, but backwards.
5. A function getCurrentPhoto() that returns the current photo from the list.
*/

var slideshow = {
    var photoList = ['photo1', 'photo2', 'photo3', 'photo4'],
    var currentPhotoIndex = 0,

 //the next photo function
function nextPhoto() {
    if (this.currentPhotoIndex < this.photoList.length-1) {
    	console.log(this.photoLit[this.currentPhotoIndex+1]);
    	return this.currentPhotoIndex++ ;
    }
    else{
    	console.log('End of Slideshow');
    }

},

//the previous photo function
function prevPhoto() {
	if (this.currentPhotoIndex > 0) {
		console.log(this.photoList[this.currentPhotoIndex-1]);
		return this.currentPhotoIndex-- ;
	}
	else{
		console.log('End of Slideshow');
	}
},

//the get current photo function
function getCurrentPhoto() {
	console.log(this.photoList[this.currentPhotoIndex]);
	return this.photoList[this.currentPhotoIndex];
},
}