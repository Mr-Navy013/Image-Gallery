let currentIndex = 0;
let startX = 0;
let images = document.querySelectorAll(".gallery img");

function openModal(img) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-img").src = img.src;
  currentIndex = Array.from(images).indexOf(img);
  updateCaption();
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove("modal-open");
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById("popup-img").src = images[currentIndex].src;
  updateCaption()
}
function updateCaption() {
   document.getElementById("caption").innerText = `Image ${currentIndex + 1} of ${images.length}`; 
  }
/* Close modal if clicked outside image */
document.getElementById("popup").addEventListener("click", function(e) {
  if (e.target.id === "popup") {
    closeModal();
  }
});
document.getElementById("popup").addEventListener("touchstart", function(e) {
   startX = e.touches[0].clientX;
   });
   
  document.getElementById("popup").addEventListener("touchend", function(e) {
     let endX = e.changedTouches[0].clientX;
     let diffX = startX - endX;
     if (diffX > 50) {
       // swipe left -> next image 
       changeImage(1);
      
    } else if (diffX < -50) {
       // swipe right -> previous image
        changeImage(-1);
       }
   });
  //  Key board response
  document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    changeImage(1); // Right arrow -> next image
  }
  if (e.key === "ArrowLeft") {
    changeImage(-1); // Left arrow -> previous image
  }
  if (e.key === "Escape") {
    closeModal(); // Esc -> close popup
  }
});


