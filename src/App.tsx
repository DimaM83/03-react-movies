import './App.css'; // временно, потом подключим стили по компонентам
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const handleSearch = (query: string) => {
    console.log('Искать фильмы по ключевому слову:', query);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {/* позже: MovieGrid, Loader, ErrorMessage, MovieModal */}
    </>
  );
}

export default App;