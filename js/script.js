document.getElementById("btnentrar").addEventListener("click", function() {
    const lvl0Container = document.getElementById("container-level0");
    
    // 1. Dispara a animação de No-Clip (glitch amarelo) imediatamente
    lvl0Container.classList.remove("oculto");
    lvl0Container.classList.remove("noclip-ativo");
    void lvl0Container.offsetWidth; // Força recálculo do navegador
    lvl0Container.classList.add("noclip-ativo");

    // 2. Aguarda a luz piscar e a animação terminar (2.5 segundos)
    setTimeout(() => {
        // Oculta a capa do livro
        document.getElementById("tela-capa").style.display = "none";
        
        // Revela a tela inicial (que já está configurada por padrão com o Level 0)
        document.getElementById("tela-inicial").style.display = "flex";
        document.getElementById("pe").style.display = "flex";
        
        // Esconde o glitch para mostrar a página revelada
        lvl0Container.classList.add("oculto");
        lvl0Container.classList.remove("noclip-ativo");

    }, 2500); // 2500 milissegundos = o tempo exato das luzes piscando
});

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
    const portaContainer = document.getElementById("container-porta");
    
    // 1. Mostra as portas na tela (garantindo que comecem FECHADAS)
    portaContainer.classList.remove("oculto");
    portaContainer.classList.remove("estado-aberto");
    portaContainer.classList.add("estado-fechado");
    
    // 2. O TRUQUE DE MESTRE: Força o navegador a recalcular a tela.
    // Isso garante que a porta feche instantaneamente sem animação antes de abrir de novo.
    void portaContainer.offsetWidth; 

    // 3. Um pequeno suspense (300ms) antes de abrir a porta
    setTimeout(() => {
        // Dispara a animação de abrir
        portaContainer.classList.remove("estado-fechado");
        portaContainer.classList.add("estado-aberto");
        
        // Troca os textos e títulos escondido atrás da porta!
        document.getElementById("Texto1Lvl0").style.display = "flex";
        document.getElementById("TextoPool").style.display = "none";
        document.getElementById("TextoRun").style.display = "none";
        document.getElementById("TextoFun").style.display = "none";
        document.getElementById("TextoGray").style.display = "none";

        document.getElementById("TituloLevel0").style.display = "flex";
        document.getElementById("TituloPool").style.display = "none";
        document.getElementById("TituloRun").style.display = "none";
        document.getElementById("TituloFun").style.display = "none";
        document.getElementById("TituloGray").style.display = "none";
        
        // 4. Aguarda as portas saírem da tela (1.5 segundos) e esconde o contêiner
        setTimeout(() => {
            portaContainer.classList.add("oculto");
        }, 1500);
        
    }, 300);
});
document.getElementById("btn2").addEventListener("click", function() {
    const agua = document.getElementById("container-agua");
    
    // 1. A água começa a subir
    agua.classList.add("enchendo");

    // 2. Espera a tela ficar completamente submersa (1.2 segundos)
    setTimeout(() => {
        // Troca os textos e títulos para as Poolrooms
        document.getElementById("Texto1Lvl0").style.display = "none";
        document.getElementById("TextoPool").style.display = "flex";
        document.getElementById("TextoRun").style.display = "none";
        document.getElementById("TextoFun").style.display = "none";
        document.getElementById("TextoGray").style.display = "none";

        document.getElementById("TituloLevel0").style.display = "none";
        document.getElementById("TituloPool").style.display = "flex";
        document.getElementById("TituloRun").style.display = "none";
        document.getElementById("TituloFun").style.display = "none";
        document.getElementById("TituloGray").style.display = "none";
        
        // 3. A água escoa (desce de volta)
        agua.classList.remove("enchendo");

    }, 1200); // 1200 milissegundos = tempo exato da animação no CSS
});
document.getElementById("btn3").addEventListener("click", function() {
    const emergenciaContainer = document.getElementById("container-emergencia");
    const textoAlerta = document.getElementById("texto-alerta");
    const entidadeGerada = document.getElementById("entidade-gerada");
    
    // 1. Inicia a Fase de Choque (Preto e !)
    emergenciaContainer.classList.add("fase-alerta");
    emergenciaContainer.classList.remove("oculto");
    
    // Texto de logs cronometrados para o Alerta
    const mensagensAlerta = [
        "ANOMALIA DETECTADA AT 13:47...",
        "DANGER CLASS 5: DANGER CLASS 5...",
        "IMMEDIATE DANGER DETECTED AT YOUR LOCATION...",
        "LEVEL 11.2 (AREA-847) SIGNATURE CONFIRMED...",
        "RUN!", "DO NOT LOOK BACK!", "10KM LONG dash STARTS NOW!", "SURVIVE!"
    ];
    let indexMensagem = 0;
    
    // Descobrimos o índice da mensagem final para usar na verificação
    const indiceSurvive = mensagensAlerta.indexOf("SURVIVE!");

    // Reinicia a entidade gerada por código
    entidadeGerada.classList.remove("atira-entidade");
    void entidadeGerada.offsetWidth; // Força recálculo

    // 2. Inicia a Fase de Alerta (Texto Flashing)
    const intervaloTexto = setInterval(() => {
        if (indexMensagem < mensagensAlerta.length) {
            textoAlerta.innerText = mensagensAlerta[indexMensagem];
            
            // Faz o contêiner piscar com a cor do Nível !
            if (indexMensagem % 2 === 0) {
                emergenciaContainer.style.backgroundColor = "#110000";
            } else {
                emergenciaContainer.style.backgroundColor = "black";
            }
            
            // --- CORREÇÃO AQUI ---
            // Se a mensagem atual for "SURVIVE!", iniciamos a finalização imediatamente
            if (indexMensagem === indiceSurvive) {
                clearInterval(intervaloTexto); // Para o intervalo de texto imediatamente
                
                // Atira a silhueta da entidade gerada por código
                entidadeGerada.classList.add("atira-entidade");
                
                // Finaliza a animação e troca os itens da página APÓS a entidade correr
                setTimeout(() => {
                    // Troca os textos e títulos para o Nível Run !
                    document.getElementById("Texto1Lvl0").style.display = "none";
                    document.getElementById("TextoPool").style.display = "none";
                    document.getElementById("TextoRun").style.display = "flex";
                    document.getElementById("TextoFun").style.display = "none";
                    document.getElementById("TextoGray").style.display = "none";

                    document.getElementById("TituloLevel0").style.display = "none";
                    document.getElementById("TituloPool").style.display = "none";
                    document.getElementById("TituloRun").style.display = "flex";
                    document.getElementById("TituloFun").style.display = "none";
                    document.getElementById("TituloGray").style.display = "none";
                    
                    // Oculta o contêiner de emergência e reinicia estilos
                    emergenciaContainer.classList.add("oculto");
                    emergenciaContainer.classList.remove("fase-alerta");
                    emergenciaContainer.style.backgroundColor = "black";
                    textoAlerta.innerText = "";
                    entidadeGerada.classList.remove("atira-entidade"); // Limpa classe da entidade
                    
                }, 500); // Tempo para a entidade correr e depois a página carregar

                return; // Encerra a execução desta iteração do setInterval
            }
            // ---------------------

            indexMensagem++;
            
        } else {
            clearInterval(intervaloTexto); // Garante que o intervalo pare se algo falhar
        }
    }, 250); // Velocidade do Flashing

    // Removemos o setTimeout externo que geria o tempo total, pois agora a
    // finalização é controlada pelo próprio setInterval quando chega em "SURVIVE!".
});
document.getElementById("btn4").addEventListener("click", function() {
    const funContainer = document.getElementById("container-fun");

    // 1. Inicia a animação de festa
    funContainer.classList.remove("oculto");
    funContainer.classList.remove("animar-festa");
    void funContainer.offsetWidth; // Força recálculo
    funContainer.classList.add("animar-festa");

    // 2. Aguarda o rosto tapar a tela para trocar os textos
    setTimeout(() => {
        document.getElementById("Texto1Lvl0").style.display = "none";
        document.getElementById("TextoPool").style.display = "none";
        document.getElementById("TextoRun").style.display = "none";
        document.getElementById("TextoFun").style.display = "flex";
        document.getElementById("TextoGray").style.display = "none";

        document.getElementById("TituloLevel0").style.display = "none";
        document.getElementById("TituloPool").style.display = "none";
        document.getElementById("TituloRun").style.display = "none";
        document.getElementById("TituloFun").style.display = "flex";
        document.getElementById("TituloGray").style.display = "none";
    }, 1200);

    // 3. Esconde o contêiner após o show de horrores acabar
    setTimeout(() => {
        funContainer.classList.add("oculto");
        funContainer.classList.remove("animar-festa");
    }, 2200);
});
document.getElementById("btn5").addEventListener("click", function() {
    const grayContainer = document.getElementById("container-gray");

    // 1. Liga o chiado da TV
    grayContainer.classList.remove("oculto");
    grayContainer.classList.remove("animar-tv");
    void grayContainer.offsetWidth; // Força recálculo do navegador
    grayContainer.classList.add("animar-tv");

    // 2. Aguarda o momento exato que a TV "desliga" (cerca de 1.6s) para trocar o conteúdo
    setTimeout(() => {
        document.getElementById("Texto1Lvl0").style.display = "none";
        document.getElementById("TextoPool").style.display = "none";
        document.getElementById("TextoRun").style.display = "none";
        document.getElementById("TextoFun").style.display = "none";
        document.getElementById("TextoGray").style.display = "flex";

        document.getElementById("TituloLevel0").style.display = "none";
        document.getElementById("TituloPool").style.display = "none";
        document.getElementById("TituloRun").style.display = "none";
        document.getElementById("TituloFun").style.display = "none";
        document.getElementById("TituloGray").style.display = "flex";
    }, 1600); // 1600ms = 80% da animação (quando a tela encolhe)

    // 3. Aguarda a animação desaparecer por completo antes de resetar o contêiner
    setTimeout(() => {
        grayContainer.classList.add("oculto");
        grayContainer.classList.remove("animar-tv");
    }, 2100);
});