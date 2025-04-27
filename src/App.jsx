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
import About from "./pages/About"
import Usage from "./pages/Privacy"
import Privacy from "./pages/Privacy"
import Cookies from "./pages/Cookies"
import Kvkk from "./pages/Kvkk"

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AddTeam from "./admin/Team/AddTeam"
import TeamMembers from "./admin/Team/TeamMembers"
import UpdateTeam from "./admin/Team/UpdateTeam"
import Team from "./pages/Team"
import FourOFour from "./pages/FourOFour"
import Contact from "./pages/Contact"
import ContactAdmin from "./admin/Contact/Contact"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Thanks from "./pages/Thanks"


function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location])

  return (
    <Routes>
      <Route path='*' element={<FourOFour />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/haber/:link' element={<NewDetail />}/>
      <Route path='/kose-yazilari' element={<AllColumns />}/>
      <Route path='/son-dakika' element={<Latest />}/>
      <Route path='/kategori/:category' element={<Category />}/>
      <Route path='/hakkimizda' element={<About />}/>
      <Route path='/kullanim-sartlari' element={<Usage />}/>
      <Route path='/gizlilik-politikasi' element={<Privacy />}/>
      <Route path='/cerez-politikasi' element={<Cookies />}/>
      <Route path='/kvkk' element={<Kvkk />}/>
      <Route path='/ekibimiz' element={<Team />}/>
      <Route path='/iletisim' element={<Contact />}/>
      <Route path='/ara/:value' element={<Search />}/>
      <Route path='/profil' element={<Profile />}/>
      <Route path='/tesekkurler' element={<Thanks />}/>

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
        <Route path='ekip-ekle' element={<AddTeam />} />
        <Route path='ekip' element={<TeamMembers />} />
        <Route path='ekip-duzenle/:id' element={<UpdateTeam />} />
        <Route path='iletisim' element={<ContactAdmin />} />
      </Route>
    </Routes>
  )
}

export default App
