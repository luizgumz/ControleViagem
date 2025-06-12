document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('#tblViagens tbody');
  const btnNovo = document.getElementById('btnNovo');

  btnNovo.addEventListener('click', () => {
    window.location.href = 'form.html';
  });

  load();

  async function load() {
    const viagens = await getViagens();
    tbody.innerHTML = '';
    viagens.forEach(v => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${v.destino}</td>
        <td>${v.dataInicio}</td>
        <td>${v.dataFim}</td>
        <td class="actions">
          <button onclick="onEdit(${v.id})">Editar</button>
          <button onclick="onDelete(${v.id})">Excluir</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }

  window.onEdit = (id) => {
    window.location.href = `form.html?id=${id}`;
  };

  window.onDelete = async (id) => {
    if (confirm('Deseja realmente excluir esta viagem?')) {
      await deleteViagem(id);
      load();
    }
  };
});