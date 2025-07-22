let lastImage = "";

function dingDongButton() {
  const image = document.getElementById('dingimage');
  const dingdongs = ["jake2.PNG", "rallemus.PNG", "rallemus2.png", "dingdong1.png", "dingdong2.jpg",
                      "dingdong3.jpg","dingdong4.jpg","dingdong5.png","dingdong6.jpg","dingdong7.jpg",
                      "dingdong8.png","dingdong9.png","dingdong10.png","dingdong11.png","dingdong12.png",
                      "dingdong13.png","dingdong14.png","dingdong15.png"
  ];

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