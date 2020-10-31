import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/Todoform'
import { TodoList } from '../components/Todolist'
import { ITodos } from '../interface'


export const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodos[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodos[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])



    const onAdding = (title: string) => {
        const newTodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const deleteItem = (id: number) => {
        setTodos(prev => prev.filter(item => item.id !== id))
    }

    const taskCompleted = (id: number) => {
        setTodos(prev =>
            prev.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            }));

    }
    return (
        <div>
            <TodoForm onAdding={onAdding} />
            <TodoList todos={todos} deleteItem={deleteItem} taskCompleted={taskCompleted} />
        </div>
    )
}

