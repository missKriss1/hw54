
import './App.css'
import {useState} from "react";
import Field from "./Components/ field/ field.tsx";

const App = () => {
    const createItems = () =>{
        const items = [];
        const randomByIndex = Math.floor(Math.random() * 36);

        for (let i = 0; i < 36; i++) {
            items.push({
                hasItem: i === randomByIndex,
                clicked: false,
            });
        }
        return items;
    }

    const [items, setItems] = useState(createItems());
    const [attempt, setAttempts] = useState(0);

    const onClick = (index:number) => {
        const item = items[index];
        if(item.hasItem){
            alert('Вы нашли кольцо!')
        }

        const newItem = [...items];
        newItem[index].clicked = true;

        setItems(newItem);
        setAttempts(attempt + 1);
    }

    const clickReset = () => {
        setItems(createItems());
        setAttempts(0)
    }

  return (
      <>
          <div className="container">
              <h2>Найди колечко :)</h2>
              <div className="blockField">
                  {items.map((item, index) => (
                      <Field key={index} index={index} item={item} onClick={onClick}/>
                  ))}
              </div>
              <h3>Попытки: {attempt}</h3>
              <button onClick={clickReset}>Начни заново</button>
          </div>

      </>
  )
};

export default App
