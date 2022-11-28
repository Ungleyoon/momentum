const img = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
];

const todayImg = img[Math.floor(Math.random() * img.length)];
const bgImg = document.createElement("img");
bgImg.classList.add("bgImg");
bgImg.src = "./img/bg/";
bgImg.src += todayImg;
document.body.append(bgImg);
