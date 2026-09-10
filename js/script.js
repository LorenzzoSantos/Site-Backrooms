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