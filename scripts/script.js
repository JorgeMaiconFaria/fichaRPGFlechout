document.getElementById("rpgForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  saveData();
});

function saveData() {
  const nomeJogador = document.getElementById("nomeJogador").value;
  const nomePersonagem = document.getElementById("nomePersonagem").value;

  // Combate
  const combate = {
    "vidaAtual": document.getElementById("vidaAtual").value,
    "vidaMaxima": document.getElementById("vidaMaxima").value,
    "valorRadiacao": document.getElementById("valorRadiacao").value,
    "pvMaxRadiacao": document.getElementById("pvMaxRadiacao").value,
    "armaduraTotal": document.getElementById("armaduraTotal").value,
    "protVenenoTotal": document.getElementById("protVenenoTotal").value,
    "protRadiacaoTotal": document.getElementById("protRadiacaoTotal").value,
    "envenenado": document.getElementById("envenenado").checked,
    "veneno1h": document.getElementById("veneno1h").checked,
    "veneno8h": document.getElementById("veneno8h").checked,
    "valorVeneno": document.getElementById("valorVeneno").value,
    "braçoQuebrado": document.getElementById("braçoQuebrado").checked,
    "pernaQuebrada": document.getElementById("pernaQuebrada").checked,
    "dependenciaQuimica": document.getElementById("dependenciaQuimica").checked,
    "dependenciaAlcoolica": document.getElementById("dependenciaAlcoolica").checked
  }


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

  // Itens
  const itens = [];
  for (let i = 1; i <= 25; i++) {
    const item = {
      descricao: document.getElementById(`item${i}`).value
    };
    itens.push(item);
  }

  const municao = {
    ".308": document.getElementById(".308").value,
    ".32": document.getElementById(".32").value,
    ".44": document.getElementById(".44").value,
    "10mm": document.getElementById("10mm").value,
    "cal12": document.getElementById("cal12").value,
    "5.56": document.getElementById("5.56").value,
    "microfusao": document.getElementById("microfusao").value,
    "missel": document.getElementById("missel").value,
    "flamer": document.getElementById("flamer").value,
    "eletrons": document.getElementById("eletrons").value,
    "energia": document.getElementById("energia").value,
    "nuke": document.getElementById("nuke").value,
  }

  const skills = {
    "ladyViuva": document.getElementById("ladyViuva").checked,
    "garotoPapai": document.getElementById("garotoPapai").checked,
    "parafusoArma": document.getElementById("parafusoArma").checked,
    "jogadorLiga": document.getElementById("jogadorLiga").checked,
    "ladrao": document.getElementById("ladrao").checked,
    "aprendizRapido": document.getElementById("aprendizRapido").checked,
    "treinamentoIntenso": document.getElementById("treinamentoIntenso").checked,
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
    armaduras,
    itens,
    municao,
    skills,
    combate
  };

  localStorage.setItem("rpgData", JSON.stringify(data));
  alert("Dados salvos com sucesso!");
  console.log(data);
}

window.onload = function loadData() {
  const savedData = JSON.parse(localStorage.getItem("rpgData"));
  
  if (savedData) {
     // Carregar nome, personagem, nível
     document.getElementById("nomeJogador").value = savedData.nomeJogador;
     document.getElementById("nomePersonagem").value = savedData.nomePersonagem;
     document.getElementById("nivel").value = savedData.nivel;

    // Carregar combate
    const combate = savedData.combate;
    for (let key in combate) {
    document.getElementById(key).value = combate[key];
    document.getElementById(key).checked = combate[key];
    }

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

    // Carregar itens
    savedData.itens.forEach((item, index) => {
      const i = index + 1;
      document.getElementById(`item${i}`).value = item.descricao
    });

     // Carregar municões
     const municao = savedData.municao;
     for (let key in municao) {
      document.getElementById(key).value = municao[key];
    }

     // Carregar skills
     const skills = savedData.skills;
     for (let key in skills) {
      document.getElementById(key).checked = skills[key];
    }
  }  
};

function esconderElemento(elemento){
  let id = document.getElementById(elemento.toString())
  let div = document.getElementById(elemento.toString().replace("div", "h2"))
  
  if (id.style.display == "none" && div.nodeName == "H2") {
      id.style.display = "inline"
      div.style.color = "#fff"
  } else if (id.style.display == "none" && div.nodeName == "H3"){
    id.style.display = "inline"
    div.style.color = "#93fd8a"
  } else {
    id.style.display = 'none'
    div.style.color = "#444"
  }
};

window.onscroll = function () {
  const backToTopButton = document.getElementById("backToTop");
  if (document.documentElement.scrollTop > 450) {
    backToTopButton.style.display = "flex"; 
  } else {
    backToTopButton.style.display = "none"; 
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}