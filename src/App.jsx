import { useSelector } from "react-redux"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos";

function App() {

  const todos = useSelector(state => state.todos);


  return (
    <div className="text-center w-[70%] mx-auto">
     <AddTodo/>
     <Todos todos={todos} />
    </div>
  )
}

export default App
