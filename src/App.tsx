import {
  BrowserRouter,
} from "react-router-dom";
import { Menu } from "./components";
import { AppRoutes } from "./router";

function App() {
  return (    
    <BrowserRouter>
      <Menu>
        <AppRoutes/>
      </Menu>
    </BrowserRouter>
  )
}

export default App
