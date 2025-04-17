import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewDetail from "./pages/NewDetail"
import AddUser from "./admin/Users/AddUser"
import UserList from "./admin/Users/UserList"
import UpdateUser from "./admin/Users/UpdateUser"
import AddNew from "./admin/News/AddNew"
import News from "./admin/News/News"
import NewDetailPage from "./admin/News/NewDetail"

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/haber' element={<NewDetail />}/>

      <Route path='/admin/*'>
        <Route path='kullanici-ekle' element={<AddUser />} />
        <Route path='kullanici-duzenle/:id' element={<UpdateUser />} />
        <Route path='kullanicilar' element={<UserList />} />
        <Route path='haber-ekle' element={<AddNew />} />
        <Route path='haberler' element={<News />} />
        <Route path='haber-detay/:id' element={<NewDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
