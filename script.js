//test
function dingDongButton() {
  const image = document.getElementById('dingimage');
  const dingdongs = ["jake2.PNG", "rallemus.PNG", "rallemus2.png"];
  if (image.style.display === 'none' || image.style.display === '') {
    image.style.display = 'block';
  } else {
    const src = "images/" + dingdongs[Math.floor(Math.random() * dingdongs.length())]
    image.src = src;
  }
}