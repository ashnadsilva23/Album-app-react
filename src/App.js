import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DeleteAlbum from './DeleteAlbum';
import AddAlbum from './components/AddAlbum';
import SearchAlbum from './components/SearchAlbum';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      <Route path='/search' element={<SearchAlbum/>}/>
      <Route path='/delete' element={<DeleteAlbum/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
