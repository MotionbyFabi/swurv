import {  Button, Card, Grid, Image, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";



interface WorkPageProps {

}

const WorkPage: React.FC<WorkPageProps> = () => {

    return (
    <div className="bg-black h-full w-full">
        <Grid.Container className="mt-[9em] py-[16.5px] md:mt-[11em]"  gap={2} justify="center">
            {/* Card 1 */}
                <Grid xs={12} sm={4}>
                <Link href="/work/first"> 
                    <Card className="cursor-pointer overflow-hidden bg-black  group"  cover>
                        <Card.Body className="absolute h-full w-full flex justify-center items-center translate-y-[15em] group-hover:translate-y-[0em]  duration-500">
                           <Text className="text-xl text-white font-semibold">Content Edits</Text>
                            <Spacer y={0.5} />
                            <Link href="/work/edits"><Button className="bg-white text-black text-md">View Projects</Button></Link>
                        </Card.Body>
                        
                        <Image
                        src='https://i.imgur.com/heffFMu.png'
                        height={320}
                        width="100%"
                        className="group-hover:opacity-50 bg-black cursor-pointer group-hover:scale-x-105"
                        alt="Card image background"
                        />
                        
                    </Card>
                    </Link>
                </Grid>
                {/* Card 2 */}
                <Grid xs={12} sm={4}>
                <Link href="/work/first"> 
                    <Card className="cursor-pointer overflow-hidden bg-black  group" cover>
                    <Card.Body className="absolute h-full w-full flex justify-center items-center translate-y-[15em] group-hover:translate-y-[0em] duration-500">
                            <Text className="text-xl text-white font-semibold">Content Edits</Text>
                            <Spacer y={0.5} />
                            <Link href="/work/edits"><Button className="bg-white text-black text-md">View Projects</Button></Link>
                        </Card.Body>
                        
                        <Image
                        src='https://i.imgur.com/heffFMu.png'
                        height={320}
                        width="100%"
                        className="group-hover:opacity-70 cursor-pointer group-hover:scale-x-105"
                        alt="Card image background"
                        />
                        
                    </Card>
                    </Link>
                </Grid>
                {/* Card 3 */}
                <Grid xs={12} sm={4}>
                <Link href="/work/first"> 
                    <Card className="cursor-pointer overflow-hidden bg-black  group" cover>
                    <Card.Body className="absolute h-full w-full flex justify-center items-center translate-y-[15em] group-hover:translate-y-[0em] duration-500">
                            <Text className="text-xl text-white font-semibold">Content Edits</Text>
                            <Spacer y={0.5} />
                            <Link href="/work/edits"><Button className="bg-white text-black text-md">View Projects</Button></Link>
                        </Card.Body>
                        
                        <Image
                        src='https://i.imgur.com/heffFMu.png'
                        height={320}
                        width="100%"
                        className="group-hover:opacity-70 cursor-pointer group-hover:scale-x-105"
                        alt="Card image background"
                        />
                        
                    </Card>
                    </Link>
                </Grid>
                {/* Card 4 */}
                <Grid xs={12} sm={5}>
                <Link href="/work/first"> 
                    <Card className="cursor-pointer overflow-hidden bg-black  group" cover>
                    <Card.Body className="absolute h-full w-full flex justify-center items-center translate-y-[15em] group-hover:translate-y-[0em] duration-500">
                            <Text className="text-xl text-white font-semibold">Content Edits</Text>
                            <Spacer y={0.5} />
                            <Link href="/work/edits"><Button className="bg-white text-black text-md">View Projects</Button></Link>
                        </Card.Body>
                        
                        <Image
                            src='https://i.imgur.com/heffFMu.png'
                            height={380}
                            width="100%"
                            className="group-hover:opacity-70 cursor-pointer group-hover:scale-x-105"

                            alt="Card example background"
                        />
                        
                    
                    </Card>
                </Link>
                </Grid>
                {/* Card 5 */}
                <Grid xs={12} sm={7}>
                <Link href="/work/first"> 
                    <Card className="cursor-pointer overflow-hidden bg-black  group" cover>
                    <Card.Body className="absolute h-full w-full flex justify-center items-center translate-y-[15em] group-hover:translate-y-[0em] duration-500">
                            <Text className="text-xl text-white font-semibold">Content Edits</Text>
                            <Spacer y={0.5} />
                            <Link href="/work/edits"><Button className="bg-white text-black text-md">View Projects</Button></Link>
                        </Card.Body>
                        
                        <Image
                            src='https://i.imgur.com/heffFMu.png'
                            height={380}
                            width="100%"
                            className="group-hover:opacity-70 cursor-pointer group-hover:scale-x-105"

                            alt="Card example background"
                        />
                        
                    
                    </Card>
                </Link>
                </Grid>
            </Grid.Container>
    </div>
    );
}
export default WorkPage;