var card = document.getElementById('featured-image-877');
var radios = document.getElementsByTagName('input');

for (var i = 0; i < radios.length; i++) {
    radios[i].onchange = function () {
        cardColor = document.getElementById('featured-image-877').classList;
      if (cardColor.length > 0) {
        card.classList.remove(colorName);
      }
      colorName = this.parentElement.className;
      card.classList.add(colorName);
  }
}