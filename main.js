const textInput = document.getElementById("text-input");//Entrada de texto
const textOutput = document.getElementById("text-output");//Saida de texto
const modeOptions = document.querySelectorAll(".mode-options");//Opcao Criptografar ou Descriptografar

//Escolhe entre os modos de criptografar ou descriptografar
let mode = "descryption";
modeOptions.forEach((elem) => {
  elem.addEventListener("input", (e) => {
    mode = e.target.id;
    updateTextOutput(textInput.value);
  });
});
//Captura a entrada de texto
textInput.addEventListener("input", (e) => {
  updateTextOutput(e.target.value);
});

//Atualiza a saida de texto com o texto ja descriptografado ou criptografado
function updateTextOutput(text) {
  textOutput.value = mode === "descryption" ? decryption(text) : encrypt(text);
}
// Descriptografa o texto passado como parametro
function decryption(txt) {
  for (let i in keys) {
    const regex = new RegExp(String(keys[i]).match(/\w/) ? `${keys[i]}` : `\\${keys[i]}`, "ig");
    txt = txt.replace(regex, i);
  }
  return txt;
}
// Criptografa o texto passado como parametro
function encrypt(txt) {
  for (let i in keys) {
    const regex = new RegExp(String(i).match(/\w/) ? `${i}` : `\\${i}`, "ig");
    txt = txt.replace(regex, keys[i]);
  }
  return txt;
}



  

// console.log(`keys: ( ${i} = ${keys[i]} ) ----- regex: ${regex}`);
// console.log(`Entrada de texto: ${txt}`);
// console.log(`Saída  de  texto: ${text}`);
// console.log("---------------------------------------");

function setFullScreenMode(elem){
  if (elem.requestFullscreen) {
  elem.requestFullscreen();
  }else if (elem.mozRequestFullScreen){ /* Firefox */
      elem.mozRequestFullScreen();
  }else if (elem.webkitRequestFullscreen){ // * Chrome, Safari & Opera * /
      elem.webkitRequestFullscreen();
  }else if (elem.msRequestFullScreen) { /* IE/Edge */
      elem.msRequestFullscreen();
  }
  
}
