import Cards from '../components/Proyect/Cards';
import CategoriesAdd from '../components/Proyect/CategoriesAdd';
import CategoriesApp from '../components/Proyect/CategoriesApp';


function App() {
  return (
    <div className="App">
      <CategoriesAdd />
      <CategoriesApp props={Cards}/>
    </div>
  );
}

export default App;
