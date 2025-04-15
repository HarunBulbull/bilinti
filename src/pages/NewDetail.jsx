import moment from "moment"
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

function NewDetail() {

  const data = {
    name: "Sahile ölü olarak vurdu, devasa büyüklüğüyle dikkat çekti",
    image: "/Manset/1.webp",
    author: "Harun Bülbül",
    date: moment().format('DD.MM.YYYY - H:mm'),
    category: "Ekonomi",
    html: `
      <h5><b>ABD Başkanı Donald Trump İran'a bir kez daha gözdağı verdi. Trump, "İran'ın zengin ve büyük bir ülke olmasını istiyorum fakat tek bir şey, çok basit bir şey var, nükleer silahları olamaz. İran bu hayalden vazgeçmeli, yoksa sert bir yanıtla karşılaşırlar." dedi.</b></h5>
      <p>ABD Başkanı Trump, El Salvador Devlet Başkanı Bukele ile Beyaz Saray'da görüştü. Zirvenin ardından Trump dikkat çeken açıklamalarda bulundu.</p>
      <h5>TRUMP: İRAN BU HAYALDEN VAZGEÇMELİ</h5>
      <p><b>İran</b>'la olan nükleer silah anlaşmazlığına ilişkin konuşan Trump, İran'ı bir kez daha tehdit etti. Trump, " İran'ın zengin ve büyük bir ülke olmasını istiyorum fakat tek bir şey, çok basit bir şey var, nükleer silahları olamaz. İran bu hayalden vazgeçmeli, yoksa sert bir yanıtla karşılaşırlar. İran sorununu çözeceğim." ifadelerini kullandı.</p>
      <p>Trump sözlerini şu şekilde sürdürdü: "İran bizimle anlaşmak istiyor ama nasıl olacağını bilmiyorlar. Asıl konu şu: İran asla nükleer silahlara sahip olamaz. Önümüzdeki cumartesi günü için bir toplantı daha planladık. Dedim ki, bu çok uzun bir süre. Sanıyorum bizi oyalıyorlar çünkü bu ülkede aptal insanlarla uğraşmaya çok alışmışlar. Biz harika bir ülkeyiz ama bu ülkeyi aptal insanlar yönetiyordu. Sınır güvenliği konusunda bize yaptıklarının asla unutulmaması gerekir. Yaptıkları günah."</p>
      `
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="container">
        <div className="flex w-full flex-col gap-6 py-12">
          <Breadcrumb
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                href: `/kategori/${data.category}`,
                title: data.category
              },
              {
                title: data.name
              }
            ]}
          />
          <img src={data.image} alt="new_image" className="w-full rounded-xl shadow-xl" />
          <div className="flex justify-between items-center">
            <p className="clamp-p"><b className="text-medium">Yazar: </b>{data.author}</p>
            <p className="clamp-p">{data.date}</p>
          </div>
          <h1 className="clamp-h1 font-bold">{data.name}</h1>
          <span className="block w-full h-[2px] bg-linear-to-r from-(--primary) to-(--secondary)" />

          <div className="newDetailHtml flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: data.html }}></div>
        </div>
      </div>
      <style>
        {`
          .newDetailHtml h1 {font-size: clamp(1.75rem, 1.0536rem + 2.4762vw, 3.375rem);}
          .newDetailHtml h2 {font-size: clamp(1.5625rem, 0.9464rem + 2.1905vw, 3rem);}
          .newDetailHtml h3 {font-size: clamp(1.375rem, 0.8929rem + 1.7143vw, 2.5rem);}
          .newDetailHtml h4 {font-size: clamp(1.1875rem, 0.7857rem + 1.4286vw, 2.125rem);}
          .newDetailHtml h5 {font-size: clamp(1rem, 0.7321rem + 0.9524vw, 1.625rem);}
          .newDetailHtml p{font-size: clamp(0.8125rem, 0.6786rem + 0.4762vw, 1.125rem);}
          .newDetailHtml b{font-weight: bold;}
        `}
      </style>
    </div>
  )
}

export default NewDetail