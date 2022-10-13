document.getElementById("boton1").style.visibility = "hidden";

const contar = () => {
  document.getElementById("boton1").style.visibility = "visible";
  document.getElementById("letras").innerHTML = " Letras";
  document.getElementById("group").addEventListener("submit", (event) => {
    event.preventDefault();
    
  });

  let inputValue = document
    .getElementById("string")
    .value.trim()
    .toLowerCase()
    .split("");

  const cont = {};

  inputValue.forEach((element) => {
    cont[element] = (cont[element] || 0) + 1;
  });

  for (let letters in cont) {
    const result = `${letters} : ${cont[letters]}<br>`;
    document.getElementById("resultado").innerHTML += result;
  }
 
};

const limp = () => {
  document.getElementById("boton1").style.visibility = "hidden";
  document.getElementById("string").value = " ";
  document.getElementById("letras").innerHTML = " ";
  document.getElementById("resultado").innerHTML = " ";
};

