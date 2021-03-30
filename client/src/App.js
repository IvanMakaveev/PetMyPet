import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Categories from './components/Categories';
import PetDetails from './components/PetDetails';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';
import Edit from './components/Edit';
import DemoPage from './components/Demo';
import DemoFunc from './components/Demo/DemoFunc';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={Categories}/>
        <Route path="/categories/:category" component={Categories}/>
        <Route path="/pets/details/:petId" component={PetDetails}/>
        <Route path="/pets/edit/details/:petId" component={EditPet}/>
        <Route path="/pets/edit/:petId" component={Edit}/>
        <Route path="/pets/create" component={CreatePet}/>
        <Route path="/demo" component={DemoPage}/>
        <Route path="/demo-func" component={DemoFunc}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
