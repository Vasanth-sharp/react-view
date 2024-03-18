import './App.css';
import {useEffect, useState} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data,setData]=useState("");
  const [todos,setToDos]=useState([])
  const [todoData,setToDoData]=useState([])

  const handleAdd=()=>{
   setToDos(()=>{
    let newTodo=[...todos,data]
    localStorage.setItem("list",JSON.stringify(newTodo));
    return newTodo
   })
   setData("")
  }

  useEffect(()=>{
    let localData=JSON.parse(localStorage.getItem('list')) || []
    setToDoData(localData)
  },[todos])

  const handleEdit=(e)=>{
    // console.log(e.target.id)
    let localData=JSON.parse(localStorage.getItem("list"))||[]
    let inputNew=prompt("Enter a edited ",localData[e.target.id])
    if(inputNew==="")
    {
      toast.error("Cannot be empty")
    }
    else{
      localData[e.target.id]=inputNew
      localStorage.setItem("list",JSON.stringify(localData))
      setToDos(localData)
      setData("")
    }
}

  const handleDelete=(e)=>{
    // console.log(e.target.id)
    let localData=JSON.parse(localStorage.getItem("list"))||[]
    localData.splice(e.target.id,1);
    localStorage.setItem("list",JSON.stringify(localData))
    toast.success("deleted succesfully")
    setToDos(localData)
    setData("")
  }

  return (
    <div className="App">
      <>
      <div class="h-screen w-full flex items-center justify-center bg-green-200 font-sans">
        <div class="bg-white rounded-md shadow-2xl shadow-stone-700 p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div class="mb-4">
          <h1 class="text-3xl text-gray-800 font-bold mb-6 text-center">Todo List</h1>
            <div class="flex mt-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button
                class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
          <div>
            {todoData.length > 0 &&
              todoData.map((d, index) => (
                <>
                  <div class="flex mb-4 items-center">
                    <p class="w-full text-grey-darkest" id={index}>
                      {d}
                    </p>
                    <button
                      class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
                      onClick={handleEdit} id={index}
                    >
                      Edit
                    </button>
                    <button
                      class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                      onClick={handleDelete} id={index}
                    >
                      Remove
                    </button>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
    <ToastContainer/>
    </div>
  );
}

export default App;
