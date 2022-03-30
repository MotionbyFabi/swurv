import { useEffect } from 'react'
import Image from 'next/image'
import AnimatedPage from '../Animation'
import thumb1 from "../assets/clientthumb.webp"
import thumb2 from "../assets/clientthumb1.webp"
import thumb3 from "../assets/clientthumb2.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..

//https://github.com/michalsnik/aos
//https://github.com/michalsnik/aos/issues/709

//keep the class names so when deve (the guy im working with, no deve lol? lmao) works on it he can find what the name was
//Mmmh if you just switched to tailwind you will have to change all of the classnames,, 
//You can use tailwind and keep old class names, but it's not ideal xd I know but ill just tell deve that I switched to tailwind and that he goes over the old files and finds
// the classes so he can change it thats why I dont wanna remove them yet this about page is his to do so yea

// remember to use arrow functional components, const Something = () => {
    
const AboutPage = () => {
    
    useEffect(() => {
        AOS.init()
}, [])
  
  return (
    <AnimatedPage>
        <div className='h-full w-full flex justify-center items-center flex-col -z-50  pb-10'>
                    <div className="pt-[27em] text-center text-white font-[Arial, Helvetica, sans-serif]">
                        <h1 className='font-bold text-3xl p-5'>ABOUT SWURV </h1>
                        <p className=' font-light text-xl p-5 max-w-[1000px]'>I currently live in Toronto, Canada. I am a Visual Artist who specializes in Motion Design, 3D Animation as well as 
                        Post-Production. I am approaching 3 Years of experience in this field and I can tackle any project given to me!</p>
                    </div>

                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="600" className="mt-[25vw] w-[70vw] p-0 h-full flex items-center justify-center  flex-col lg:flex-row bg-white ">
                            
                            {/* {Paragraph} */}
                            <div id="left" className="text-black flex w-full lg:w-1/2 h-full p-10 lg:py-0 lg:p-20 flex-col">
                                <p className="text-xl lg:text-lg xl:text-xl"><em>"​Really the best motion designer to work with. Can make everything you ask for and can adapt to your style, also afterwards. Super reliable, and most importantly really nice and easy to work with!"</em></p>
                                <p className="text-l pt-3 font-medium">GOSSE</p>
                                <a className='text-l pt-2' href="https://twitter.com/gossefn"><p  title='Click to go to twitter profile' className="font-medium">@gossefn</p></a>
                            </div>
                             {/* {Image} */}
                            <div className=' h-full overflow-hidden  lg:justify-end lg:block  hidden p-0 m-0 ' id="right">
                                <Image layout='fixed' className='flex items-center justify-center p-0 m-0 ' height={540} width={872} src={thumb1} />
                            </div>  
                            <div className='w-full h-full lg:hidden' id="right">
                                <Image layout='responsive' className='origin-center' src={thumb1} />
                            </div> 
                           
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="600" className="mt-[5vw] w-[70vw] p-0 h-full flex items-center justify-center  flex-col lg:flex-row bg-white">
                            {/* {Paragraph} */}
                            <div id="left" className="relative text-black flex w-full lg:w-1/2 h-full p-10 lg:py-0 lg:p-20 flex-col">
                                <p className="text-xl"><em>"Great professional service, I enjoyed working with Swurv. He proved himself to be reliable and consistent with great communication."</em></p>
                                <p className="text-l pt-3 font-medium">ALBO</p>
                                <a className='text-l pt-2' href="https://twitter.com/albogravity"><p  title='Click to go to twitter profile' className=" font-medium">@marshallbuick</p></a>
                            </div>
                             {/* {Image} */}
                             <div className=' h-full overflow-hidden  lg:justify-end lg:block  hidden p-0 m-0  ' id="right">
                                <Image layout='fixed' className='flex items-center justify-center p-0 m-0 ' height={540} width={872} src={thumb2} />
                            </div>  
                            <div className='w-full h-full lg:hidden' id="right">
                                <Image layout='responsive' className='origin-center' src={thumb2} />
                            </div> 
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="600" className="mt-[5vw] w-[70vw] p-0 h-full flex items-center justify-center  flex-col lg:flex-row bg-white ">
                            <div id="left" className="relative text-black flex w-full lg:w-1/2 h-full p-10 lg:py-0 lg:p-20 flex-col">
                                <p className="text-xl"><em>"Great professional service, I enjoyed working with Swurv. He proved himself to be reliable and consistent with great communication."</em></p>
                                <p className="text-l pt-3 font-medium">ALBO</p>
                                <a className='text-l pt-2' href="https://twitter.com/albogravity"><p  title='Click to go to twitter profile' className=" font-medium">@marshallbuick</p></a>
                            </div>
                            <div className=' h-full overflow-hidden  lg:justify-center lg:block  hidden p-0 m-0 ' id="right">
                                <Image layout='fixed' className='flex items-center justify-center p-0 m-0 ' height={540} width={872} src={thumb3} />
                            </div>  
                            <div className='w-full h-full lg:hidden' id="right">
                                <Image layout='responsive' className='origin-center' src={thumb3} />
                            </div> 
                        </div>
                        


        </div>
          
                        
                        
       </AnimatedPage>
  )
}

export default AboutPage
