import React , { useState , useEffect } from 'react';
import './App.css';

import Search from './components/Search';
import Cards from './components/Cards';

function App() {

  const [cards , setCards] = useState([]);
  console.log(cards);

  const getCards = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    setCards(result);
    console.log(cards);
  }

  useEffect(
    () => {
      getCards();
      //eslint-disable-next-line
    },[])
  return (
    <div className="App">
      <Search />
      <Cards cards={cards} />
      <ul className="pagination" style={{textAlign:"center" , margin:"2rem"}}>
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        <li className="active"><a href="#!">1</a></li>
        <li className="waves-effect"><a href="#!">2</a></li>
        <li className="waves-effect"><a href="#!">3</a></li>
        <li className="waves-effect"><a href="#!">4</a></li>
        <li className="waves-effect"><a href="#!">5</a></li>
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  );
}

export default App;
