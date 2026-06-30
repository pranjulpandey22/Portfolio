import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProgressBar from "./components/Projects/ProgressBar/ProgressBar";
import User from "./components/Projects/UsersData/User";
import Todo from "./components/Projects/Todo/Todo";
const App =()=>{
  return (
    <>
      <Navbar />
      <h1>Frontend Queries</h1>
      <Todo />
      {/* <Hero /> */}
      {/* <ProgressBar /> */}
      {/* <User /> */}
    </>
  )
}
export default App;