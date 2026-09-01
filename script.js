function irparatela(numero)
{
document.getElementById("tela1").classlist.add("escondida");
document.getElementById("tela2").classlist.add("escondida");
document.getElementById("tela3").classList.add("escondida");

}

function escolheracao(acao)
{
    document.getElementById("você escolheu uma mudinha muito linda!").innerText =
    "você escolheu: " + acao;
    document.getElementById("escolha mais uma mudinha").innerText =
    "escolha um vaso"
}