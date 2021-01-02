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
      treinoB: {},
      treinoC: {},
    };
    window.localStorage.setItem('@memory', JSON.stringify(training));
  }

  //JSON.parse(localStorage.getItem('@historySave') para usar
  const treinoA = document.querySelector('div.treino-a');
  const treinoB = document.querySelector('div.treino-b');
  const treinoC = document.querySelector('div.treino-c');

  const memory = JSON.parse(localStorage.getItem('@memory'));

  const contentTreinoA = `
    <div class="biset">
        <div class="flex-area j-space-between linha">
        <p>Supino Reto</p>
        <input type="text" value="${memory.treinoA.supinoReto}" id="input-supino-reto">
    </div>
    <div class="flex-area j-space-between linha">
        <p>Puxada Frente</p>
        <input type="text" value="${memory.treinoA.puxadaFrente}" id="input-puxada-frente">
      </div>
    </div>

    <div class="biset">
      <div class="flex-area j-space-between linha">
          <p>Supino Inclinado</p>
          <input type="text" value="${memory.treinoA.supinoInclinado}" id="input-supino-inclinado">
      </div>
      <div class="flex-area j-space-between linha">
          <p>Puxada Triangulo</p>
          <input type="text" value="${memory.treinoA.puxadaTriangulo}" id="input-puxada-triangulo">
      </div>
    </div>

    <div class="biset">
      <div class="flex-area j-space-between linha">
          <p>Crucifixo Reto</p>
          <input type="text" value="${memory.treinoA.crucifixoReto}" id="input-crucifixo-reto">
      </div>
      <div class="flex-area j-space-between linha">
          <p>Remada Baixa</p>
          <input type="text" value="${memory.treinoA.remadaBaixa}" id="input-remada-baixa">
      </div>
    </div>

    <div class="biset">
      <div class="flex-area j-space-between linha">
          <p>Cross Over</p>
          <input type="text" value="${memory.treinoA.crossOver}" id="input-cross-over">
      </div>
      <div class="flex-area j-space-between linha">
          <p>Remada Curvada</p>
          <input type="text" value="${memory.treinoA.remadaCurvada}" id="input-remada-curvada">
      </div>
    </div>

    <div class="flex-area j-space-between linha">
      <p>Pullover</p>
      <input type="text" value="${memory.treinoA.pullover}" id="input-pullover">
    </div>
  `;

  treinoA.insertAdjacentHTML('beforeend', contentTreinoA);

  document.querySelector('button').addEventListener('click', saveMemory);
  function saveMemory(event) {
    event.preventDefault();
    const trainingNew = {
      treinoA: {
        supinoReto: document.querySelector('#input-supino-reto').value,
        puxadaFrente: document.querySelector('#input-puxada-frente').value,
        supinoInclinado: document.querySelector('#input-supino-inclinado')
          .value,
        puxadaTriangulo: document.querySelector('#input-puxada-triangulo')
          .value,
        crucifixoReto: document.querySelector('#input-crucifixo-reto').value,
        remadaBaixa: document.querySelector('#input-remada-baixa').value,
        crossOver: document.querySelector('#input-cross-over').value,
        remadaCurvada: document.querySelector('#input-remada-curvada').value,
        pullover: document.querySelector('#input-pullover').value,
      },
      treinoB: {},
      treinoC: {},
    };
    window.localStorage.setItem('@memory', JSON.stringify(trainingNew));
  }
})();
