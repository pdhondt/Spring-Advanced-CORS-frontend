"use strict";
const response = await fetch("http://localhost:8080/kwadraat/3");
const kwadraat = await response.json();
document.getElementById("kwadraat").innerText = kwadraat;
