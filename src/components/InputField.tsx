import React, {useRef} from 'react'
import './styles.css'

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, handleAdd, setTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <section>

    <form onSubmit={(e) => { 
      handleAdd(e);
      inputRef.current?.blur();
    }}  className='input'>
        <input ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} type="input"
         placeholder="Enter a task" className="input__box" />
        <button type='submit' className="text-black input_submit">  Go</button>
    </form>
    </section>

  )
}

export default InputField