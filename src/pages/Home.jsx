import Column from "../components/Home/Column/Column"
import Hero from "../components/Home/Hero/Hero"
import Likeds from "../components/Home/Likeds/Likeds"

function Home() {


  return (
    <>
        <Hero/>
        <div className="flex justify-center items-center w-full pt-4 pb-8">
            <div className="container">
                <div className="grid lg:grid-cols-[3fr_1fr] grid-cols-1 gap-8 items-start">
                    <Likeds/>
                    <Column/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home