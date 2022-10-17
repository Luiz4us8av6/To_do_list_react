import React, {useState} from "react";
import Form from '../components/Form';
import Todoitem from '../components/Todoitem';
import { Container, List } from '@mui/material';

export default function Home() {

    const[todos, setTodos] = useState([]);

    const addTodo = (todo) =>{
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) =>{
       var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    };

    const editTodo = (id, editedText) =>{
      var todosArray = [...todos];

      for(var i in todosArray){
        if(todosArray[i].id == id){
          todosArray[i].text = editedText;
        }
      }
    }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo}/>
      <List sx={{ marginTop: "1em" }}>

        { todos.map((todo) => (
            <div key={todo.id} style = {{ marginTop: "1em" }}>
                <Todoitem editTodo={editTodo} todo = { todo } deleteTodo = { deleteTodo }/>
            </div>
        ))}
        
      </List>
    </Container>
  );
}
