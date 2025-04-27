import { Helmet } from "react-helmet";
import Login from "../components/Profile/Login";
import Info from "../components/Profile/Info";

function Profile() {
    const member = localStorage.getItem("member") ? localStorage.getItem("member") : null;


    return (
        <>
            <Helmet>
                <title>Profil | Bilinti</title>
                <meta name="description" content="Bilinti Haber ile gündemi yakalayın! Tarafsız habercilik anlayışıyla Türkiye ve dünyadan en güncel haberler, analizler ve özel dosyalar bir tık uzağınızda." />
                <meta name="keywords" content="haber, bil, araştır, profil, giriş, kayıt" />
                <link rel="canonical" href="https://www.bilintihaber.com/profil" />
            </Helmet>
            {
                member ?
                <Info member={member}/>
                :
                <Login/>

            }
        </>
    )
}

export default Profile