import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import AddForm from "../pages/AddForm"
export default function Routing(){
    return<>
<BrowserRouter>
<Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="addForm" element={<AddForm/>}/>
                <Route path="/edit/:id" element={<AddForm/>}/>
</Routes>
</BrowserRouter>
    </> 
}
