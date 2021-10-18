import { useState } from 'react';

// import './App.css';
import './components/navbar';

import Navbar from './components/navbar';
import Container from './components/container';
import SearchInput  from './components/search';
import Info from './components/info';
import Todos from './components/todos';
import Empty from './components/empty';

function App() {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    
  ]);

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if(newTodos[index].count > 0){
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!value){
      alert('No item to list!');
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }];

    setTodos(addedTodos);
    setValue('');
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0);

    return totalCounts;
  }

  return (
    <div>
      
      <Navbar/>

      <Container>

      <SearchInput
        onSubmit={handleSubmit}
        onChange={(e) =>  setValue(e.target.value)}
        value={value}
      />

      <Info
        todosLength={todos.length}
        totalCounts={getTotalCounts()}
        onDelete={() => setTodos([])}
      />


        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty/>
        )}
      </Container>
    </div>
  );
}

export default App;
