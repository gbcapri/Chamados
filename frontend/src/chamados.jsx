import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getChamados } from './services/api';
import { Container, Button, Table } from 'react-bootstrap';


function Chamados() {
  const navigate = useNavigate();
  const [chamados, setChamados] = useState([]);
  const [filtro, setFiltro] = useState('ativos');

  useEffect(() => {
    async function fetchData() {
      const data = await getChamados();
      setChamados(data);
    }
    fetchData();
  }, []);

  const chamadosFiltrados = chamados.filter(ch => filtro === 'ativos' ? ch.situacao !== 'FINALIZADO' : ch.situacao === 'FINALIZADO');

  return (
    <Container className="mt-4">
      <h2>Lista de Chamados</h2>
      <Button onClick={() => setFiltro('ativos')} variant="primary" className="m-2">
        Chamados Ativos
      </Button>
      <Button onClick={() => setFiltro('finalizados')} variant="secondary">
        Chamados Finalizados
      </Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Prazo</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {chamadosFiltrados.length > 0 ? (
            chamadosFiltrados.map((ch, index) => (
              <tr key={index}>
                <td>{ch.id}</td>
                <td>{ch.titulo}</td>
                <td>{ch.nome}</td>
                <td>{ch.categoria}</td>
                <td>{ch.prazo}</td>
                <td>{ch.situacao}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                Nenhum chamado encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Button variant="secondary" onClick={() => navigate('/')}>
        Voltar
      </Button>
    </Container>
  );
}

export default Chamados;
