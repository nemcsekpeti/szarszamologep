window.addEventListener("load", init); 



function ID(elem)
{
    return document.getElementById(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

function $(elem)
{
    return document.querySelectorAll(elem);
}

function init()
{
  feltoltes();
}

function feltoltes()
{
  var x = "";
  var txt = document.getElementById("szamokdiv");
  for (let i = 0; i < 10; i++) 
  {
    x = x + "<button>" + i + "</button>";
  }
  txt.querySelector(".szamok").innerHTML = x;
}