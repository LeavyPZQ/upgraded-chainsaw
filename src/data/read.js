function sizeS() {
  for (let y =  0; y < 3; y++) {
    var elements = document.getElementsByClassName('pageM');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].className = 'pageS';
      }
    }   
    var elements = document.getElementsByClassName('pageL');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].className = 'pageS';
      }
    }   
  }
  document.getElementById("size-button-s").style.color = "blue";
  document.getElementById("size-button-m").style.color = "#fff";
  document.getElementById("size-button-l").style.color = "#fff";
}

function sizeM() {
  for (let y =  0; y < 3; y++) {
    var elements = document.getElementsByClassName('pageS');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].className = 'pageM';
      }
    }   
    var elements = document.getElementsByClassName('pageL');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].className = 'pageM';
      }
    }
  }
document.getElementById("size-button-m").style.color = "blue";
document.getElementById("size-button-s").style.color = "#fff";
document.getElementById("size-button-l").style.color = "#fff";
}

function sizeL() {
  for (let y =  0; y < 3; y++) {
    var elements = document.getElementsByClassName('pageS');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].className = 'pageL';
      }
    }   
    var elements = document.getElementsByClassName('pageM');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].className = 'pageL';
      }
    }
  }
document.getElementById("size-button-l").style.color = "blue";
document.getElementById("size-button-m").style.color = "#fff";
document.getElementById("size-button-s").style.color = "#fff";
}
