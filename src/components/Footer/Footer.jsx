import { Link } from "react-router-dom"


function Footer() {

    const news = [
        { path: '/', name: 'Son Dakika' },
        { path: '/', name: 'Gündem' },
        { path: '/', name: 'Spor' },
        { path: '/', name: 'Ekonomi' },
        { path: '/', name: 'Magazin' },
        { path: '/', name: 'Siyaset' },
        { path: '/', name: 'Teknoloji' },
        { path: '/', name: 'Sağlık' },
        { path: '/', name: 'Bilim' },
        { path: '/', name: 'Sanat' }
    ]

    const links = [
        { path: '/', name: 'Hakkımızda' },
        { path: '/', name: 'Ekibimiz' },
        { path: '/', name: 'Kullanım Şartları' },
        { path: '/', name: 'Gizlilik Politikası' },
        { path: '/', name: 'Çerez Politikası' },
        { path: '/', name: 'Kişisel Verilerin Korunması' },
        { path: '/', name: 'İletişim' },
    ]

    const contact = [
        { path: '/', name: 'Telegram' },
        { path: '/', name: 'Whatsapp' },
        { path: '/', name: 'Youtube' },
        { path: '/', name: 'X' },
        { path: '/', name: 'Instagram' },
        { path: '/', name: 'Facebook' },
        { path: '/', name: 'LinkedIn' },
    ]

    return (
        <footer className="w-full bg-[url(/bilinti-3.png)] bg-no-repeat bg-cover bg-fixed" style={{boxShadow: "0px 0px 20px rgba(0,0,0,.7)"}}>
            <div className="w-full h-full bg-[rgba(0,0,0,.6)] p-8 flex justify-center items-center flex-col gap-8">
                <div className="container grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                    <div className="flex flex-col items-start justify-start gap-4 sm:border-r-1 border-white  h-full">
                        <img src="/bilinti-5.png" alt="footer_logo" className="w-full" />
                        <p className="clamp-p text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue justo vel velit consequat ultricies at quis diam. Aliquam in consectetur tortor.</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 lg:border-r-1 border-white h-full">
                        <h5 className="clamp-h5 font-semibold text-white">Haberler</h5>
                        <ul>
                            {news.map((e, k) => (
                                <li key={k}>
                                    <Link
                                        to={e.path}
                                        className="
                                    text-white duration-300 transition whitespace-nowrap clamp-p
                                    hover:text-(--primary)
                                "
                                    >
                                        {e.name} Haberleri
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-4 sm:border-r-1 border-white h-full">
                        <h5 className="clamp-h5 font-semibold text-white">Hızlı Linkler</h5>
                        <ul>
                            {links.map((e, k) => (
                                <li key={k}>
                                    <Link
                                        to={e.path}
                                        className="
                                    text-white duration-300 transition whitespace-nowrap clamp-p
                                    hover:text-(--primary)
                                "
                                    >
                                        {e.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-4 h-full">
                        <h5 className="clamp-h5 font-semibold text-white">Bize Ulaşın</h5>
                        <ul>
                            {contact.map((e, k) => (
                                <li key={k}>
                                    <Link
                                        to={e.path}
                                        className="
                                    text-white duration-300 transition whitespace-nowrap clamp-p
                                    hover:text-(--primary)
                                "
                                    >
                                        {e.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start border-t-1 border-white container">
                    <p className="clamp-p text-white mt-4">
                        2025 Bilinti Haberleri &copy; Tüm Hakları Saklıdır.
                    </p>
                    <p style={{fontSize: "13px", color: "white", opacity: .7}}>
                        Powered by <a href="https://harunbulbul.com" target="_blank" className="transition duration-300 hover:text-(--secondary)">Harun Bülbül</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer