import { BrowserRouter , Routes ,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Header from "./components/Header"

export default function App() {
  return <BrowserRouter>
  {/* header */}
  <Header/>
  
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/Signin" element={<Signin/>}/>
    <Route path ="/Signup" element={<Signup/>}/>
    <Route path ="/profile" element={<Profile/>}/>

  </Routes>
  </BrowserRouter>
}
