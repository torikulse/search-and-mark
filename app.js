const searchResults = document.getElementById("searchResults");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Cantaloupe",
  "Cherry",
  "Clementine",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Currant",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Goji berry",
  "Gooseberry",
  "Grape",
  "Grapefruit",
  "Guava",
  "Honeydew",
  "Huckleberry",
  "Jackfruit",
  "Jambul",
  "Jujube",
  "Kiwi",
  "Kumquat",
  "Lemon",
  "Lime",
  "Lychee",
  "Mandarin",
  "Mango",
  "Mangosteen",
  "Mulberry",
  "Nectarine",
  "Orange",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Redcurrant",
  "Rhubarb",
  "Starfruit",
  "Strawberry",
  "Tamarillo",
  "Tangerine",
  "Tomato",
  "Ugli fruit",
  "Watermelon",
  "Yuzu",
  "Acerola",
  "Ackee",
  "African cucumber",
  "Akee",
  "American persimmon",
  "Atemoya",
  "Babaco",
  "Bael",
  "Bignay",
  "Bilberry",
  "Biriba",
  "Bitter melon",
  "Breadfruit",
  "Buddha's hand",
  "Cactus pear",
  "Calamansi",
  "Canistel",
  "Capulin cherry",
  "Carambola",
  "Cashew apple",
  "Cherimoya",
  "Chico fruit",
  "Chokeberry",
  "Cloudberry",
  "Cupuacu",
  "Damson",
  "Dewberry",
  "Eggfruit",
  "Elderberry",
  "Emu apple",
  "Farkleberry",
  "Finger lime",
  "Gac",
  "Galia melon",
  "Gambooge",
  "Genip",
  "Goumi",
  "Grumichama",
  "Hala fruit",
  "Hardy kiwi",
  "Hog plum",
  "Horned melon",
  "Illawarra plum",
  "Imbu",
  "Indian fig",
  "Indian gooseberry",
  "Jaboticaba",
  "Jamaican cherry",
  "Jocote",
  "Jostaberry",
  "Kabosu",
  "Kaffir lime",
  "Kiwano",
  "Korlan",
  "Kundong",
  "Langsat",
  "Lapsi",
  "Lilly pilly",
  "Longan",
  "Loquat",
  "Mabolo",
  "Madrono",
  "Malay apple",
  "Mammee apple",
  "Mamoncillo",
  "Marang",
  "Marionberry",
  "Medlar",
  "Miracle fruit",
  "Monstera",
  "Mountain papaya",
  "Nance",
  "Naranjilla",
  "Noni",
  "Ogeechee lime",
  "Olive",
  "Oregon grape",
  "Pawpaw",
  "Pequi",
  "Pitanga",
  "Pitaya",
  "Plantain",
  "Pulasan",
  "Purple mangosteen",
  "Rambutan",
  "Red banana",
  "Rose apple",
  "Salak",
  "Santol",
  "Sapodilla",
  "Sapote",
  "Sea grape",
  "Serviceberry",
  "Soursop",
  "Spanish lime",
  "Surinam cherry",
  "Sweet lemon",
  "Tamarind",
  "Tangelo",
  "Tayberry",
  "Thimbleberry",
  "White currant",
  "White sapote",
  "Wild orange",
  "Wineberry",
  "Yumberry",
  "Ziziphus",
].sort();

fruits.map((e) => {
  searchResults.innerHTML += `<li>${e}</li>`;
});

let mark = null;
searchBtn.addEventListener("click", () => {
  searchResults.innerHTML = "";
  fruits.map((e) => {
    if (
      searchInput.value.toLowerCase() ==
      e.slice(0, searchInput.value.length).toLowerCase()
    ) {
      mark = `<mark>${e.slice(0, searchInput.value.length)}</mark>`;
    }
    if (mark == null) {
      searchResults.innerHTML += `<li>${e}</li>`;
    } else {
      searchResults.innerHTML += `<li><mark>${mark}</mark>${e.slice(
        searchInput.value.length,
        e.length
      )}</li>`;
    }
    mark = null;
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
