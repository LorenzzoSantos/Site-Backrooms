document.getElementById("btnentrar").addEventListener("click", function() {
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-inicial").style.display = "flex";
    document.getElementById("pe").style.display = "flex"
})

document.getElementById("sair").addEventListener("click", function() {
    document.getElementById("tela-capa").style.display = "flex";
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("pe").style.display = "none"
})
function mudarSkin(nomeDaSkin) {
    const container = document.getElementById("body");

    container.className = "container";

    container.classList.add(nomeDaSkin);
}
function voltar() {

}
document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("Texto1Lvl0").style.display = "flex"
    document.getElementById("TextoPool").style.display = "none"
    document.getElementById("TextoRun").style.display = "none"
    document.getElementById("TextoFun").style.display = "none"
    document.getElementById("TextoGray").style.display = "none"

    document.getElementById("TituloLevel0").style.display = "flex"
    document.getElementById("TituloPool").style.display = "none"
    document.getElementById("TituloRun").style.display = "none"
    document.getElementById("TituloFun").style.display = "none"
    document.getElementById("TituloGray").style.display = "none"
})
document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("Texto1Lvl0").style.display = "none"
    document.getElementById("TextoPool").style.display = "flex"
    document.getElementById("TextoRun").style.display = "none"
    document.getElementById("TextoFun").style.display = "none"
    document.getElementById("TextoGray").style.display = "none"

    document.getElementById("TituloLevel0").style.display = "none"
    document.getElementById("TituloPool").style.display = "flex"
    document.getElementById("TituloRun").style.display = "none"
    document.getElementById("TituloFun").style.display = "none"
    document.getElementById("TituloGray").style.display = "none"
})
document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("Texto1Lvl0").style.display = "none"
    document.getElementById("TextoPool").style.display = "none"
    document.getElementById("TextoRun").style.display = "flex"
    document.getElementById("TextoFun").style.display = "none"
    document.getElementById("TextoGray").style.display = "none"

    document.getElementById("TituloLevel0").style.display = "none"
    document.getElementById("TituloPool").style.display = "none"
    document.getElementById("TituloRun").style.display = "flex"
    document.getElementById("TituloFun").style.display = "none"
    document.getElementById("TituloGray").style.display = "none"
})
document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("Texto1Lvl0").style.display = "none"
    document.getElementById("TextoPool").style.display = "none"
    document.getElementById("TextoRun").style.display = "none"
    document.getElementById("TextoFun").style.display = "flex"
    document.getElementById("TextoGray").style.display = "none"

    document.getElementById("TituloLevel0").style.display = "none"
    document.getElementById("TituloPool").style.display = "none"
    document.getElementById("TituloRun").style.display = "none"
    document.getElementById("TituloFun").style.display = "flex"
    document.getElementById("TituloGray").style.display = "none"
})
document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById("Texto1Lvl0").style.display = "none"
    document.getElementById("TextoPool").style.display = "none"
    document.getElementById("TextoRun").style.display = "none"
    document.getElementById("TextoFun").style.display = "none"
    document.getElementById("TextoGray").style.display = "flex"

    document.getElementById("TituloLevel0").style.display = "none"
    document.getElementById("TituloPool").style.display = "none"
    document.getElementById("TituloRun").style.display = "none"
    document.getElementById("TituloFun").style.display = "none"
    document.getElementById("TituloGray").style.display = "flex"
})