//test
function dingDongButton() {
  const image = document.getElementById('dingimage');
  if (image.style.display === 'none' || image.style.display === '') {
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
  }
}