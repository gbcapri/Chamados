import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CriarChamado from './criarChamado.jsx';
import Chamados from './chamados.jsx';  // Importando a nova página de chamados

function Home() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Row className="w-100">
        <Col className="text-center">
          <h1>Chamados</h1>
          <p>Gerencie seus chamados de forma eficiente e organizada.</p>
          <Link to="/criar">
            <Button variant="primary" className="mb-3">Criar Novo Chamado</Button>
          </Link>
          <Link to="/chamados">
            <Button variant="secondary">Ver Chamados</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar" element={<CriarChamado />} />
        <Route path="/chamados" element={<Chamados />} /> {/* Rota para visualizar chamados */}
      </Routes>
    </Router>
  );
}

export default App;
