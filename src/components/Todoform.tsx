import React, { useRef } from 'react'
interface TodoFormProps {
    onAdding(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)

    const inputAdded = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdding(ref.current!.value);
            ref.current!.value = '';
        }

    }

    return (
        <div className="row center">
            <div className="input-field m2">
                <input
                    name='todo'
                    ref={ref}
                    type="text"
                    placeholder='Write down your task'
                    onKeyPress={inputAdded} />
                <label className="active" htmlFor="todo">Write down your task</label>
            </div>
        </div>
    )
}
