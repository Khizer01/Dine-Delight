import './App.css';
import { NavBar, Footer, AppRoutes } from './components/Importfile';
import { Provider } from 'react-redux';
import store from './store/data/dataStore';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
