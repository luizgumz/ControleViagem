const API_URL = 'http://localhost:5000';

async function getViagens() {
  /*
  const res = await fetch(API_URL);
  if (!res.ok) {
    const text = await res.text();
    console.error("API retornou erro:", text);
    throw new Error("Erro ao buscar viagens");
  }
  return res.json();
  */

  const response = await fetch('http://localhost:5253/api/viagens');
  if (!response.ok) {
    throw new Error('Erro ao buscar viagens');
  }
  const data = await response.json();
  return data;
}

async function getViagemById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function createViagem(data) {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

async function updateViagem(id, data) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

async function deleteViagem(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}