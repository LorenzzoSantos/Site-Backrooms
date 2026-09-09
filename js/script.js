document.getElementById("btnentrar").addEventListener("click", function() {
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-inicial").style.display = "flex";
    document.getElementById("pe").style.display = "flex"
})
function mudarSkin(nomeDaSkin) {
    const container = document.getElementById("tela-inicial");

    container.className = "container";

    container.classList.add(nomeDaSkin);
}