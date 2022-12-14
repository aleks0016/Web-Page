// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 59.260948, lng: 11.002573 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;


  /** Display of date and time */

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 24 || 24;
  const minutes = date.getMinutes();


  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];
  const MONTHS = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  return `${DAYS[date.getDay()]} 
  ${date.getDate()} 
  ${MONTHS[date.getMonth()]} 
  ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);


function infoBtn() {
  document.getElementById("infoDrop").classList.toggle("infoDrop_show");
}

function educationBtn() {
  document.getElementById("educationDrop").classList.toggle("educationDrop_show")
}

function workBtn() {
  document.getElementById("workDrop").classList.toggle("workDrop_show")
}

function skillsBtn() {
  document.getElementById("skillsDrop").classList.toggle("skillsDrop_show")
}

function characterBtn() {
  document.getElementById("characterDrop").classList.toggle("characterDrop_show")
}