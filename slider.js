
// @Vladice, u drugom delu slidera, nisam uspeo da napravim da posle nekog vremena pomeri prvu sliku 
// na poslednje mesto i tako vrti u krug. Takodje, nisam uspeo da pauziram interval. Nasao sam jedino 
// kako da ga iskljuci i to radi. 
// Ako mozes da napises koju rec kako bih to mogao uraditi. 
// Hvala.


var imageFolder = document.getElementById("imageFolder")
var slider = document.getElementsByClassName('slider');
var thumb = document.getElementById("thumb");
var border = document.getElementsByClassName("border");
var imageNo = 1;

//TITTLE//

function addTittile() {
var tittle = document.createElement('h1');
var body = document.querySelector('body');
body.prepend(tittle);
tittle.textContent = "SLIDER";
}

addTittile()



// ##################### SLIDE IMAGE ##########################

// var i = 0;

// function slideImage() {
// 		imageFolder.style.marginLeft = i + "px"
// 	}
// setInterval(slideImage, 5);



// function interval() {
	
// 	if (i > -2400) {i--}
// 		else {i === 0}
// }
// setInterval(interval,5)



// function switchImage() {
// 	 for (var i = 0; i < border.length; i++) {
//         border[i].className = border[i].className.replace(" colorActive", "");
//     }
//     border[imageNo].className += " colorActive";
//     imageNo++;

//     if (imageNo == border.length) {
//         imageNo = 0;
//     }
// }
// setInterval(switchImage, 4000);



// ##################### SWITCH IMAGE #########################

function switchImage() {
    var first = imageFolder.firstElementChild
    imageFolder.appendChild(first);
    

    for (var i = 0; i < border.length; i++) {
        border[i].className = border[i].className.replace(" colorActive", "");
    }
    border[imageNo].className += " colorActive";
    imageNo++;

    if (imageNo == border.length) {
        imageNo = 0;
    }
}
    
setInterval(switchImage, 2000);



