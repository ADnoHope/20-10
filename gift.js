
var to = 'Mẹ';
var gift_url = 'https://vt.tiktok.com/ZSjJsf97K/';
var gift_image_url = 'z5950333268396_d5a13a4fc84864193dab999fc84ca758.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add("card-show");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

