import axios from 'axios';

const API_URL = "http://localhost:8000/api/chamados";

export const listarChamados = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const criarChamado = async (chamado) => {
    const response = await axios.post(API_URL, chamado);
    return response.data;
};

export const atualizarChamado = async (id, situacao) => {
    const response = await axios.put(`${API_URL}/${id}`, { situacao });
    return response.data;
};

export const excluirChamado = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
