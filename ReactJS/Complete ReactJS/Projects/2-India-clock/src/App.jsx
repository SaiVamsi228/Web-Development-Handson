import CurrentTime from "./components/CurrentTime";
import Heading from "./components/Heading";
import Motto from "./components/Motto";
import './App.css'

function App(){

  return <main>
    <div className="clock-container">
    <Heading/>
    <Motto/>
    <CurrentTime/>
  </div >
  </main>
}

export default App;