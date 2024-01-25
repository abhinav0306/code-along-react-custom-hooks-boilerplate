import useStorage from './CustomHooks/UseStorage'
const App = () => {
  const {setStorage}=useStorage()
  return (
    <>
    <div>
      <input type="text" name="" id="" placeholder='Enter text' onChange={(e)=>setStorage(e.target.value)}/>
    </div>
    </>
  )
}

export default App