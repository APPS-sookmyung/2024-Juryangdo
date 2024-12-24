let wines = [
  {
    id: 301,
    titleKO: "두르뜨, 그랑 떼루아",
    category: "소테른",
    title: "Dourthe, Grands Terroirs Sauternes",
    contry: "프랑스",
    type: "white",
    alchol: 13.5,
    calresult: 0,
    bottle: 750,
    sweet: 5,
    acid: 3,
    body: 4,
    tannin: 1,
    aroma: "살구, 자몽, 꿀",
    tastingNote:
      "진한 노란색을 띠며 살구나 자몽 등 농익은 과일향과 아카시아 꽃, 꿀향이 피어오른다. 입 아네서는 진한 풍미화 함께 적절한 산도가 조화를 이루는 달콤한 디저트 와인이다.",
  },
  {
    id: 302,
    titleKO: "덕혼",
    category: "디코이 샤도네이",
    title: "Duckhorn, Decoy Chardonnay",
    contry: "미국",
    type: "white",
    alchol: 14,
    calresult: 0,
    bottle: 750,
    sweet: 1,
    acid: 3,
    body: 4,
    tannin: 1,
    aroma: "사과, 자몽, 아카시아, 미네랄",
    tastingNote:
      "푸른 사과와 자몽, 아카시아의 사랑스러운 향을 가지고 있다. 이에 더불어 젖은 돌 느낌의 미네랄 풍미가 생생한 산도와 어우러져 와인의 품격을 한층 높여준다.",
  },
  {
    id: 303,
    titleKO: "브레드&버터",
    category: "피노 누아",
    title: "Bread&Butter, Pinot Noir",
    contry: "미국",
    type: "red",
    alchol: 14,
    calresult: 0,
    bottle: 750,
    sweet: 2,
    acid: 3,
    body: 4,
    tannin: 2,
    aroma: "라즈베리, 체리, 카시스, 오크",
    tastingNote:
      "선명한 루비색을 띠며 입 안에서는 달콤한 잘익은 베리류의 풍미가 감칠맛과 함께 입안 전체를 감돌며 부드러운 타닌과 함께 길게 이어지는 와인이다.",
  },
  {
    id: 304,
    titleKO: "카스텔라레",
    category: "키안티 클라시코",
    title: "Castellare, Chianti Classico",
    contry: "이탈리아",
    type: "red",
    alchol: 13.5,
    calresult: 0,
    bottle: 750,
    sweet: 1,
    acid: 4,
    body: 4,
    tannin: 3,
    aroma: "체리",
    tastingNote:
      "윤기가 흐르는 가넷의 붉은 빛을 띠고 붉은 딸기류 과일향이 진하고 향기롭다. 집약된 과실의 맛이 느껴지며, 부드러운 탄닌의 매끄러운 질감과 균형 잡힌 구조감을 지닌 와인이다.",
  },
];

const myAlchol = localStorage.getItem(My_Alchol);
const drinks = document.getElementById("drinks");

function calculateWine(wine) {
  const alcholEach = wine.alchol;
  const resultWine = (myAlchol / (150 * alcholEach * 0.7947)) * 100;
  return resultWine;
}
//잔계산한 값 저장하기
for (var i = 0; i < wines.length; i++) {
  wines[i].calresult = Math.round(calculateWine(wines[i]) * 10) / 10;
}

// 술 정보 나열하기
function paintDrink(drink, rownumber) {
  const row = document.getElementById(`rowbox${rownumber}`);

  const itembox = document.createElement("div");
  itembox.className = "itembox";
  row.appendChild(itembox);

  const item = document.createElement("div");
  item.className = "item";

  const scriptbox = document.createElement("div");
  scriptbox.className = "scriptbox";
  scriptbox.style.display = "none";

  const script = document.createElement("div");
  script.className = "script";
  if (drink.type == "white") {
    var typetext = "화이트와인";
  } else {
    var typetext = "레드와인";
  }
  script.innerHTML = `국가: ${drink.contry}<br>${typetext}<br>주종: ${drink.category}<br>용량: ${drink.bottle}ml<br>도수: ${drink.alchol}%<br>당도: ${drink.sweet}<br>산도: ${drink.acid}<br>바디: ${drink.body}<br>탄닌: ${drink.tannin}<br>특징: ${drink.tastingNote}`;

  const plusbox = document.createElement("div");
  plusbox.className = "plusbox";

  const plusbtn = document.createElement("button");
  plusbtn.className = "plusbtn";
  plusbtn.innerText = "+";
  plusbtn.type = "button";
  plusbtn.addEventListener("click", () => {
    if (plusbtn.innerText == "+") {
      plusbtn.innerText = "-";
      item.style.display = "none";
      scriptbox.style.display = "block";
    } else {
      plusbtn.innerText = "+";
      scriptbox.style.display = "none";
      item.style.display = "block";
    }
  });
  // plusbtn.addEventListener("focus", () =>{
  //   plusbtn.innerText = '-';
  //   item.style.display ='none';
  //   scriptbox.style.display = 'block';
  // });
  plusbtn.addEventListener("blur", () => {
    plusbtn.innerText = "+";
    scriptbox.style.display = "none";
    item.style.display = "block";
  });

  const firstbox = document.createElement("div");
  firstbox.className = "firstbox";

  const secondbox = document.createElement("div");
  secondbox.className = "secondbox";

  const bottleimgbox = document.createElement("div");
  if (drink.type == "white") {
    bottleimgbox.className = "whitebox";
  } else if (drink.type == "red") {
    bottleimgbox.className = "redbox";
  }

  const namebox = document.createElement("div");
  namebox.className = "namebox";

  const flag = document.createElement("img");
  flag.className = "flag";
  flag.src = `juryangdo/flag/${drink.contry}.webp`;

  const outcircle = document.createElement("div");
  outcircle.className = "outcircle";
  outcircle.id = "sojucircle";

  const drinkImage = document.createElement("img");
  drinkImage.className = "drinkImage";
  drinkImage.src = `juryangdo/img/${drink.id}.webp`;

  const incircle = document.createElement("div");
  incircle.className = "incircle";

  const name1 = document.createElement("div");
  name1.className = "name1";
  name1.innerText = drink.titleKO;

  const name2 = document.createElement("div");
  name2.className = "name2";
  name2.innerText = drink.category;

  const glassbox = document.createElement("div");
  glassbox.className = "glassbox";

  const guidetext = document.createElement("div");
  guidetext.className = "guidetext";

  //잔 이미지 넣기
  const bottle = Math.round((drink.bottle / 50) * 10) / 10;

  const leftoverImage = document.createElement("img");
  leftoverImage.className = "glass";

  const glassintext = document.createElement("div");
  glassintext.className = "intext";

  const guide = document.createElement("div");
  guide.className = "guide";
  guide.innerText = "잔 마실 수 있어요";

  const bottleintext = document.createElement("div");
  bottleintext.className = "intext";

  const bottleguide = document.createElement("div");
  bottleguide.className = "guide";
  bottleguide.innerText = "병 ";

  if (drink.calresult > bottle) {
    const countBottle = Math.floor(drink.calresult / bottle);
    const leftcalresult =
      Math.floor((drink.calresult - bottle * countBottle) * 10) / 10;
    const countGlass = Math.floor(leftcalresult);

    for (var i = 0; i < countBottle; i++) {
      const bottleImage = document.createElement("img");
      bottleImage.className = "glass";
      bottleImage.src = "juryangdo/glassimg/bottle.webp";
      glassbox.appendChild(bottleImage);
    }
    for (var i = 0; i < countGlass; i++) {
      const glassImage = document.createElement("img");
      glassImage.className = "glass";
      glassImage.src = "juryangdo/glassimg/wine10.webp";
      glassbox.appendChild(glassImage);
    }

    const number = Math.round((leftcalresult - countGlass) * 10);

    bottleintext.innerHTML = `<b>${countBottle}</b>`;
    guidetext.appendChild(bottleintext);
    guidetext.appendChild(bottleguide);

    if (number != 0) {
      leftoverImage.src = `juryangdo/glassimg/wine${number}.webp`;
      glassbox.appendChild(leftoverImage);

      glassintext.innerHTML = `<b>${leftcalresult}</b>`;
      guidetext.appendChild(glassintext);
      guidetext.appendChild(guide);
    } else {
      bottleguide.innerText = bottleguide.innerText + "마실 수 있어요";
    }
  } else {
    const count = Math.floor(drink.calresult);
    for (var i = 0; i < count; i++) {
      const glassImage = document.createElement("img");
      glassImage.className = "glass";
      glassImage.src = "juryangdo/glassimg/wine10.webp";
      glassbox.appendChild(glassImage);
    }
    const number = Math.round((drink.calresult - count) * 10);
    if (number != 0) {
      leftoverImage.src = `juryangdo/glassimg/wine${number}.webp`;
      glassbox.appendChild(leftoverImage);
    }

    glassintext.innerHTML = `<b>${drink.calresult}</b>`;
    guidetext.appendChild(glassintext);
    guidetext.appendChild(guide);
  }

  itembox.appendChild(item);
  itembox.appendChild(scriptbox);
  itembox.appendChild(plusbox);
  item.appendChild(firstbox);
  item.appendChild(secondbox);
  firstbox.appendChild(bottleimgbox);
  firstbox.appendChild(namebox);
  bottleimgbox.appendChild(flag);
  bottleimgbox.appendChild(outcircle);
  outcircle.appendChild(drinkImage);
  outcircle.appendChild(incircle);
  namebox.appendChild(name1);
  namebox.appendChild(name2);
  secondbox.appendChild(glassbox);
  secondbox.appendChild(guidetext);
  scriptbox.appendChild(script);
  plusbox.appendChild(plusbtn);
}
for (var i = 0; i < wines.length; i++) {
  if (i % 3 == 0) {
    const rowbox = document.createElement("div");
    rowbox.className = "rowbox";
    rowbox.id = `rowbox${i / 3}`;
    drinks.appendChild(rowbox);
  }
}
for (var i = 0; i < wines.length; i++) {
  paintDrink(wines[i], Math.floor(i / 3));
}
