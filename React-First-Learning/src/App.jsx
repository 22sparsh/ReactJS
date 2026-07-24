import './App.css'
import Card from './components/Cards/Card'

function App() {
  function btnclick(){
    console.log("clicked" );
  }
  function btnclick2(elem){
    console.log(elem);
    
  }
  return (
    <>

      <div className='parent bg-green-950'>
        <Card user="Sarah" btnTXT="NTO" />
        <Card user="Sparsh" btnTXT="JTO" />
        <Card user="Hora" btnTXT="FTO" />
        <Card user="Sam" btnTXT="CTO" />
      </div>
      <button className='bg-amber-50/25 rounded-2xl hover:bg-red-200 cursor-pointer text-black p-2' onClick={function (elem){
        btnclick2(elem.target.innerHTML);
      }}>Click Me!</button>
    </>
  )
}

export default App
