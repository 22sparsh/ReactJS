import './App.css'
import axios from 'axios'

function App() {
  async function getData() {  
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/todos/1")
      console.log(data);
      
    
  }
  return (
    <>
    <div className="">
      <button 
      className='bg-amber-50/50 p-3 rounded-2xl active:scale-50'
      onClick={getData}
      >Get Data
      </button>
    </div>
    </>
  )
}

export default App
