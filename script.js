//start licznika
var start = new Date().getTime();

//funkcja generująca randomowy kolor
function getRandomColor() {
  var letters = '0123456789ABCD'.split('');
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//generowanie znikającego obiektu
function makeShapeAppear() {

  //randomowe położenie
  var top = Math.random()*400;
  var left = Math.random()*400;
  var width = (Math.random()*200) + 20;

  //zaokrąglenie krawędzi obiektu
  if (Math.random() > 0.5) {
    document.getElementById('shape').style.borderRadius = "50%";
  } else {
    document.getElementById('shape').style.borderRadius = "0%";
  }

  //style obiektu
  document.getElementById('shape').style.backgroundColor = getRandomColor();
  document.getElementById('shape').style.width = width + "px";
  document.getElementById('shape').style.height = width + "px";
  document.getElementById('shape').style.top = top + "px";
  document.getElementById('shape').style.left = left + "px";
  document.getElementById('shape').style.display = "block";

  //uruchomienie licznika reakcji na nowo
  start = new Date().getTime();
}

//opóźnienie pojawienia się kolejnego obiektu
function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay();

//zniknięcie obiektu i wyświetlenie czasu reakcji
document.getElementById('shape').onclick = function() {
    document.getElementById('shape').style.display = 'none';

    //stop licznika
    var end = new Date().getTime();

    //wyliczenie czasu reakcji
    var timeTaken = (end - start) / 1000;

    //wyświetlenie czasu reakcji
    document.getElementById('timeTaken').innerHTML = timeTaken + "s";

    //generowanie nowego obiektu
    appearAfterDelay();
}
