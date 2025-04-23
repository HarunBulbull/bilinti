import { Link } from "react-router-dom"
function FourOFour() {


  return (
    <div className="flex flex-col w-full justify-center items-center py-8 min-h-[80vh]">
      <h3 className="clamp-h3">404</h3>
      <p className="clamp-p">Aradığınız sayfayı bulamadık.</p>
      <Link to='/' className="text-blue-700 tansition duration-300 hover:text-blue-400">Ana sayfaya dön.</Link>
    </div>
  )
}

export default FourOFour