function madLibs() {

  var mystory = document.getElementById("mystory");
  var pluralnoun = document.getElementById("pluralnoun").value.toLowerCase();
  var nounone = document.getElementById("nounone").value.toLowerCase();
  var nountwo = document.getElementById("nountwo").value.toLowerCase();
  var song = document.getElementById("song").value.toLowerCase();
  var verb = document.getElementById("verb").value.toLowerCase();
  document.getElementById("output").className = "";

  mystory.innerHTML = "Once upon a time, a pack of adventurous " + pluralnoun + " decided to take their " + nounone + " on a journey. Along the way, they discovered a magical " + nountwo +
    " that could make them " + verb + " faster than ever. As they sprinted to their favorite song, " + song + " the " + pluralnoun + " realized that even the quirkiest adventures, the joy of frienship is the true treasure "



}


function again() {

  location.reload();
  return false;
}


