import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "155 cm",
    grupo: "0 positivo",
    estado: "Bueno",
    alergias: "No"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react
        </p>

        {/* Cargar mi primer componente */}
        <div className='componentes'>
          <hr></hr>
          <EventosComponente/>
          <hr></hr>
          <TercerComponente 
            ficha={ficha_medica}
          />
          <hr></hr>
          <SegundoComponente/>
          <hr></hr>
          <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
