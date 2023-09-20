import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { useModal } from './components/modal';

function App() {
  const modal = useModal()
  return (
    <div className="App">
      <modal.component />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
