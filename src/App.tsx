import { useState } from 'react'
import InputField from './components/InputField'
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      setTodo('')
    }

  }
console.log(todos)
  return (
    <div className="App">
      <h1 className='heading'>Taskify</h1>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
