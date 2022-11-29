const img = [
  "bgimg1.jpg",
  "bgimg2.jpg",
  "bgimg3.jpg",
  "bgimg4.jpg",
  "bgimg5.jpg",
  "bgimg6.jpg",
  "bgimg7.jpg",
  "bgimg8.jpg",
  "bgimg9.jpg",
  "bgimg10.jpg",
  "bgimg11.jpg",
  "bgimg12.jpg",
  "bgimg13.jpg",
  "bgimg14.jpg",
  "bgimg15.jpg",
  "bgimg16.jpg",
];

const todayImg = img[Math.floor(Math.random() * img.length)];
const bgImg = document.createElement("img");
bgImg.classList.add("bgImg");
bgImg.src = "./img/bg/";
bgImg.src += todayImg;
document.body.append(bgImg);
