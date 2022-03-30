import { useState } from 'react'
import Link from 'next/link';
import Image from "next/image"
import logoanim from '../assets/logoanimsmall.gif'
import twitter from '../assets/twitter.png'
import { Transition } from '@headlessui/react';
//here you always import in the order it will be used, react first, then next, then the images
//if you have another package, same story


interface NavbarProps {

}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  //here it's how you make a toggle
  //onClick={()=>setIsNav(!isNav)}
  //always use that way with the ()=>, so the function runs only once 
  return (
      
      <div className='bg-black '>
			<nav className=" shadow-sm fixed w-full  bg-black z-[9999]">
				<div className="w-full">
					<div className="flex items-center h-[145px] w-full mt-0 md:mt-9">
						<div className="flex items-center flex-col pb-6 mx-20 w-full ">
							<div className="top-0 left-0 pl-10 pt-8 absolute flex-shrink-0 md:relative  md:top-auto md:left-auto md:flex md:justify-center md:items-center">
								<Image className="pt-5" width={80} height={80} src={logoanim} alt="logo" />
							</div>
							<div className="hidden  pt-5 md:block">
								<div className="ml-10 pb-2 flex space-x-4">
                  <Link href="/">
										<p className="cursor-pointer  text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">Home</p>
									</Link>
									<Link href="/about">
										<p className="cursor-pointer  text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">About</p>
									</Link>
									<Link href="/work">
										<p className="cursor-pointer  text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">My Work</p>
									</Link>
                  <Link href="/worked">
										<p className="cursor-pointer  text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">My Clients</p>
									</Link>
                  <Link href="/contact">
										<p className="cursor-pointer  text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">Contact</p>
									</Link>
                  <a className='h-6 mt-[6px]' target="_blank" href="https://twitter.com/swurvcreates"><Image width={21} height={21} className=" ml-5 leading-5" src={twitter}  alt="logo" /></a>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className=" inline-flex items-center justify-center p-2 rounded-md    "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								
								{!isOpen ? (
									<svg width="40" height="40" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="59" height="59" rx="6" fill="#262626"/>
                  <path d="M16 39H43" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 29.5835H42.8333" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 20L43 20" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
								) : (
									<svg width="40" height="40" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="59" height="59" rx="6" fill="#262626"/>
                  <path d="M20 19L40 39" stroke="#F3F3F3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 39L40 19" stroke="#F3F3F3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>


								)}
							</button>
						</div>
					</div>
				</div>

        <Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
                
								className="bg-black px-2 pt-2 pb-3 space-y-2 sm:px-3"
							>
							  <Link href="/">
										<p className="cursor-pointer text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">Home</p>
									</Link>
                  <Link href="/about">
										<p className="cursor-pointer text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">About</p>
									</Link>
                  <Link href="/work">
										<p className="cursor-pointer text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">My Work</p>
									</Link>
                  <Link href="/worked">
										<p className="cursor-pointer text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">My Clients</p>
									</Link>
                  <Link href="/contact">
										<p className="cursor-pointer text-white hover:text-gray-700 duration-500 px-3 py-2 rounded-md text-sm font-medium">Contact</p>
									</Link>
									<br />
                  <a className=" ml-3 pt-[5em] leading-5" target="_blank" href="https://twitter.com/swurvcreates"><Image width={21} height={21}  src={twitter} alt="logo" /></a>

							</div>
						</div>
					)}
          </Transition>
			
			</nav>
		</div>
    
    
  )
}

export default Navbar;
