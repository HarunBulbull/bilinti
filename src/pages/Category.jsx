import { useEffect, useState, useRef, useCallback } from "react";
import { HomeOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Breadcrumb } from "antd";
import NewCard from "../components/Reusable/NewCard/NewCard";


function Category() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const { category } = useParams();
  const observer = useRef();

  const fetchData = async () => {
    try {
      if (loading || !hasMore) return;
      setLoading(true);
      const response = await fetch(`${apiURL}/api/news/category/${category}/${index * 10}/${(index + 1) * 10}`, { method: "GET" });
      const result = await response.json();
      if (response.ok) {
        if (result.data && result.data.length > 0) {
          setData(prev => [...prev, ...result.data]);
          if (result.data.length < 10 || data.length + result.data.length >= result.total) {
            setHasMore(false);
          }
        } else {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.log(error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setData([]);
    setHasMore(true);
    setIndex(0);
  }, [category]);

  useEffect(() => {
    if(hasMore){
      fetchData();
    }
  }, [index, category, hasMore]); 

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setIndex(prevIndex => prevIndex + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <div className="flex justify-center items-center gap-4 py-8">
      <Helmet>
        <title>{category.toUpperCase()} Haberleri | Bilinti</title>
        <meta name="description" content="Bilinti'nin köşe yazıları sayfasında gündeme dair derin analizler, uzman görüşleri ve farklı bakış açılarıyla kaleme alınmış yazılarla düşünce dünyanızı zenginleştirin." />
        <meta name="keywords" content={"haber, son, dakika, bil, " + category} />
        <link rel="canonical" href={"https://www.bilintihaber.com/kategori/" + category} />
      </Helmet>
      <div className="container">
        <div className="flex flex-col gap-4">
          <h1 className="clamp-h1 font-bold">{category.toUpperCase()} Haberleri</h1>
          <Breadcrumb
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                title: category.toUpperCase() + " Haberleri"
              }
            ]}
          />
          {data.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {data.map((item, index) => (
                <div
                  key={item.id || index}
                  ref={index === data.length - 1 ? lastElementRef : null}
                >
                  <NewCard data={item} />
                </div>
              ))}
            </div>
          ) : (!loading &&
            <p>Henüz içerik yok</p>
          )}

          {loading && <p>Yükleniyor...</p>}
        </div>
      </div>
    </div>
  );
}

export default Category;