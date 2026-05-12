// Maciel Med — calculadora de plano de saúde
(function () {
  const form = document.getElementById('form');
  const valorBaseEl = document.getElementById('valorBase');
  const idadeEl = document.getElementById('idade');
  const erroEl = document.getElementById('erro');
  const empty = document.getElementById('empty');
  const resultado = document.getElementById('resultado');
  const valorMensalEl = document.getElementById('valorMensal');
  const faixaEl = document.getElementById('faixa');

  function calcular(idade, base) {
    if (idade >= 0 && idade < 19)  return { mult: 1.0,  faixa: '0–18 anos' };
    if (idade >= 19 && idade < 29) return { mult: 1.5,  faixa: '19–28 anos' };
    if (idade >= 29 && idade < 39) return { mult: 2.25, faixa: '29–38 anos' };
    if (idade >= 39 && idade < 49) return { mult: 2.4,  faixa: '39–48 anos' };
    if (idade >= 49 && idade < 60) return { mult: 3.5,  faixa: '49–59 anos' };
    return { mult: 6.0, faixa: '60+ anos' };
  }

  function showError(msg) {
    erroEl.textContent = msg;
    erroEl.hidden = false;
  }

  function clearError() {
    erroEl.hidden = true;
    erroEl.textContent = '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const idade = Number(idadeEl.value);
    const base = Number(valorBaseEl.value);

    if (!idadeEl.value || !valorBaseEl.value) {
      showError('Preencha todos os campos para simular.');
      return;
    }
    if (idade < 0 || base < 0) {
      showError('Os valores devem ser positivos.');
      return;
    }
    clearError();

    const { mult, faixa } = calcular(idade, base);
    const valorMensal = base * mult;

    valorMensalEl.textContent =
      'R$ ' + valorMensal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    faixaEl.textContent = 'Faixa: ' + faixa;

    empty.hidden = true;
    resultado.hidden = false;
  });
})();
