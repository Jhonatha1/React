import * as C from './App.styles';
import { useState } from 'react';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';
import { useEffect } from 'react';


const App = () =>{

  useEffect(() => {
    document.title = "Lista do Yanky";
  }, []);

  const [list , setList] = useState<Item[]>([
    {id: 1, name: "Ir no Mercado", done: false},
    {id: 2, name: "Estudar as matérias da faculdade", done: false},
    {id: 3, name: "Estudar TypeScript", done: false},
  ]);

const handleAddTask = (taskName: string) => {
  let newList = [...list];
  newList.push({
    id: list.length+1,
    name: taskName,
    done: false
  });
  setList(newList);
}

  return(
      <C.Container>
        <C.Area>
          <C.Header>
          🔺Lista de Tarefas do Yanky🔺</C.Header>

            <AddArea onEnter={handleAddTask}/> 
          {list.map((item, index)=>(
              <ListItem key ={index} item = {item}/>
            ))}
          </C.Area>


      </C.Container>
  );
}

export default App;