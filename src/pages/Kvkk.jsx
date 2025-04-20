import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Helmet } from 'react-helmet';


function Kvkk() {


  return (
    <div className="flex flex-col w-full justify-center items-center py-8">
      <Helmet>
        <title>Kişisel Verilerin Korunması | Bilinti</title>
        <meta name="description" content="Bilinti'nin köşe yazıları sayfasında gündeme dair derin analizler, uzman görüşleri ve farklı bakış açılarıyla kaleme alınmış yazılarla düşünce dünyanızı zenginleştirin." />
        <meta name="keywords" content="haber, kullanım, şart, bil, araştır" />
        <link rel="canonical" href="https://www.bilintihaber.com/hakkimizda" />
      </Helmet>
      <div className="container pb-6">
        <h1 className="clamp-h1 font-bold">Kişisel Verilerin Korunması</h1>

        <div className="flex w-full flex-col sm:gap-6 gap-3">

          <Breadcrumb
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                title: "Kişisel Verilerin Korunması"
              }
            ]}
          />
          <p className='clamp-p'>
            Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
            <br/><br/>
            Bilinti Haber olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin korunmasına büyük önem veriyoruz. Bu aydınlatma metni, verilerinizin nasıl işlendiğini ve haklarınızı açıklar.
            Veri Sorumlusu: Bilinti Haber, kişisel verilerinizin işlenmesinden sorumlu veri sorumlusudur. İletişim: <a href="mailto:info@bilintihaber.com" className='text-blue-500'>info@bilintihaber.com</a>.
            <br/><br/>

            Toplanan Veriler ve İşleme Amacı:
            <br/><br/>

            Sitemizi ziyaret ettiğinizde IP adresiniz, tarayıcı bilgileriniz ve ziyaret süreleriniz gibi veriler, site performansını analiz etmek ve kullanıcı deneyimini iyileştirmek amacıyla işlenir.
            <br/><br/>

            Yorum veya form doldurma yoluyla verdiğiniz bilgiler (ad, e-posta vb.), yalnızca iletişim ve hizmet sağlama amacıyla kullanılır.
            <br/><br/>

            Verilerin Aktarımı: Kişisel verileriniz, kanunen zorunlu haller dışında üçüncü taraflarla paylaşılmaz. Ancak, hizmet sağlayıcılarımız (örneğin, analiz araçları) ile sınırlı olarak paylaşılabilir.
            <br/><br/>

            Veri Güvenliği: Verilerinizin güvenliği için teknik ve idari önlemler alıyoruz. Ancak, internet ortamında tam güvenlik sağlanamayabileceğini hatırlatırız.
            <br/><br/>

            Haklarınız: KVKK kapsamında, kişisel verilerinizle ilgili şu haklara sahipsiniz:
            <ol style={{listStyle: "inside"}}>
              <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse bilgi talep etme</li>
              <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
              <li>İşlemeye itiraz etme</li>
            </ol>
            <br/><br/>

            Bu haklarınızı kullanmak için <a href="mailto:info@bilintihaber.com" className='text-blue-500'>info@bilintihaber.com</a> adresine başvurabilirsiniz.
            <br/><br/>

            Bilinti Haber olarak, verilerinizi KVKK’ya uygun şekilde işliyor ve koruyoruz. Sorularınız için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Kvkk