import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { useModal } from './components/modal';
import { useLoader } from './components/loading';

function App() {
  const modal = useModal();
  const loader = useLoader();
  return (
    <div className="App">
      <modal.component />
      <loader.Component />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
