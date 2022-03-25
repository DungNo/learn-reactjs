import logo from './logo.svg';
import './App.css';
import TodoFeature from './components';
import AlbumSong from './components/Feature/Album';
import TodoForm from './components/Feature/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoFeature/>
      {/* <AlbumSong/> */}
    </div>
  );
}

export default App;
