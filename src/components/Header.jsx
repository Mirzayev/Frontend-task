import {NavLink} from "react-router-dom";


export default  function Header(){

    return(
        <div className='bg-[#bde0fe]'>
            <div className='flex items-center max-w-[1440px] m-auto gap-12 py-4 px-4'>
                <h2 className='text-xl font-semibold'>Code Uz</h2>
                <div className='flex gap-2'>
                    <NavLink to='/' className='border-r-2 border-orange-400 pr-3 cursor-pointer'>Home</NavLink>
                    <NavLink to='/posts/:id' className='cursor-pointer'>Comment</NavLink>
                </div>
            </div>
        </div>
    )
  }