import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Home } from './page/home';
import { Footer } from './component/footer';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
