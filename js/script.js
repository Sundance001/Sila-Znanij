function show_english_tests(){
  document.getElementById("english").style.visibility='visible';
  document.getElementById("math").style.visibility='hidden';
  document.getElementById("physics").style.visibility='hidden';
  document.getElementById("biology").style.visibility='hidden';
}
function show_math_tests(){
  document.getElementById("english").style.visibility='hidden';
  document.getElementById("math").style.visibility='visible';
  document.getElementById("physics").style.visibility='hidden';
  document.getElementById("biology").style.visibility='hidden';
}
function show_physics_tests(){
  document.getElementById("english").style.visibility='hidden';
  document.getElementById("math").style.visibility='hidden';
  document.getElementById("physics").style.visibility='visible';
  document.getElementById("biology").style.visibility='hidden';
}
function show_biology_tests(){
  document.getElementById("english").style.visibility='hidden';
  document.getElementById("math").style.visibility='hidden';
  document.getElementById("physics").style.visibility='hidden';
  document.getElementById("biology").style.visibility='visible';
}