import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Routers from './routers';
import Home from './components/home';
import Cart from './components/cart';

function App() {
  return (
    <>
        <Routers/>
    </>
  );
}

export default App;
