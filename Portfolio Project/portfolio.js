//function about_me_btn(){""
//    var page=document.getElementById("about_me.html");
//    about_me_btn.innerHTML="about_me.html";
//}

//function GWC_2016_btn(){
//    var page=document.getElementById("GWC_2016.html");
//    GWC_2016_btn.innerHTML="GWC_2016.html";
//}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
//function myFunction() {
//    var x = document.getElementById("myTopnav");
//    if (x.className === "topnav") {
//        x.className += " responsive";
//    } else {
//        x.className = "topnav";
//    }
//}

function buttonAlert() {
    alert("Welcome to my page!");
}

var images = ["castonaut.jpg", "IMG_2105.jpg", "IMG_4559.jpg", "IMG_4628.jpg", "IMG_4868.jpg", "IMG_4870.jpg", "IMG_5124.jpg"];
var currentImage = 0; //defaults to image 1

function goNext() {
    currentImage +=  1;
    //loop back to the first image
    if(currentImage >= images.length) {
        currentImage = 0;
    }
    document.getElementById("mainImage").src = images[currentImage];
}
