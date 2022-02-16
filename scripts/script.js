script = () => {
  const obj = {
    genero: document.getElementById("genero").value,
    edad: document.getElementById("edad").value,
    peso: document.getElementById("peso").value,
    altura: document.getElementById("altura").value / 100,
  };
  if (obj.genero=='Selecciona tu genero'||obj.edad.length == 0 || obj.peso.length == 0 || obj.altura.length == 0) {
    alert("Error. Por favor todos los campos");
  } else {

    localStorage.setItem("user", JSON.stringify(obj));

    let imc = obj.peso / Math.pow(obj.altura, 2);

    let imc_categoria;

    if (imc < 18.5) {
      imc_categoria = "Bajo Peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      imc_categoria = "Saludable";
    } else if (imc >= 25.0 && imc <= 29.9) {
      imc_categoria = "Con sobrepeso";
    } else if (imc >= 30.0 && imc <= 39.9) {
      imc_categoria = "Obeso";
    } else if (imc > 40.0) {
      imc_categoria = "Obesidad extrema";
    }

    const html = document.getElementById("result");
    html.innerHTML = `
      <h2 class="resultado__h2">Resultado</h2>
      <h3 class="resultado__h3">Tu indice de masa corporal es:</h3>
      <p id="result" class="resultado__imc">${imc.toFixed(2)}</p>
      <p class="peso">${imc_categoria}</p>
      `;
  }
};
