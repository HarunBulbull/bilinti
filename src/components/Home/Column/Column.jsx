
import { Link } from "react-router-dom"

function Column() {


    return (
        <div className="flex flex-col gap-4 w-full lg:items-end items-start lg:sticky top-24 lg:order-2 order-0">
            <h4 className="clamp-h4 font-black">Günün Yazısı</h4>
            <span className="block lg:w-50 md:w-100 w-full h-[2px] bg-linear-to-r from-(--secondary) to-(--primary)" />
            <div className="bg-white w-full shadow-md flex flex-col rounded-md hover:shadow-lg transition duration-300 p-4">
                <b className="clamp-p">Harun Bülbül</b>
                <p className="clamp-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue justo vel velit consequat ultricies at quis diam. Aliquam in consectetur tortor. Cras magna nulla, vulputate in sapien quis, maximus convallis risus. Nulla dapibus elit metus, accumsan blandit ex condimentum a. Sed tempus, nibh ac blandit consectetur, ante sapien venenatis ante, vitae auctor eros enim ut ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse semper lacus non metus pharetra, at mollis mauris posuere.</p>
            </div>
            <Link
                to='/'
                className="
                    bg-white shadow-md lg:w-full lg:p-4 py-4 px-12 text-center font-semibold clamp-p rounded-md transition duration-300
                    hover:bg-(--secondary) hover:text-white
                "
            >
                Tüm Köşe Yazıları
            </Link>
        </div>
    )
}

export default Column