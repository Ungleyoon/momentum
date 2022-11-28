const text = document.querySelector(".quote-text");
const author = document.querySelector(".quote-author");

const quotes = [
  {
    text: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    text: "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "제임스 딘",
  },
  {
    text: "행복은 습관이다. 그것을 몸에 지녀라",
    author: "허버드",
  },
  {
    text: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    text: "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
    author: "헬렌켈러",
  },
  {
    text: "네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네말은 네 행동이 된다. 네행동은 네 습관이된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다.",
    author: "간디",
  },
  {
    text: "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
    author: "맹자",
  },
  {
    text: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
    author: "베토벤",
  },
  {
    text: "당신이 할 수 있다고 믿든 할 수 없다고 믿든 믿는 대로 될것이다.",
    author: "헨리 포드",
  },
  {
    text: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    text: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
    author: "알베르트 아인슈타인",
  },
  {
    text: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
    author: "데모스테네스",
  },
  {
    text: "인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자.",
    author: "플루타르코스",
  },
  {
    text: "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
    author: "머더 테레사",
  },
];

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
text.innerText = todayQuote.text;
author.innerText = todayQuote.author;
