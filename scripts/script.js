document.getElementById("rpgForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão para que possamos salvar os dados
  saveData();
});

function saveData() {
  const nomeJogador = document.getElementById("nomeJogador").value;
  const nomePersonagem = document.getElementById("nomePersonagem").value;

  // Atributos
  const nivel = document.getElementById("nivel").value;
  const forca = document.getElementById("forca").value;
  const bonusForca = document.getElementById("bonusForca").value;
  const percepcao = document.getElementById("percepcao").value;
  const bonusPercepcao = document.getElementById("bonusPercepcao").value;
  const resistencia = document.getElementById("resistencia").value;
  const bonusResistencia = document.getElementById("bonusResistencia").value;
  const carisma = document.getElementById("carisma").value;
  const bonusCarisma = document.getElementById("bonusCarisma").value;
  const inteligencia = document.getElementById("inteligencia").value;
  const bonusInteligencia = document.getElementById("bonusInteligencia").value;
  const agilidade = document.getElementById("agilidade").value;
  const bonusAgilidade = document.getElementById("bonusAgilidade").value;
  const sorte = document.getElementById("sorte").value;
  const bonusSorte = document.getElementById("bonusSorte").value;

  // Habilidades e Inventário
  const habilidades = {
    armasCaC: { valor: document.getElementById("armasCaC").value, bonus: document.getElementById("armasCaCBonus").checked },
    explosivos: { valor: document.getElementById("explosivos").value, bonus: document.getElementById("explosivosBonus").checked },
    armasEnergia: { valor: document.getElementById("armasEnergia").value, bonus: document.getElementById("armasEnergiaBonus").checked },
    lockpick: { valor: document.getElementById("lockpick").value, bonus: document.getElementById("lockpickBonus").checked },
    armasGrandes: { valor: document.getElementById("armasGrandes").value, bonus: document.getElementById("armasGrandesBonus").checked },
    ataqueDesarmado: { valor: document.getElementById("ataqueDesarmado").value, bonus: document.getElementById("ataqueDesarmadoBonus").checked },
    discurso: { valor: document.getElementById("discurso").value, bonus: document.getElementById("discursoBonus").checked },
    barganha: { valor: document.getElementById("barganha").value, bonus: document.getElementById("barganhaBonus").checked },
    medicina: { valor: document.getElementById("medicina").value, bonus: document.getElementById("medicinaBonus").checked },
    reparar: { valor: document.getElementById("reparar").value, bonus: document.getElementById("repararBonus").checked },
    ciencia: { valor: document.getElementById("ciencia").value, bonus: document.getElementById("cienciaBonus").checked },
    armasPequenas: { valor: document.getElementById("armasPequenas").value, bonus: document.getElementById("armasPequenasBonus").checked },
    furtividade: { valor: document.getElementById("furtividade").value, bonus: document.getElementById("furtividadeBonus").checked },
  };

  const inventario = {
    tampas: document.getElementById("tampas").value,
    itensMinusculos: document.getElementById("itensMinusculos").value,
  };

  // Armas
  const armas = [];
  for (let i = 1; i <= 7; i++) {
    const arma = {
      equip: document.getElementById(`equipArma${i}`).checked,
      nome: document.getElementById(`nomeArma${i}`).value,
      dano: document.getElementById(`danoArma${i}`).value,
      crit: document.getElementById(`critArma${i}`).value,
      pa: document.getElementById(`paArma${i}`).value,
      atual: document.getElementById(`atualArma${i}`).value,
      municao: document.getElementById(`municaoArma${i}`).value,
      obs: document.getElementById(`obsArma${i}`).value,
      quebrada: document.getElementById(`quebradaArma${i}`).checked,
      destruida: document.getElementById(`destruidaArma${i}`).checked,
    };
    armas.push(arma);
  }

  // Armadura
  const armaduras = [];
  for (let i = 1; i <= 4; i++) {
    const armadura = {
      equip: document.getElementById(`equipArmadura${i}`).checked,
      nome: document.getElementById(`nomeArmadura${i}`).value,
      protRad: document.getElementById(`protRadArmadura${i}`).value,
      protDano: document.getElementById(`protDanoArmadura${i}`).value,
      obs: document.getElementById(`obsArmadura${i}`).value,
      quebrada: document.getElementById(`quebradaArmadura${i}`).checked,
      destruida: document.getElementById(`destruidaArmadura${i}`).checked,
    };
    armaduras.push(armadura);
  }

  const data = {
    nomeJogador,
    nomePersonagem,
    nivel,
    atributos: { forca, agilidade, resistencia, percepcao, carisma, inteligencia, sorte },
    bonusAtributos: { bonusForca, bonusAgilidade, bonusResistencia, bonusPercepcao, bonusCarisma, bonusInteligencia, bonusSorte },
    habilidades,
    inventario,
    armas,
    armaduras
  };

  localStorage.setItem("rpgData", JSON.stringify(data));
  alert("Dados salvos com sucesso!");
  console.log(data);
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


window.onload = function loadData() {
  const savedData = JSON.parse(localStorage.getItem("rpgData"));
  
  if (savedData) {
     // Carregar nome, personagem, nível
     document.getElementById("nomeJogador").value = savedData.nomeJogador;
     document.getElementById("nomePersonagem").value = savedData.nomePersonagem;
     document.getElementById("nivel").value = savedData.nivel;

    // Carregar atributos
    const atributos = savedData.atributos;
    for (let key in atributos) {
      document.getElementById(key).value = atributos[key];
    }
    
    // Carregar bonus dos atributos
    const bonusAtributos = savedData.bonusAtributos;
    for (let key in bonusAtributos) {
      document.getElementById(key).value = bonusAtributos[key];
    }
    
    
    // Carregar habilidades
    const habilidades = savedData.habilidades;
    for (let key in habilidades) {
      document.getElementById(key).value = habilidades[key].valor;
      document.getElementById(`${key}Bonus`).checked = habilidades[key].bonus;
    }
    
    // Carregar inventário
    const inventario = savedData.inventario;
    for (let key in inventario) {
      document.getElementById(key).value = inventario[key];
    }

    // Carregar armas
    savedData.armas.forEach((arma, index) => {
      const i = index + 1;
      document.getElementById(`equipArma${i}`).checked = arma.equip;
      document.getElementById(`nomeArma${i}`).value = arma.nome;
      document.getElementById(`danoArma${i}`).value = arma.dano;
      document.getElementById(`critArma${i}`).value = arma.crit;
      document.getElementById(`paArma${i}`).value = arma.pa;
      document.getElementById(`atualArma${i}`).value = arma.atual;
      document.getElementById(`municaoArma${i}`).value = arma.municao;
      document.getElementById(`obsArma${i}`).value = arma.obs;
      document.getElementById(`quebradaArma${i}`).checked = arma.quebrada;
      document.getElementById(`destruidaArma${i}`).checked = arma.destruida;
    });

    // Carregar armaduras
    savedData.armaduras.forEach((armadura, index) => {
      const i = index + 1;
      document.getElementById(`equipArmadura${i}`).checked = armadura.equip;
      document.getElementById(`nomeArmadura${i}`).value = armadura.nome;
      document.getElementById(`protRadArmadura${i}`).value = armadura.protRad;
      document.getElementById(`protDanoArmadura${i}`).value = armadura.protDano;            
      document.getElementById(`obsArmadura${i}`).value = armadura.obs;
      document.getElementById(`quebradaArmadura${i}`).checked = armadura.quebrada;
      document.getElementById(`destruidaArmadura${i}`).checked = armadura.destruida;
    });
  }
};
