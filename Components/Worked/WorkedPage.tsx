import Image from "next/image";
import Link from "next/link";
import AnimatedPage from "../Animation";
import pfp1 from "../assets/pfps/pfp1.jpg"
import { Client } from "@notionhq/client"


interface WorkedProps {

}
const WorkedPage: React.FC<WorkedProps> = ({}) => {
    const notion = new Client({ auth: process.env.NOTION_KEY })

    const databaseId = process.env.NOTION_DATABASE_ID

    return (
        <AnimatedPage>
            <div className="flex justify-center  w-full mt-[8em] md:mt-[11em]">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center place-items-center xs:grid-cols-1 sm:px-10 lg:px-0 lg:grid-rows-4  md:grid-rows-3 sm:grid-rows-2 xs:grid-rows-1 w-full max-w-[1000px] mt-[2em] gap-y-[6em] gap-x-[8em]">
                    <Link href="">
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </Link>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    <a>
                        <div className="w-[170px] h-[170px] text-center">
                            <Image src={pfp1} className=" rounded-full" layout="responsive"></Image>
                            <h2 className="pt-4 text-white font-medium text-xl">Hey</h2>
                        </div>
                    </a>
                    
                    
                </div>
            </div>
        </AnimatedPage>
    );
}
export default WorkedPage;
