import './App.css'

function App() {
  async function getData() {  
      const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
      console.log(response);
      
    
  }
  return (
    <>
    <div className="">
      <button 
      className='bg-amber-50/50 p-3 rounded-2xl'
      onClick={getData}
      >Get Data
      </button>
    </div>
    </>
  )
}

export default App
