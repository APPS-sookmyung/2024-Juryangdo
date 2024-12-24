localStorage.removeItem(My_Alchol);
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
var bottle = 0;
var glass = 0;

function paintSojuInput() {
  document.querySelector("#inputbox").replaceChildren();
  document.querySelector("#confirmbox").replaceChildren();

  const div = document.createElement("div");
  div.className = "blank";
  div.id = "bySoju";

  const bottleOption = document.createElement("input");
  bottleOption.type = "number";
  bottleOption.min = "0";
  bottleOption.max = "100";
  bottleOption.placeholder = "NUMBER";
  bottleOption.id = "bottle";

  const bottleDiv = document.createElement("div");
  bottleDiv.className = "text";
  bottleDiv.innerText = "병";

  const glassOption = document.createElement("input");
  glassOption.type = "number";
  glassOption.min = "0";
  glassOption.max = "100";
  glassOption.placeholder = "NUMBER";
  glassOption.id = "glass";

  const glassDiv = document.createElement("div");
  glassDiv.className = "text";
  glassDiv.innerText = "잔";

  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.id = "confirm";

  const blankdiv = document.createElement("div");

  const btntext = document.createElement("div");
  btntext.innerText = "결과 확인하기";
  btntext.id = "btntext";

  const arrowright = document.createElement("img");
  arrowright.src = "juryangdo/img/arrowright.webp";
  arrowright.id = "arrowright";

  div.appendChild(bottleOption);
  div.appendChild(bottleDiv);
  div.appendChild(glassOption);
  div.appendChild(glassDiv);
  confirm.appendChild(blankdiv);
  blankdiv.appendChild(btntext);
  blankdiv.appendChild(arrowright);
  document.querySelector("#confirmbox").append(confirm);
  document.querySelector("#inputbox").append(div);
}

function paintBeerInput() {
  document.querySelector("#inputbox").replaceChildren();
  document.querySelector("#confirmbox").replaceChildren();

  const div = document.createElement("div");
  div.className = "blank";
  div.id = "byBeer";

  const selectGlass = document.createElement("select");
  selectGlass.className = "selectGlass";
  selectGlass.id = "bottle";

  const firstMl = document.createElement("option");
  firstMl.className = "one";
  firstMl.innerText = "255";

  const secondMl = document.createElement("option");
  secondMl.className = "two";
  secondMl.innerText = "330";

  const thirdMl = document.createElement("option");
  thirdMl.className = "three";
  thirdMl.innerText = "500";

  const glassMl = document.createElement("div");
  glassMl.className = "text";
  glassMl.innerText = "ml";

  const numberOption = document.createElement("input");
  numberOption.type = "number";
  numberOption.max = "100";
  numberOption.placeholder = "NUMBER";
  numberOption.id = "glass";

  const glassDiv = document.createElement("div");
  glassDiv.className = "text";
  glassDiv.innerText = "잔";

  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.id = "confirm";

  const blankdiv = document.createElement("div");

  const btntext = document.createElement("div");
  btntext.innerText = "결과 확인하기";
  btntext.id = "btntext";

  const arrowright = document.createElement("img");
  arrowright.src = "juryangdo/img/arrowright.webp";
  arrowright.id = "arrowright";

  selectGlass.appendChild(firstMl);
  selectGlass.appendChild(secondMl);
  selectGlass.appendChild(thirdMl);
  div.appendChild(selectGlass);
  div.appendChild(glassMl);
  div.appendChild(numberOption);
  div.appendChild(glassDiv);
  confirm.appendChild(blankdiv);
  blankdiv.appendChild(btntext);
  blankdiv.appendChild(arrowright);
  document.querySelector("#confirmbox").append(confirm);
  document.querySelector("#inputbox").append(div);
}

btn1.focus();

paintSojuInput();

function test() {
  bottle = document.getElementById("bottle").value;
  glass = document.getElementById("glass").value;

  if (bottle == 0 && glass == 0) {
    glass = 1;
  }
  const myAlchol =
    Math.floor((360 * bottle + 50 * glass) * 0.16 * 0.7947 * 10) / 10;
  localStorage.setItem(My_Alchol, myAlchol);

  location.href = "sojupage.html";
}

const btn3 = document.getElementById("confirm");
btn3.addEventListener("click", test);

btn1.addEventListener("click", function (event) {
  paintSojuInput();
  event.preventDefault();

  function test() {
    bottle = document.getElementById("bottle").value;
    glass = document.getElementById("glass").value;

    if (bottle == 0 && glass == 0) {
      glass = 1;
    }
    const myAlchol =
      Math.floor((360 * bottle + 50 * glass) * 0.16 * 0.7947 * 10) / 10;
    localStorage.setItem(My_Alchol, myAlchol);

    location.href = "sojupage.html";
  }

  const btn3 = document.getElementById("confirm");
  btn3.addEventListener("click", test);
});

btn2.addEventListener("click", function (event) {
  paintBeerInput();
  event.preventDefault();

  function test() {
    bottle = document.getElementById("bottle").value;
    glass = document.getElementById("glass").value;

    if (glass == 0) {
      glass = 1;
    }
    const myAlchol = Math.floor(bottle * glass * 0.05 * 0.7947 * 10) / 10;
    localStorage.setItem(My_Alchol, myAlchol);

    location.href = "sojupage.html";
  }

  const btn3 = document.getElementById("confirm");
  btn3.addEventListener("click", test);
});
