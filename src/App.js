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
        setName('');
        setDescription('');
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
      <div className="form_container ">
        <form onSubmit={handleSubmit} className='_centered' >
          <h1 className="gradiant_heading" >Task Manager</h1>
          <label htmlFor="name">Enter task</label>
          <input value={name} required onChange={(e) => setName(e.target.value)} type="text" name="name" />
          <br />
          <label>Description</label>
          <input vaue={description} required type='text' name="text" onChange={(e) => {
            setDescription(e.target.value);
          }} />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className='card_control'>
        <h2 className='gradiant_heading _centered '>Task List</h2>
        <div className='_grid outline_shine'>
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

    </div>
  );
}

export default App;




