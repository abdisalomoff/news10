import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/home'
import NewsSinglePage from './components/NewsSinglePage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='news/:articleId' element={<NewsSinglePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
