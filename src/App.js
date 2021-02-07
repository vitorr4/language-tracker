import './App.css';
import { Route, Link, Redirect} from 'react-router-dom';
import Journal from './pages/Journal'
import Home from "./pages/Home";

function App() {
  return (
    <div className='container'>
      <Route exact path='/pages/journal' component={Journal}/>
      <Route exact path='/' render={() => {
        return (
          <Redirect to='/pages/home' />
        )
      }} component={Home} />
      <footer className='footer'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>

    </div>
  );
}

export default App;
