import { LoadingOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { EyeFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breadcrumb, Spin } from 'antd';
import { Helmet } from 'react-helmet';
import moment from "moment"


function About() {


  return (
    <div className="flex flex-col w-full justify-center items-center py-8">
      <Helmet>
        <title>Hakkımızda | Bilinti</title>
        <meta name="description" content="Bilinti'nin köşe yazıları sayfasında gündeme dair derin analizler, uzman görüşleri ve farklı bakış açılarıyla kaleme alınmış yazılarla düşünce dünyanızı zenginleştirin." />
        <meta name="keywords" content="haber, hakkımızda, bil, araştır" />
        <link rel="canonical" href="https://www.bilintihaber.com/hakkimizda" />
      </Helmet>
      <div className="container pb-6">
      <h1 className="clamp-h1 font-bold">Hakkımızda</h1>

        <div className="flex w-full flex-col sm:gap-6 gap-3">

          <Breadcrumb
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                title: "Hakkımızda"
              }
            ]}
          />
          <div className="grid grid-cols-[2.5fr_1fr] gap-4 items-start">
            <p className='clamp-p'>
              Bilinti Haber, 9 Nisan 2025’te Talha Narman tarafından bir fikir olarak ortaya atılmış ve gönüllü kurucu ekip üyelerinin özverili çalışmalarıyla hayat bulmuş bir dijital haber platformudur. Amacımız, güvenilir, tarafsız ve güncel haberleri okuyucularımıza ulaştırarak haberin nabzını tutmaktır. Türkiye’den ve dünyadan gelişmeleri, şeffaf bir yayın anlayışıyla sunmayı hedefliyoruz.
              <br /><br />
              Gönüllü bir ekip olarak yola çıktık; editörlerimiz, yazarlarımız, çevirmenlerimiz ve teknik ekibimizle birlikte her gün daha iyi bir haber deneyimi sunmak için çalışıyoruz. Okuyucularımıza tarafsız, doğru ve erişilebilir bilgiler sunarken, yenilikçi yaklaşımlarımızla dijital medya dünyasında fark yaratmayı amaçlıyoruz.
              <br /><br />
              Bilinti Haber olarak, haberin gücüne inanıyoruz. Bu yüzden her bir haberimizde doğruluk ve etik ilkelerimizi ön planda tutuyoruz. Siz de bu yolculukta bize katılabilir, haber dünyasında güvenilir bir kaynak arayışınıza Bilinti Haber ile son verebilirsiniz.
              <br/><br />
              Haberin Nabzı Burada!
            </p>
            <img src="bilinti-4.png" className='w-full rounded-2xl' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About