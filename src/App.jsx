import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProgressBar from "./components/MachineCoding/ProgressBar/ProgressBar";
import User from "./components/MachineCoding/UsersData/User";
import Todo from "./components/MachineCoding/Todo/Todo";
import Pagination from "./components/MachineCoding/Pagination/Pagination";
import AutoComplete from "./components/MachineCoding/AutoCompleteSearchBar/AutoComplete";
const App =()=>{
  return (
    <>
      <Navbar />
      <AutoComplete />
      {/* <Pagination/> */}
      {/* <h1>Frontend Queries</h1> */}
      {/* <Todo /> */}
      {/* <Hero /> */}
      {/* <ProgressBar /> */}
      {/* <User /> */}

    </>
  )
}
export default App;