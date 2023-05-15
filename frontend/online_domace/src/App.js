
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import Kupujem from './components/Kupujem';
import Prodajem from './components/Prodajem';
import ShowProduct from './components/ShowProduct';
import AddProduct from './components/AddProduct';
import Search from './components/Search';


  function App() {


    return (
      <div className="App">
       <NavBar />
        <Router> 
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/kupujem" component={Kupujem} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/prodajem" component={Prodajem} />
            <Route exact path="/showproduct" component={ShowProduct} />
            <Route exact path="/addproduct" component={AddProduct} />
            <Route exact path="/addproduct" component={AddProduct} />
          </Switch>
        </Router>
       
      </div>
    );
  }

  export default App;