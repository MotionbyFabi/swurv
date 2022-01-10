import react from "react";
import './about.css';

const About = () => {
    return (
        <div>
        <div class="header">
            <h1>ABOUT SWURV </h1>
            <p>I currently live in Toronto, Canada. I am a Visual Artist who specializes in Motion Design, 3D Animation as well as 
            <br/>Post-Production. I am approaching 3 Years of experience in this field and I can tackle any project given to me!</p>
        </div>


            <div class="wrapper">
                <div id="left" class="box center">
                    <p class="quote">"​Really the best motion designer to work with. Can pretty much make everything you ask for and can adapt to your own wishes, also afterwards. Super reliable, gets everything done in time and most importantly really nice and easy to work with!"</p>
                    <p class="name">GOSSE</p>
                    <p class="name">@gossefn</p>
                </div>
                <div id="right" class="box quote-img-1"/>
            </div>  

            <div class="wrapper">
                <div id="left" class="box center">
                    <p class="quote">"Great professional service, I enjoyed working with Swurv. He proved himself to be reliable and consistent with great communication."</p>
                    <p class="name">MARSHALL</p>
                    <p class="name">@marshallbuick</p>
                </div>
                <div id="right" class="box quote-img-2"/>
            </div>  

            <div class="wrapper">
                <div id="left" class="box center" >
                    <p class="quote">"​Good quality service. Swurv offered to remake an outro for Bucke and did an amazing job with it. He worked fast and got it done with high quality."</p>
                    <p class="name">ALBO</p>
                    <p class="name">@albogravity</p>
                </div>
                <div id="right" class="box quote-img-3"/>
            </div>  

            
            <br/><br/><br/><br/>
        </div>
      
    );
  }
  
export default About;