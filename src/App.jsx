import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewDetail from "./pages/NewDetail"
import AddUser from "./admin/Users/AddUser"
import UserList from "./admin/Users/UserList"
import UpdateUser from "./admin/Users/UpdateUser"
import AddNew from "./admin/News/AddNew"
import News from "./admin/News/News"
import NewDetailPage from "./admin/News/NewDetail"
import AddCuff from "./admin/Cuff/AddCuff"
import Cuffs from "./admin/Cuff/Cuffs"
import UpdateCuff from "./admin/Cuff/UpdateCuff"
import AddColumn from "./admin/Column/AddColumn"
import Columns from "./admin/Column/Columns"
import ColumnDetail from "./admin/Column/ColumnDetail"
import MyNews from "./admin/News/MyNews"
import UpdateNew from "./admin/News/UpdateNew"
import MyColumns from "./admin/Column/MyColumns"
import UpdateColumn from "./admin/Column/UpdateColumn"
import AllColumns from "./pages/AllColumns"
import Latest from "./pages/Latest"
import Category from "./pages/Category"

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/haber/:link' element={<NewDetail />}/>
      <Route path='/kose-yazilari' element={<AllColumns />}/>
      <Route path='/son-dakika' element={<Latest />}/>
      <Route path='/kategori/:category' element={<Category />}/>

      <Route path='/admin/*'>
        <Route path='kullanici-ekle' element={<AddUser />} />
        <Route path='kullanici-duzenle/:id' element={<UpdateUser />} />
        <Route path='kullanicilar' element={<UserList />} />
        <Route path='haber-ekle' element={<AddNew />} />
        <Route path='haberler' element={<News />} />
        <Route path='haberlerim' element={<MyNews />} />
        <Route path='haber-guncelle/:id' element={<UpdateNew />} />
        <Route path='haber-detay/:id' element={<NewDetailPage />} />
        <Route path='manset-ekle' element={<AddCuff />} />
        <Route path='manset-duzenle/:id' element={<UpdateCuff />} />
        <Route path='mansetler' element={<Cuffs />} />
        <Route path='kose-yazisi-ekle' element={<AddColumn />} />
        <Route path='kose-yazilari' element={<Columns />} />
        <Route path='kose-yazilarim' element={<MyColumns />} />
        <Route path='kose-yazisi-detay/:id' element={<ColumnDetail />} />
        <Route path='kose-yazisi-guncelle/:id' element={<UpdateColumn />} />
      </Route>
    </Routes>
  )
}

export default App
