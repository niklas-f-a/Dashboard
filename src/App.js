import './styles/App.scss';
import Layout from './views/Layout'
import OnlineListener from './components/OnlineListener'
import { OnlineContextProvider } from './context/OnlineContext';


function App() {
  return (

    <div className="App">
      <OnlineContextProvider>
        <OnlineListener />
        <Layout />
      </OnlineContextProvider>
      </div>

  );
}

export default App;
