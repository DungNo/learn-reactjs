import React, { useEffect } from 'react';
import TodoList from './Feature/Todo';
import TodoForm from './Feature/TodoForm';
import { useState } from 'react';
import PostList from './Feature/PostList';

function TodoFeature() {
    const [todoList, setTodoList] = useState([]);

    const [postList, setPostLis] = useState([])

    useEffect(() => {
        async function fectchPostList() {
            const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10';
            const response = await fetch(requestUrl);
            const responseJSON = await response.json();
            console.log(responseJSON);

            const {data} = responseJSON;
            setPostLis(data);
        }

        fectchPostList();
    }, [])

    function handleTodoClick(todo) {
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValue) {
        const newTodo = {
            id: todoList.length + 1,
            ...formValue,
        };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todos={todoList} onTodoClick={handleTodoClick} />
            <PostList posts={postList}/>
        </div>
    );
}

export default TodoFeature;