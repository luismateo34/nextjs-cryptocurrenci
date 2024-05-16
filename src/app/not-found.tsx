import Link from 'next/link';
import error from "@/images/404.jpg"

export default function NotFound() {
  return (
    <div className="w-scr h-[calc(100vh-3rem)]flex flex-col justify-around items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-orange-500 mb-2" href="/">Return Home</Link>
      <section className='w-3/6 h-3/6 flex flex-col justify-center items-center '>
	<img src={error.src} alt="error 404" className='object-cover w-full h-full' />
      </section>
    </div>
  )
}
