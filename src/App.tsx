import React, {useEffect, useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces";

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const stor = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(stor);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        // setTodos([newTodo, ...todos]);
        setTodos(prev => [newTodo, ...prev]);
    };

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    const removeHandler = (id: number) => {
        const rmv = window.confirm("Are you sure?");
        if(rmv){
            setTodos(prev => prev.filter(todo => todo.id !== id));
        }
    };

  return <>
      <Navbar/>
      <div className='container'>
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    </>
};

export default App;

