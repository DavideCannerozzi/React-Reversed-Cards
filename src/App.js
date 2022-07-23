import Header from './components/Header'
import Body from './components/Body'
import { Container } from './components/styles/Container.styles';
import Global from './components/styles/Global'



function App() {
  return (
    <div>
        <Global />
        <Header />
        <Container>
        <Body />
        </Container>

    </div>
  );
}

export default App;
