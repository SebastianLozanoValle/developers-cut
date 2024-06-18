import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-94px)] w-screen bg-[#f4f4f4]'>
      <span className="already-loaded"></span>
      <div>
        <h2 className='font-extrabold text-3xl'>No encontrado - 404</h2>
        <p>No se ha encontrado el recurso solicitado</p>
        <Link className='text-[#6C00E6]' href="/">Vuelve al Inicio</Link>
      </div>
    </div>
  )
}