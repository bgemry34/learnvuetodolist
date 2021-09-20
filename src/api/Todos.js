import axios from 'axios';

export const fetchTodos = async () => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const {data} = res;
        return data;
    }catch(error){
        return [];
    }
}

export const CreateTodo = async (todo) => {
    try{
        const data = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
        return data;
    }catch(error){
        return [];
    }
}

export const DeleteTodo = async (id) => {
    try{
        const data = await axios.delete('https://jsonplaceholder.typicode.com/todos/'+id);
        return data;
    }catch(error){
        return [];
    }
}

