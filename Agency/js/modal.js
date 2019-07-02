let modal = document.getElementById('modal-box');

let mod = document.getElementById('capContent');

let images = document.getElementsByClassName('myImg');

let modalImg = document.getElementById("modal-img");

let captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    mod.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

