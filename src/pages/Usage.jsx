import { LoadingOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { EyeFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breadcrumb, Spin } from 'antd';
import { Helmet } from 'react-helmet';
import moment from "moment"


function Usage() {


  return (
    <div className="flex flex-col w-full justify-center items-center py-8">
      <Helmet>
        <title>Kullanım Şartları | Bilinti</title>
        <meta name="description" content="Bilinti'nin köşe yazıları sayfasında gündeme dair derin analizler, uzman görüşleri ve farklı bakış açılarıyla kaleme alınmış yazılarla düşünce dünyanızı zenginleştirin." />
        <meta name="keywords" content="haber, kullanım, şart, bil, araştır" />
        <link rel="canonical" href="https://www.bilintihaber.com/hakkimizda" />
      </Helmet>
      <div className="container pb-6">
        <h1 className="clamp-h1 font-bold">Kullanım Şartları</h1>

        <div className="flex w-full flex-col sm:gap-6 gap-3">

          <Breadcrumb
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                title: "Kullanım Şartları"
              }
            ]}
          />
          <p className='clamp-p'>
            Bilinti Haber’e hoş geldiniz! Bu Kullanım Şartları, sitemizi (www.bilintihaber.com) kullanımınıza ilişkin kuralları ve sorumlulukları belirler. Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
            <br /><br />
            İçerik Kullanımı: Sitemizdeki tüm içerikler (haberler, görseller, yazılar) Bilinti Haber’e aittir ve telif haklarıyla korunmaktadır. İzinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır. Kişisel kullanım için paylaşım yapılabilir, ancak kaynak gösterilmesi zorunludur.
            <br /><br />
            Kullanıcı Sorumlulukları: Sitemizdeki yorum bölümlerinde veya diğer etkileşim alanlarında yasa dışı, hakaret içeren veya etik dışı içerik paylaşılması yasaktır. Bu tür davranışlar tespit edildiğinde, ilgili kullanıcı engellenebilir.
            <br /><br />
            Hizmet Değişiklikleri: Bilinti Haber, hizmetlerini ve içeriklerini önceden bildirim yapmaksızın değiştirme veya kaldırma hakkını saklı tutar.
            <br /><br />
            Sorumluluk Sınırı: Sitemizdeki bilgilerin doğruluğunu sağlamak için azami özeni gösteriyoruz, ancak içeriklerimizdeki olası hatalardan veya eksikliklerden dolayı sorumluluk kabul etmiyoruz.
            <br /><br />
            Üçüncü Taraf Bağlantıları: Sitemizde yer alan dış bağlantılar, yalnızca bilgilendirme amaçlıdır. Bu bağlantıların içeriğinden veya güvenilirliğinden Bilinti Haber sorumlu değildir.
            <br /><br />
            Bu şartlar, sitemizin kullanımını düzenlemek ve hem kullanıcılarımız hem de platformumuz için güvenli bir ortam yaratmak amacıyla hazırlanmıştır. Sorularınız için [e-posta adresi] üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Usage