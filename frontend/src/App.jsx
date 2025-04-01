import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h1>Chamados</h1>
          <p>Gerencie seus chamados de forma eficiente e organizada.</p>
          <Button variant="primary">Criar Novo Chamado</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
