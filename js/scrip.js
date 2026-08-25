// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const usuariosValidos = {
    "Lorenzzo": "230511",
    "Erly": "Gay",
    "Rodrigo": "MatarAula"
};


var loginForm = document.querySelector('#id01 form');

loginForm.addEventListener('submit', function login (event){
    event.preventDefault();

    var usuario = loginForm.uname.value.trim();
    var senha = loginForm.psw.value;

    if (usuariosValidos.hasOwnProperty(usuario)&&usuariosValidos[usuario]===senha){
        alert("Sucesso!!!");
        modal.style.display = "none";
        secreto.style.display = "block"
        loginForm.reset();

        document.getElementById("secreto").style.display = "block";
        document.getElementById("tela-inicial").style.display = "none"
        document.body.classList.add('fundo-logado');
    }else{alert("usuario incorreto :(");

    }
     
});

const caixa = document.getElementById('secreto');