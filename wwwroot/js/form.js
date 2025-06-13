/*
import { createViagem, updateViagem, getViagemById, getViagens } from './viagensService.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const titulo = document.getElementById('tituloForm');
  const form = document.getElementById('formViagem');
  const btnCancelar = document.getElementById('btnCancelar');

  if (id) {
    titulo.textContent = 'Editar Viagem';
    getViagemById(id).then(v => {
      document.getElementById('destino').value = v.destino;
      document.getElementById('dataInicio').value = v.dataInicio;
      document.getElementById('dataFim').value = v.dataFim;
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      destino: document.getElementById('destino').value,
      dataInicio: document.getElementById('dataInicio').value,
      dataFim: document.getElementById('dataFim').value
    };
    if (id) await updateViagem(id, data);
    else await createViagem(data);
    window.location.href = 'index.html';
  });

  btnCancelar.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});
*/

// js/form.js

window.addEventListener('load', async () => {
  try {
    const viagens = await getViagens();
    carregarTabela(viagens);
  } catch (erro) {
    console.error('Erro ao carregar viagens:', erro);
  }
});

function carregarTabela(viagens) {
  const tabela = document.getElementById('tabela-viagens');
  tabela.innerHTML = ''; // limpa antes de preencher

  viagens.forEach(viagem => {
    const linha = document.createElement('tr');

    linha.innerHTML = `
      <td>${viagem.id}</td>
      <td>${viagem.destino}</td>
      <td>${viagem.dataIda}</td>
      <td>${viagem.dataVolta}</td>
      <td>${viagem.preco}</td>
    `;

    tabela.appendChild(linha);
  });
}
