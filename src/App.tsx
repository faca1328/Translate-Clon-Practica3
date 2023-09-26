import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { useStore } from './Hooks/useStore'


function App() {


  const { fromLanguage, toLanguage, setFromLanguage } = useStore()

  return (
    <Container className='app'>
      <h1>Google Translate</h1>



      <Row>
        <Col>
          <h3>From</h3>
          {fromLanguage}
        </Col>
        <Col>
        <button>🔁</button>
        </Col>
        <Col>
         <h3>To</h3>
         {toLanguage}
        </Col>
      </Row>


      {/*Aca decimos que accion va a enviar*/}
      <button onClick={() => { setFromLanguage('es') }}>cambiar a castellano</button>
      {/*    Setea el estado dentro de 'SET_FROM_LANGUAGE' = 'es'                 */}


      {/*<button onClick={() => { dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' }) }}>cambiar a castellano</button>*/}
      {/*Ambos botones hacen lo mismo, solo que no usamos el dispatch directamente en el componente sino q lo usamos a traves de una funcion*/}

    </Container>

  )
}

export default App
