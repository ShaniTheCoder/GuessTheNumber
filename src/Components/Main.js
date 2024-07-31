import '../App.css';
import "./Main.css";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1; 
const reload = () =>  window.location.reload();

const rand = getRandomNumber();
let turns = 10;



function Main() {
    return (
        <div className='theme main'>
            <div className='rule'>
            <h2>Rules :</h2>
            
            <li>There is no time limit, Number are from 1 to 100</li>
            <li>click Submit to submit the value</li>
            <li>click Reset to reset the number</li>
            <li>The number is set as soon as page is loaded</li>
            
            </div>
            <p className='p'>Turn left : 10</p>
            <input type='number' id="inp-num" min='0' max='100' placeholder='enter here' />
            <div>
                <button onClick={game}>Submit</button>
                <button onClick={reload}>Reset</button>
            </div>
            <h1 id='h'>...</h1>
        </div>
    )
}

const game = () => {
    let para = document.getElementsByClassName('p')[0];
    let head = document.getElementById('h');
    console.log(rand);
    const val = document.getElementById('inp-num').value;
    console.log(`val : ${val}`)
    if (turns > 0) {
        if (val == rand) {
            head.innerHTML = 'You Won';
            para.innerHTML = `Turns left: ${turns}`;
        } else if (val < rand) {
            turns--;
            para.innerHTML = `Just a little greater, ${turns} turns left`;
        } else if (val > rand) {
            turns--;
            para.innerHTML = `Just a little lower, ${turns} turns left`;
        }
        if (turns === 0 && val != rand) {
            para.innerHTML =  `The number was ${rand}`
            head.innerHTML = 'You Lost';
        }
    }
        
    
}
export default Main;