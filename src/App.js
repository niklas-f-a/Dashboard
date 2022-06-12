import './styles/App.scss';
import Layout from './views/Layout'
import { OnlineContextProvider } from './context/OnlineContext';


function App() {
  return (

    <div className="App">
      <OnlineContextProvider>
        <Layout />
      </OnlineContextProvider>
      </div>

  );
}

export default App;
