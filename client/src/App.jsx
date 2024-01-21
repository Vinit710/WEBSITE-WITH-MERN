import { BrowserRouter , Routes ,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Signin from "./pages/Signin"

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/sign-in" element={<Signin/>}/>
    <Route path ="/signb-up" element={<Signup/>}/>
    <Route path ="/profile" element={<Profile/>}/>

  </Routes>
  </BrowserRouter>
}
