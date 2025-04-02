import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { createChamado } from './services/api';

function CriarChamado() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prazo, setPrazo] = useState('');
  const [erro, setErro] = useState('');//descobrir para que serve
  const [dataCriacao] = useState(new Date().toLocaleDateString());

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!nome || !titulo || !categoria || !descricao || !prazo) {
      setErro('Todos os campos devem ser preenchidos.');
      return;
    }

    const novoChamado = {
      nome,
      titulo,
      categoria,
      descricao, 
      prazo,
      situacao: 'NOVO',
      dataCriacao,
    };

    try {
      await createChamado(novoChamado);
      alert('Chamado criado com sucesso!');
      navigate('/chamados');
    } catch (error) {
      setErro('Erro ao criar chamado. Tente novamente.');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Criar Novo Chamado</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: João da Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Erro de login"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Erro no computador"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ex: Minha senha não funciona"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Prazo para ser solucionado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: 40 min"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data de Criação</Form.Label>
          <Form.Control type="text" value={dataCriacao} disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Situação</Form.Label>
          <Form.Control type="text" value="NOVO" disabled />
        </Form.Group>

        <Button 
          variant="success" 
          type="submit">
          Criar Chamado
        </Button>
        <Button 
          variant="secondary" 
          className="ms-2" 
          onClick={() => navigate('/')}>
          Voltar
        </Button>
      </Form>
    </Container>
  );
}

export default CriarChamado;
