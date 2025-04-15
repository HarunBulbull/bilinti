
import { Link } from "react-router-dom"

function Likeds() {

    const list = [
        { path: '/', name: "Sahile ölü olarak vurdu, devasa büyüklüğüyle dikkat çekti", image: '/Manset/1.webp' },
        { path: '/', name: "İnfial yaratan görüntü! Polisler vatandaşı böyle darp etti", image: '/Manset/2.webp' },
        { path: '/', name: "Trump'ın hamlesi Bitcoin ve kripto paraları uçurdu", image: '/Manset/3.webp' },
        { path: '/', name: "Amasya'da korkutan deprem! Çok sayıda ilden hissedildi", image: '/Manset/4.webp' },
        { path: '/', name: "Üsküdar Belediyesi personel maaşlarını ödeyemedi, gerekçe SMS ile bildirildi", image: '/Manset/1.webp' },
        { path: '/', name: "Fenerbahçe maçı öncesi resmen kabusu yaşadılar", image: '/Manset/2.webp' },
        { path: '/', name: "Bak sen şu işe! WhatsApp'a yazdıklarından değil kameralardan utandılar", image: '/Manset/3.webp' },
        { path: '/', name: "Yeşil ışık yaktı! Gitmesini hiç istemediği yıldız geri dönüyor", image: '/Manset/4.webp' },
    ]

    return (
        <div className="flex flex-col gap-4 w-full order-1">
            <h4 className="clamp-h4 font-black">Öne Çıkan Haberler</h4>
            <span className="block md:w-150 w-full h-[2px] bg-linear-to-r from-(--primary) to-(--secondary)" />
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
                {list.map((e, k) => (
                    <Link to='/haber' key={k} className="bg-white w-full shadow-md flex flex-col gap-4 cursor-pointer hover:text-[var(--secondary)] group overflow-hidden rounded-md hover:shadow-lg transition duration-300">
                        <img
                            src={e.image}
                            alt="new_image"
                            className="transition-transform duration-300 group-hover:scale-105 shadow-md"
                        />
                        <div className="px-4 pb-4">
                            <b className="clamp-p transition duration-300">{e.name}</b>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Likeds