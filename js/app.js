var counter = 0;
var images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];

var img = document.getElementById('gallery-image');

function next() {
    counter++;
    //counter = counter >= images.length ? 0 : counter;
    if (counter >= images.length) {counter = 0;}
    //counter%=(images.length + 1);
    img.src = images[counter];
}

function back() {
    counter--;
    //counter = counter >= images.length ? 0 : counter;
    if (counter < 0) {counter = images.length - 1;}

    //counter = (counter - 1 + images.length) % images.length;
    img.src = images[counter];
}

// 
var modal = document.getElementsByClassName('modal-container')[0];



//var isModalOpen = true;

function show(){
    modal.style.display = 'block';

    ///isModalOpen = !isModalOpen;

}

function hide(){
    modal.style.display = 'none';

    ///isModalOpen = !isModalOpen;

}