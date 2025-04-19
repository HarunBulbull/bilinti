import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(false);
    const burger = useRef(null);
    const span1 = useRef(null);
    const span2 = useRef(null);
    const span3 = useRef(null);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const list = [
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
    ];

    const handleMenu = () => {
        if (!loading) {
            try {
                setLoading(true);
                setMenu(!menu);
                if (!menu) {
                    span1.current.style.width = span3.current.style.width = "35px";
                    setTimeout(() => {
                        span1.current.style.transform = "translateY(1px)";
                        span2.current.style.width = "0";
                        span2.current.style.transform = "translateX(1rem)";
                        span3.current.style.transform = "translateY(-1px)";
                        burger.current.style.gap = "0";
                        setTimeout(() => {
                            span1.current.style.rotate = "45deg"
                            span3.current.style.rotate = "-45deg"
                        }, 300);
                    }, 300);
                }
                else {
                    span1.current.style.rotate = "0deg"
                    span3.current.style.rotate = "0deg"
                    setTimeout(() => {
                        span1.current.style.transform = "translateY(0)";
                        span2.current.style.width = "35px";
                        span2.current.style.transform = "translateX(0)";
                        span3.current.style.transform = "translateY(0)";
                        burger.current.style.gap = ".5rem";
                        setTimeout(() => {
                            span1.current.style.width = "15px"
                            span3.current.style.width = "20px";

                        }, 300);
                    }, 300);
                }
            }
            catch (err) { console.error(err); }
            finally { setLoading(false); }
        }
    }

    return (
        <>
            <div className="w-full h-full bg-black opacity-80 fixed top-0 left-0 z-9998 transition duration-1000" style={{ transform: menu ? "translateX(0)" : "translateX(100%)" }} />
            <div className={`flex justify-center items-center bg-white shadow-xl w-full ${scrolled ? "h-[70px]" : "h-[100px]"} fixed top-0 left-0 z-9999 transition-all duration-500`}>
                <div className="container">
                    <div className="flex gap-8 w-full items-center">
                        <div className="flex gap-8 items-center w-full">
                            <img src="/bilinti-5.png" alt="bilinti-logo" className={scrolled ? "h-[60px] transition-all duration-500" : "h-[90px] transition-all duration-500"} />
                            <input type="text" className="outline-none border-b-1 w-full" placeholder="Haber Ara" />
                        </div>
                        <ul className={`flex gap-4 transition-all duration-500
                        xl:items-center xl:relative xl:flex-row xl:w-full xl:top-0 xl:bg-transparent xl:h-auto xl:p-0 xl:transform-none
                        absolute right-0 flex-col ${scrolled ? "top-[70px]" : "top-[100px]"} w-[300px] bg-white h-[100vh] p-6 items-end ${menu ? "transform-[translateX(0)]" : "transform-[translateX(300px)]"}
                    `}>
                            {menu &&
                                <li>
                                    <h4 className="clamp-h4 font-bold">Kategoriler</h4>
                                </li>
                            }
                            {list.map((e, k) => (
                                <li key={k}>
                                    <Link
                                        to={e.path}
                                        className="clamp-p
                                    text-black duration-300 transition whitespace-nowrap
                                    hover:text-(--primary)
                                "
                                    >
                                        {e.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div ref={burger} className="xl:hidden flex flex-col h-[50px] itemss-center justify-center cursor-pointer transition-all duration-300" style={{ gap: ".5rem" }} onClick={() => handleMenu()}>
                            <span ref={span1} className="block w-[15px] h-[1px] bg-black transition-all duration-300" />
                            <span ref={span2} className="block w-[35px] h-[1px] bg-black transition-all duration-300" />
                            <span ref={span3} className="block w-[20px] h-[1px] bg-black self-end transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
