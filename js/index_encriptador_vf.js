//e - enter
//o - ober 
//i - imes 
//a - ai 
//u - ufat 

function encriptar(){

    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto a mayúsculas como minúsculas -- e else
    //g es para toda la línea u oración
    //m para que afecte a multiples líneas o parrafo

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textoPrincipal").style.display = "none";
    document.getElementById("callToAction").style.display = "none";
    document.getElementById("textoSecundario").innerHTML = "show";
    document.getElementById("textoSecundario").innerHTML = txtCifrado;
    document.getElementById("textoSecundario").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
}


function desencriptar(){

    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto a mayúsculas como minúsculas -- e else
    //g es para toda la línea u oración
    //m para que afecte a multiples líneas o parrafo

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textoPrincipal").style.display = "none";
    document.getElementById("callToAction").style.display = "none";
    document.getElementById("textoSecundario").innerHTML = "show";
    document.getElementById("textoSecundario").innerHTML = txtCifrado;
    document.getElementById("textoSecundario").style.display = "inherit";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("copiar").style.display = "inherit";

}

function copy(){
    var contenido = document.querySelector("#textoSecundario");
    contenido.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}