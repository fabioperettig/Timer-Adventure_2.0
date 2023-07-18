var timerInterval;
var startTime;
var elapsedTime = 0;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);

  document.querySelector(".start-button").style.display = "none";
  document.querySelector(".stop-button").style.display = "block";
}

function stopTimer() {
  clearInterval(timerInterval);

  document.querySelector(".stop-button").style.display = "none";
  document.querySelector(".reset-button").style.display = "block";
  
  if (elapsedTime > 3501) {
    showRandomDiv(["A1", "B1", "C1", "D1", "E1"]);
    showRandomDiv(["A2", "B2", "C2"]);
    showRandomDiv(["A3", "B3", "C3", "D3"]);
    showRandomDiv(["A4", "B4"]);
    showRandomDiv(["A7", "B7", "C7"]);
    showRandomDiv(["A8", "B8", "C8", "D8"]);
    showRandomDiv(["A9"]);
  } else if (elapsedTime > 3001 && elapsedTime < 3500) {
    showRandomDiv(["A1", "B1", "C1", "D1", "E1"]);
    showRandomDiv(["A2", "B2", "C2"]);
    showRandomDiv(["A3", "B3", "C3", "D3"]);
    showRandomDiv(["A4", "B4"]);
    showRandomDiv(["A5"]);
  } else if (elapsedTime > 2001 && elapsedTime < 3000) {
    showRandomDiv(["A1", "B1", "C1", "D1", "E1"]);
    showRandomDiv(["A2", "B2", "C2"]);
    showRandomDiv(["A3", "B3", "C3", "D3"]);
    showRandomDiv(["A35", "B35", "C35"]);
  } else if (elapsedTime > 1001 && elapsedTime < 2000) {
    showRandomDiv(["A1", "B1", "C1", "D1", "E1"]);
    showRandomDiv(["A15", "B15", "C15", "D15"]);
  } else if (elapsedTime < 1000) {
    showRandomDiv(["A0"]);
  }

  questionAnswer();
  scrollDown();

  
}


function scrollDown() {
  const element = document.querySelector(".reset-button");
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - 50; // Onde 50 é a margem desejada em pixels

  window.scrollBy({top: offsetPosition, behavior: "smooth"});
}
function questionAnswer() {
  if (document.getElementById("A4").style.display == 'block' && elapsedTime > 3501) {
    document.getElementById("A6").style.display = 'block';}
  else if (document.getElementById("B4").style.display == 'block' && elapsedTime > 3501) {
    document.getElementById("B6").style.display = 'block';}
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  document.title = "00:00:00";

    // Oculte todas as divs de texto
    var allDivs = document.querySelectorAll("#A0, #A1, #B1, #C1, #D1, #E1, #A15, #B15, #C15, #D15, #A2, #B2, #C2, #A3, #B3, #C3, #D3, #A35, #B35, #C35, #A4, #B4, #A5, #A6, #B6, #A7, #B7, #C7, #A8, #B8, #C8, #D8, #A9");
    allDivs.forEach(function(div) {
        div.style.display = "none";
    });

  document.querySelector(".reset-button").style.display = "none";
  document.querySelector(".start-button").style.display = "block";
}
  
function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  var minutes = Math.floor(elapsedTime / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);
  var milliseconds = Math.floor((elapsedTime % 1000) / 10);

  minutes = padTime(minutes);
  seconds = padTime(seconds);
  milliseconds = padTime(milliseconds);

  var timeString = minutes + ":" + seconds + ":" + milliseconds;
  
  document.getElementById("timer").innerHTML = timeString;
  document.title = timeString;
}

function padTime(time, digits = 2) {
    return time.toString().padStart(digits, '0');
}

function showRandomDiv(ids) {
    // Escolha um ID aleatório da matriz de IDs
    var randomId = ids[Math.floor(Math.random() * ids.length)];
    
    // Acesse o elemento div correspondente e altere sua propriedade display
    document.getElementById(randomId).style.display = 'block';
}
