import { LoadingOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { EyeFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breadcrumb, Spin } from 'antd';
import { Helmet } from 'react-helmet';
import moment from "moment"


function NewDetail() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { link } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiURL}/api/news/link/${link}`, { method: "GET", });
      const data = await response.json();
      if (response.ok) { setData(data.data); }
    }
    catch (error) { console.log(error); }
    finally { setLoading(false); }
  }

  useEffect(() => { fetchData(); }, [])

  return (
    <Spin spinning={loading} tip="Yükleniyor..." indicator={<LoadingOutlined spin />} size="large">
      {data?.newSEO &&
        <Helmet>
          <title>{data?.newSEO?.title} | Bilinti</title>
          <meta name="description" content={data?.newSEO?.description}/>
          <meta name="keywords" content={data?.newSEO?.keywords}/>
          <meta name="author" content={data?.newAuthor?.fullName}/>
          <link rel="canonical" href={"https://www.bilintihaber.com/haber/" + data?.newLink}/>
        </Helmet>
      }
      <div className="flex flex-col w-full justify-center items-center">
        <div className='sm:w-[80%] max-w-[1400px] sm:mt-8 w-full mt-0'>
          <img src={apiURL + "/api/image/" + data.newImage} alt="new_image" className="w-full sm:rounded-xl shadow-xl mb-6" />
        </div>
        <div className="container pb-6">
          <div className="flex w-full flex-col sm:gap-6 gap-3">

            <Breadcrumb
              items={[
                {
                  href: '/',
                  title: <HomeOutlined />,
                },
                {
                  href: `/kategori/${data.newCategory}`,
                  title: data.newCategory
                },
                {
                  title: data.newTitle
                }
              ]}
            />

            <h1 className="clamp-h1 font-bold">{data.newTitle}</h1>
            <span className="block w-full h-[2px] bg-linear-to-r from-(--primary) to-(--secondary)" />

            <div className="newDetailHtml flex flex-col sm:gap-4 sm:my-4" dangerouslySetInnerHTML={{ __html: data.newContent }}></div>
            <span className="block w-full h-[2px] bg-linear-to-r from-(--secondary) to-(--primary)" />

            <div className="flex sm:flex-row flex-col justify-between items-center mt-4">
              <p className="clamp-p"><b className="text-medium">Yazar: </b>{data?.newAuthor?.fullName}</p>
              <div className="flex gap-4">
                <p className="clamp-p">{moment(data.createdAt).format("DD.MM.YYYY H:mm")}</p>
                <span className="w-[1px] h-[20px] bg-black block" />
                <p className="clamp-p flex items-center gap-2"><EyeFill /> {data.newViews}</p>
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
          .newDetailHtml h1 {font-size: clamp(1.75rem, 1.0536rem + 2.4762vw, 3.375rem);}
          .newDetailHtml h2 {font-size: clamp(1.5625rem, 0.9464rem + 2.1905vw, 3rem);}
          .newDetailHtml h3 {font-size: clamp(1.375rem, 0.8929rem + 1.7143vw, 2.5rem);}
          .newDetailHtml h4 {font-size: clamp(1.1875rem, 0.7857rem + 1.4286vw, 2.125rem);}
          .newDetailHtml h5 {font-size: clamp(1rem, 0.7321rem + 0.9524vw, 1.625rem);}
          .newDetailHtml p, b, li, i{font-size: clamp(0.8125rem, 0.6786rem + 0.4762vw, 1.125rem);}
          .newDetailHtml b{font-weight: bold;}
          .newDetailHtml ol{list-style: inside}
          `}
        </style>
      </div>
    </Spin>
  )
}

export default NewDetail