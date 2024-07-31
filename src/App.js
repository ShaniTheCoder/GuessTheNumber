import './App.css';
import Main from './Components/Main'
function Header() {
  return (
      <div className='theme header'>
        <h1>Number Guesser Game</h1>
        
      </div>
  );
}
function App() {
  return (
    <>
    <Header />
    <Main />
    </>
  );
}

export default App;
