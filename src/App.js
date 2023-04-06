// import React, { useState } from 'react'
// import './App.css';
// import instance from './interceptor';

// function App() {

//   const [task, setTask] = useState([]);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');


//   React.useEffect(() => {
//     instance.get('/')
//       .then((res) => {
//         setTask(res.data);
//       }).catch((err) => {
//         setTask([]);
//       })
//   }, [])

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (name === '' || description === '') {
//       alert('Please fill all the fields');
//       return;
//     }

//     await instance.post('/api/insert', {
//       name,
//       description,
//     })
//       .then((res) => {
//         setTask([...task, { name, description }]);
//       }).catch((err) => {
//         alert("Something went wrong")
//       })
//   }

//   const deteleTask = async (id) => {
//     await instance.post('/api/delete', {
//       id
//     })
//       .then((res) => {
//         setTask(task.filter((item) => item.id !== id));
//       }).catch((err) => {
//         alert("Something went wrong")
//       })
//   }


//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit} className='_centered' >
//         <h1>Hello World !</h1>
//         <label htmlFor="name">Enter task</label>
//         <input onChange={(e) => setName(e.target.value)} type="text" name="name" />
//         <br />
//         <label>Description</label>
//         <input type="text" name="text" onChange={(e) => {
//           setDescription(e.target.value);
//         }} />

//         <button type="submit">Submit</button>
//       </form>

//       <h2 className='gradiant_heading _centered '>Task List</h2>
//       <div className='_flex _start _flex_wrap outline_shine'>
//         {task.map((item, index) => {
//           return (
//             <div key={index} className='glass_shades w-30 box_shadow'>
//               <h3 className='light_heading' >{item.name}</h3>
//               <div >
//                 <p>{item.description}</p>
//                 <button onClick={() => deteleTask(item.id)} className="delete_task" >Delete task</button>
//               </div>
//             </div>
//           )
//         })}
//         {
//           task.length === 0 && <h3 className='light_heading' >No task found</h3>
//         }

//       </div>

//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import Login from './Login'


const App = () => {
  return (
    <Login />
  )
}


export default App




