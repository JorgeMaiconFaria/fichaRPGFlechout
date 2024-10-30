document.getElementById("rpgForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão para que possamos salvar os dados
  saveData();
});

function saveData() {
  const nomeJogador = document.getElementById("nomeJogador").value;
  const nomePersonagem = document.getElementById("nomePersonagem").value;
  const nivel = document.getElementById("nivel").value;
  const forca = document.getElementById("forca").value;
  const agilidade = document.getElementById("agilidade").value;
  const resistencia = document.getElementById("resistencia").value;
  const percepcao = document.getElementById("percepcao").value;
  const carisma = document.getElementById("carisma").value;
  const inteligencia = document.getElementById("inteligencia").value;
  const sorte = document.getElementById("sorte").value;

  const data = {
    nomeJogador: nomeJogador,
    nomePersonagem: nomePersonagem,
    nivel: nivel,
    forca: forca,
    agilidade: agilidade,
    resistencia: resistencia,
    percepcao: percepcao,
    carisma: carisma,
    inteligencia: inteligencia,
    sorte: sorte
  };

  localStorage.setItem("rpgData", JSON.stringify(data));
  alert("Dados salvos com sucesso!");
}

function esconderElemento(elemento){
  let id = document.getElementById(elemento.toString())
  let div = document.getElementById(elemento.toString().replace("div", "h2"))
  if (id.style.display == "none") {
      id.style.display = "inline"
      div.style.color = "#fff"
  } else {
    id.style.display = 'none'
    div.style.color = "#444"
  }};

// Função para carregar os dados salvos, se existirem
window.onload = function loadData() {
  const savedData = JSON.parse(localStorage.getItem("rpgData"));

  if (savedData) {
    let bonusSorte = savedData.sorte / 2
    document.getElementById("nomeJogador").value = savedData.nomeJogador;
    document.getElementById("nomePersonagem").value = savedData.nomePersonagem;
    document.getElementById("nivel").value = savedData.nivel;
    document.getElementById("forca").value = savedData.forca;
    document.getElementById("bonusForca").value = Math.floor(savedData.forca / 2 + (bonusSorte));
    document.getElementById("agilidade").value = savedData.agilidade;
    document.getElementById("bonusAgilidade").value = Math.floor(savedData.agilidade / 2 + (bonusSorte));
    document.getElementById("resistencia").value = savedData.resistencia;
    document.getElementById("bonusResistencia").value = Math.floor(savedData.resistencia / 2 + (bonusSorte));
    document.getElementById("percepcao").value = savedData.percepcao;
    document.getElementById("bonusPercepcao").value = Math.floor(savedData.percepcao / 2 + (bonusSorte));
    document.getElementById("carisma").value = savedData.carisma;
    document.getElementById("bonusCarisma").value = Math.floor(savedData.carisma / 2 + (bonusSorte));
    document.getElementById("inteligencia").value = savedData.inteligencia;
    document.getElementById("bonusInteligencia").value = Math.floor(savedData.inteligencia / 2 + (bonusSorte));
    document.getElementById("sorte").value = savedData.sorte;
    document.getElementById("bonusSorte").value = Math.floor(bonusSorte);
  }
};
