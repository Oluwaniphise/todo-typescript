import React from 'react'
import { Todo } from './model'

type Props = {
    todo: Todo;
   

}

const SingleTodo: React.FC <Props> = ({todo}) => {
  return (
    <div className=' todos__single'>
     <p className='todos__single--text"'>{todo.todo}</p> 
    </div>
  )
}

export default SingleTodo