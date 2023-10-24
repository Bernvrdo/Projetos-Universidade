
function contar(){
    let texto = document.getElementById("text").value;
    let contador = document.getElementById("contador");
    contador.innerHTML = texto.length;

    document.getElementById("text").value = "";
    document.getElementById("text").focus();


}

