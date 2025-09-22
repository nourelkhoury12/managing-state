import { useState } from 'react'


function Object() {
  const [ drink, setDrink ] = useState({
    title: 'Americain',
    price: 5
  });

  const handleClick = () => {
  
    setDrink({...drink, price: 6});
  }

  return (
    <div className="App">
      {drink.price}
      <button onClick={handleClick} type="button">update price</button>
    </div>
  )
}

export default Object
