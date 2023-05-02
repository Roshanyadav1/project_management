import React, { useState, Suspense, lazy } from 'react'
import './App.css';
import instance from './services/interceptor';
import { deteleTask } from './helpers/tasks';

const Card = lazy(() => import('./components/Card.jsx'));

function App() {

  const [task, setTask] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  React.useEffect(() => {
    instance.get('/')
      .then((res) => {
        setTask(res.data);
      }).catch((err) => {
        setTask([]);
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || description === '') {
      alert('Please fill all the fields');
      return;
    }

    await instance.post('/api/insert', {
      name,
      description,
    })
      .then((res) => {
        setTask([...task, { name, description }]);
      }).catch((err) => {
        alert("Something went wrong")
      })
  }

  const removeTask = async (id) => {
    await deteleTask(id)
      .then((res) => {
        setTask(task.filter((item) => item.id !== id));
      }).catch((err) => {
        alert("Something went wrong")
      })
  }


  return (
    <div className="App">

      <div className="form_container _flex _centered ">
        <form onSubmit={handleSubmit} className='_centered' >
          <h1 className="gradiant_heading" >Hello World !</h1>
          <label htmlFor="name">Enter task</label>
          <input onChange={(e) => setName(e.target.value)} type="text" name="name" />
          <br />
          <label>Description</label>
          <input type="text" name="text" onChange={(e) => {
            setDescription(e.target.value);
          }} />

          <button type="submit">Submit</button>
        </form>
      </div>

      <h2 className='gradiant_heading _centered '>Task List</h2>
      <div className='_flex _start _flex_wrap outline_shine'>
        <Suspense fallback={
          <h2 className='_centered '>Loading...</h2>
        } >
          {task.map((item, index) => {
            return (
              <Card key={index} item={item} deteleTask={removeTask} />
            )
          })}
          {
            task.length === 0 && <h3 className='light_heading' >No task found</h3>
          }
        </Suspense>


      </div>

    </div>
  );
}

export default App;


// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './Login'
// import SignIn from './SignIn';
// import Home from './Home';


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignIn />} />
//         <Route path="/home/*" element={<Home />} />

//       </Routes>
//     </BrowserRouter>
//   )
// }


// export default App




