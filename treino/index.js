(() => {
  'use strict';

  if (!window.localStorage.getItem('@memory')) {
    const training = {
      treinoA: {
        supinoReto: 0,
        puxadaFrente: 0,
        supinoInclinado: 0,
        puxadaTriangulo: 0,
        crucifixoReto: 0,
        remadaBaixa: 0,
        crossOver: 0,
        remadaCurvada: 0,
        pullover: 0,
      },
      treinoB: {
        roscaDireta: 0,
        tricepsTesta: 0,
        roscaAlternada: 0,
        tricepsPulley: 0,
        roscaMartelo: 0,
        tricepsFrancesUnilateral: 0,
        roscaScott: 0,
        TricepsPulleyInverso: 0,
        extensorPunho: 0,
        extensorPunhoInverso: 0,
      },
      treinoC: {
        desenvolvimentoFrente: 0,
        desenvolvimentoComHalter: 0,
        elevaçãoLateral: 0,
        elevaçãoFrontal: 0,
        cruxifixoInverso: 0,
        elevaçãoFrontalBarra: 0,
        encolhimento: 0,
        abdomenSupra: 0,
        abdomenInfra: 0,
        abdomenRemador: 0,
      },
      treinoD: {
        agachamento: 0,
        legPress: 0,
        extensor: 0,
        flexor: 0,
        adutor: 0,
        abdutor: 0,
        agachamentoHack: 0,
        panturrilhaEmPe: 0,
        panturrilhaSentado: 0,
      },
    };
    window.localStorage.setItem('@memory', JSON.stringify(training));
  }

  //JSON.parse(localStorage.getItem('@historySave') para usar
  const treinoA = document.querySelector('div.treino-a');
  const treinoB = document.querySelector('div.treino-b');
  const treinoC = document.querySelector('div.treino-c');
  const treinoD = document.querySelector('div.treino-d');

  const memory = JSON.parse(localStorage.getItem('@memory'));

  function insertElement(section, treinoSeparado) {
    Object.keys(treinoSeparado).forEach((exercicio) => {
      const divExercicio = `
        <div class="flex-area j-space-between linha">
          <p>${exercicio.replace(/([A-Z])/g, ' $1')}</p>
          <input type="text" value="${
            treinoSeparado[exercicio]
          }" id="${exercicio}">
        </div>
      `;
      section.insertAdjacentHTML('beforeend', divExercicio);
    });
  }

  Object.keys(memory).forEach((treino) => {
    const treinoSeparado = memory[treino];
    if (treino === 'treinoA') {
      insertElement(treinoA, treinoSeparado);
    } else if (treino === 'treinoB') {
      insertElement(treinoB, treinoSeparado);
    } else if (treino === 'treinoC') {
      insertElement(treinoC, treinoSeparado);
    } else if (treino === 'treinoD') {
      insertElement(treinoD, treinoSeparado);
    }
  });

  document.querySelector('button').addEventListener('click', saveMemory);

  function saveMemory(event) {
    event.preventDefault();

    const trainingNew = {
      treinoA: {
        supinoReto: document.querySelector('#supinoReto').value,
        puxadaFrente: document.querySelector('#puxadaFrente').value,
        supinoInclinado: document.querySelector('#supinoInclinado').value,
        puxadaTriangulo: document.querySelector('#puxadaTriangulo').value,
        crucifixoReto: document.querySelector('#crucifixoReto').value,
        remadaBaixa: document.querySelector('#remadaBaixa').value,
        crossOver: document.querySelector('#crossOver').value,
        remadaCurvada: document.querySelector('#remadaCurvada').value,
        pullover: document.querySelector('#pullover').value,
      },
      treinoB: {
        roscaDireta: document.querySelector('#roscaDireta').value,
        tricepsTesta: document.querySelector('#tricepsTesta').value,
        roscaAlternada: document.querySelector('#roscaAlternada').value,
        tricepsPulley: document.querySelector('#tricepsPulley').value,
        roscaMartelo: document.querySelector('#roscaMartelo').value,
        tricepsFrancesUnilateral: document.querySelector(
          '#tricepsFrancesUnilateral',
        ).value,
        roscaScott: document.querySelector('#roscaScott').value,
        TricepsPulleyInverso: document.querySelector('#TricepsPulleyInverso')
          .value,
        extensorPunho: document.querySelector('#extensorPunho').value,
        extensorPunhoInverso: document.querySelector('#extensorPunhoInverso')
          .value,
      },
      treinoC: {
        desenvolvimentoFrente: document.querySelector('#desenvolvimentoFrente')
          .value,
        desenvolvimentoComHalter: document.querySelector(
          '#desenvolvimentoComHalter',
        ).value,
        elevaçãoLateral: document.querySelector('#elevaçãoLateral').value,
        elevaçãoFrontal: document.querySelector('#elevaçãoFrontal').value,
        cruxifixoInverso: document.querySelector('#cruxifixoInverso').value,
        elevaçãoFrontalBarra: document.querySelector('#elevaçãoFrontalBarra')
          .value,
        encolhimento: document.querySelector('#encolhimento').value,
        abdomenSupra: document.querySelector('#abdomenSupra').value,
        abdomenInfra: document.querySelector('#abdomenInfra').value,
        abdomenRemador: document.querySelector('#abdomenRemador').value,
      },
      treinoD: {
        agachamento: document.querySelector('#agachamento').value,
        legPress: document.querySelector('#legPress').value,
        extensor: document.querySelector('#extensor').value,
        flexor: document.querySelector('#flexor').value,
        adutor: document.querySelector('#adutor').value,
        abdutor: document.querySelector('#abdutor').value,
        agachamentoHack: document.querySelector('#agachamentoHack').value,
        panturrilhaEmPe: document.querySelector('#panturrilhaEmPe').value,
        panturrilhaSentado: document.querySelector('#panturrilhaSentado').value,
      },
    };

    window.localStorage.setItem('@memory', JSON.stringify(trainingNew));
  }
})();
