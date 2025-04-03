import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const createChamado = async (chamado) => {
  try {
    const response = await axios.post(API_URL, chamado);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar chamado:', error.response?.data || error.message);
    throw error;
  }
};

export const getChamados = async () => {
  const response = await api.get('/chamados');
  return response.data;
};

export const deleteChamado = async (id) => {
  await api.delete(`/chamados/${id}`);
};
