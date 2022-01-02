import * as C from './App.styles'; 
import {useState} from 'react'
import {item} from './types/item';
import {ListItem} from './components/listItem/index';
import {AddArea} from './components/AddArea';

const App = () => {

  const [list,setList] = useState<item[]>([
    {id:1, name: 'Fazer cursos', done: false},
    {id:2, name: 'Ir na auto escola', done: true}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }


  return(
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}


      </C.Area>
    </C.Container>
  );
}
export default App;