let sojus = [
  {
    id:201,
    titleKO:'진로',
    alchol: 16,
    calresult: 0,
    category: '소주',
    bottle: 360,
    mfg:'하이트진로',
    tastingNote:''
  },
  {
    id:202,
    titleKO:'처음처럼',
    alchol: 16.5,
    calresult: 0,
    category: '소주',
    bottle: 360,
    mfg:'하이트진로',
    tastingNote:'대나무 숯 정제로 이슬같은 깨끗함'
  },
  {
    id:203,
    titleKO:'톡소다 석류',
    alchol: 5,
    calresult: 0,
    category: '리큐르',
    bottle: 360,
    mfg:'무학',
    tastingNote:'상큼한 과즙과 청량한 탄산이 어우러진 무학의 과일 리큐르 제품입니다. 라인업: 석류/블루베리/사과/파인애플/레몬/트로피칼'
  },
  {
    id:204,
    titleKO:'별빛청하 스파클링',
    alchol: 7,
    calresult: 0,
    category: '청주',
    bottle: 295,
    mfg:'롯데칠성음료',
    tastingNote:'화이트 와인의 달콤함과 톡톡 튀는 탄산을 함께 머금은 알코올'
  }
]

const myAlchol = localStorage.getItem(My_Alchol);
const drinks = document.getElementById("drinks");

function calculateSoju(soju){
  const alcholEach = soju.alchol
  const resultSoju = myAlchol / (50 * alcholEach * 0.7947) * 100;
  return resultSoju
}
//잔계산한 값 저장하기
for (var i = 0; i < sojus.length; i++){
  sojus[i].calresult = Math.round(calculateSoju(sojus[i]) * 10)/ 10;
}

// 술 정보 나열하기
function paintDrink(drink, rownumber){
  const row = document.getElementById(`rowbox${rownumber}`);

  const itembox = document.createElement("div");
  itembox.className = 'itembox';
  row.appendChild(itembox);

  const item = document.createElement("div");
  item.className = 'item';

  const plusbox = document.createElement("div");
  plusbox.className = 'plusbox';

  const plusbtn = document.createElement("button");
  plusbtn.className = 'plusbtn';
  plusbtn.innerText = '+'

  const firstbox = document.createElement("div");
  firstbox.className = 'firstbox';

  const secondbox = document.createElement("div");
  secondbox.className = 'secondbox';

  const bottleimgbox = document.createElement("div");
  bottleimgbox.className = 'sojubox';

  const namebox = document.createElement("div");
  namebox.className = 'namebox';

  // const flag = document.createElement("img");
  // flag.className = 'flag';
  // flag.src = `juryangdo/flag/${drink.mfg}.png`;

  const outcircle = document.createElement("div");
  outcircle.className = 'outcircle';

  const drinkImage = document.createElement("img");
  drinkImage.className = 'drinkImage';
  drinkImage.src = `juryangdo/img/${drink.id}.png`;

  const incircle = document.createElement("div");
  incircle.className = 'incircle';

  const name1 = document.createElement("div");
  name1.className = 'name1';
  name1.innerText = drink.titleKO;

  const name2 = document.createElement("div");
  name2.className = 'name2';
  name2.innerText = drink.category;

  const glassbox = document.createElement("div");
  glassbox.className = 'glassbox';

  const guidetext = document.createElement("div");
  guidetext.className = 'guidetext';

  //잔 이미지 넣기
  const bottle = Math.round((drink.bottle / 50)*10) / 10;

  const leftoverImage = document.createElement("img");
  leftoverImage.className = 'glass';

  const glassintext = document.createElement("div");
  glassintext.className = 'intext';

  const glassboldtext = document.createElement("b");

  const guide = document.createElement("div");
  guide.className = 'guide';
  guide.innerText = '잔 마실 수 있어요'

  const bottleintext = document.createElement("div");
  bottleintext.className = 'intext';

  const bottleboldtext = document.createElement("b");

  const bottleguide = document.createElement("div");
  bottleguide.className = 'guide';
  bottleguide.innerText = '병 '

  if(drink.calresult > bottle){
    const countBottle = Math.floor(drink.calresult/bottle);
    const leftcalresult = Math.floor((drink.calresult - bottle * countBottle) * 10) / 10
    const countGlass = Math.floor(leftcalresult);
    
    for (var i = 0; i < countBottle; i++){
      const bottleImage = document.createElement("img");
      bottleImage.className = 'glass';
      bottleImage.src = "juryangdo/glassimg/bottle.png";
      glassbox.appendChild(bottleImage);
    }
    for (var i = 0; i < countGlass; i++){
      const glassImage = document.createElement("img");
      glassImage.className = 'glass';
      glassImage.src = "juryangdo/glassimg/soju10.png";
      glassbox.appendChild(glassImage);
    }

    const number = Math.round((leftcalresult - countGlass)*10);

    bottleboldtext.innerText = countBottle;
    guidetext.appendChild(bottleintext);
    bottleintext.appendChild(bottleboldtext);
    guidetext.appendChild(bottleguide);

    if(number != 0){
      leftoverImage.src = `juryangdo/glassimg/soju${number}.png`;
      glassbox.appendChild(leftoverImage);

      glassboldtext.innerText = leftcalresult;
      guidetext.appendChild(glassintext);
      glassintext.appendChild(glassboldtext);
      guidetext.appendChild(guide);
    }else{
      bottleguide.innerText = bottleguide.innerText + '마실 수 있어요';
    }

  }else{
    const count = Math.floor(drink.calresult);
    for (var i = 0; i < count; i++){
      const glassImage = document.createElement("img");
      glassImage.className = 'glass';
      glassImage.src = "juryangdo/glassimg/soju10.png";
      glassbox.appendChild(glassImage);
    }
    const number = Math.round((drink.calresult - count)*10);
    if(number != 0){
      leftoverImage.src = `juryangdo/glassimg/soju${number}.png`;
      glassbox.appendChild(leftoverImage);
    }

    glassboldtext.innerText = drink.calresult;
    guidetext.appendChild(glassintext);
    glassintext.appendChild(glassboldtext);
    guidetext.appendChild(guide);
  }

  itembox.appendChild(item);
  itembox.appendChild(plusbox);
  item.appendChild(firstbox);
  item.appendChild(secondbox);
  firstbox.appendChild(bottleimgbox);
  firstbox.appendChild(namebox);
  // bottleimgbox.appendChild(flag);
  bottleimgbox.appendChild(outcircle);
  outcircle.appendChild(drinkImage);
  outcircle.appendChild(incircle);
  namebox.appendChild(name1);
  namebox.appendChild(name2);
  secondbox.appendChild(glassbox);
  secondbox.appendChild(guidetext);
  plusbox.appendChild(plusbtn);
}
for (var i = 0; i < sojus.length; i++){
  if (i % 3 == 0){
    const rowbox = document.createElement("div");
    rowbox.className = 'rowbox';
    rowbox.id = `rowbox${i/3}`;
    drinks.appendChild(rowbox);
  }
}
for (var i = 0; i < sojus.length; i++){
  paintDrink(sojus[i], Math.floor(i/3));
}