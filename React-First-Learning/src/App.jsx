import './App.css'

function App() {
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("hello");
  }
  
  return (
    <>
    <div className="h-screen w-screen flex justify-center items-center">
    <form className='flex justify-center items-center flex-col gap-5' onSubmit={(e)=>{handleSubmit(e)}}>
    <input type="text" className='bg-blue-300 rounded-2xl p-2 text-black text-4xl'/>  
    <button className='text-4xl bg-red-900 p-4 rounded-2xl'>submit</button>
    </form>      
    </div>
    </>
  )
}

export default App
