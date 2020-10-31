import React from 'react'
import { ITodos } from '../interface'

interface TodoListProps {
    todos: ITodos[],
    deleteItem(id: number): void
    taskCompleted(id: number): void
}

declare var confirm: (question: string) => boolean

export const TodoList: React.FC<TodoListProps> = (props) => {

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        if (confirm('Are you sure?')) {  
            props.deleteItem(id);
        }
    }

    return (
        <ul>
            { props.todos.map(item => {
                const classes = ['list__item']
                if (item.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label>
                        <input type='checkbox' checked={item.completed} onChange={() => props.taskCompleted(item.id)} />
                        <span>{item.title}</span>
                        <i className='material-icons red-text' onClick={(event) => removeHandler(event, item.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}