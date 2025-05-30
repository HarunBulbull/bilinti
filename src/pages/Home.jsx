import { useEffect, useState } from "react";
import Column from "../components/Home/Column/Column"
import Hero from "../components/Home/Hero/Hero"
import Likeds from "../components/Home/Likeds/Likeds"
import Latest from "../components/Home/Latest/Latest";
import { Helmet } from "react-helmet";

function Home() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiURL}/api/news/homePage`, { method: "GET", });
      const data = await response.json();
      if (response.ok) { setData(data.data); }
    }
    catch (error) { console.log(error); }
    finally { setLoading(false); }
  }

  useEffect(() => { fetchData(); }, [])


  return (
    <>
    <Helmet>
        <title>Ana Sayfa | Bilinti</title>
        <meta name="description" content="Bilinti Haber ile gündemi yakalayın! Tarafsız habercilik anlayışıyla Türkiye ve dünyadan en güncel haberler, analizler ve özel dosyalar bir tık uzağınızda." />
        <meta name="keywords" content="haber, bil, araştır" />
        <link rel="canonical" href="https://www.bilintihaber.com" />
      </Helmet>
      <Hero />
      <div className="flex flex-col justify-center items-center w-full pt-4 pb-8 mt-4">
        <div className="bg-gray-100 w-full flex justify-center items-center py-4 mb-6">
          <div className="container">
            <Latest data={data.latest} loading={loading} />
          </div>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-[3fr_1fr] grid-cols-1 gap-8 items-start">
            <Likeds data={data.tops} loading={loading} />
            <Column />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home