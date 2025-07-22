let lastImage = "";

function dingDongButton() {
  const image = document.getElementById('dingimage');
  const dingdongs = ["jake2.PNG", "rallemus.PNG", "rallemus2.png"];

  if (image.style.display === 'none' || image.style.display === '') {
    image.style.display = 'block';
  } else {
    let nextImage;
    do {
      nextImage = "images/" + dingdongs[Math.floor(Math.random() * dingdongs.length)];
    } while (nextImage === lastImage);

    lastImage = nextImage;
    image.src = nextImage;
  }
}