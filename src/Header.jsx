import Second from "../src/image/second.png";
import third from "../src/image/third.png";
import fourth from "../src/image/fourth.png";
const Header = () =>{
    return (
        <>
          <div className="home">
<div className="container d-flex justify-content-between text-white">
    <div className="mt-4">
        <h2 className="fw-bold font">MNTN</h2>
    </div>
    <div className="mt-4">
        <span>Equipment</span>
        <span className="mx-5">About Us</span>
        <span>Blog</span>
    </div>
    <div className="mt-4">
        <span>Acount</span>
    </div>

</div>
<div className="container d-flex justify-content-between align-items-center sec">
    <div>
<span className="text-white">Follow us</span>
    </div>
  <div>
  <span className="clr text-uppercase">A H i k i n g  g u i d e</span>
    <h1 className="text-white my-2 font">Be prepared for the <br/> Mountains and beyond!</h1>
    <span className="text-white">Scroll down</span>
  </div>
  <div>
<span className="text-white">Follow us</span>
    </div>
</div>
<div className="main">
<div className="container d-flex justify-content-between tope text-white align-items-center">
 <div className="pb-5">
        <span className="clr text-uppercase">G E t S t a r t e d</span>
        <h1 className="font">What level of  hiker <br />
         are you?</h1>
         <p className="my-4">Determining what level of hiker you are can be an important tool when <br />
          planning future hikes. This hiking level guide will help you plan hikes <br />
           according to different hike ratings set by various websites like All Trails and <br />
            Modern Hiker. What type of hiker are you – novice, moderate, advanced <br />
             moderate, expert, or expert backpacker? </p>
             <span className="clr fw-bold">read more</span>
    </div>
    <div className="">
<img width={400} src={Second} alt="" />
</div>
</div>



<div className="container d-flex justify-content-between tope text-white align-items-center sec">

<div className="">
<img width={400} src={third} alt="" />
</div>

 <div className="pb-5">
        <span className="clr text-uppercase">H i k i n g E s s e n t i a l s</span>
        <h1 className="font">Picking the right <br />
         Hiking Gear!</h1>
         <p className="my-4">Determining what level of hiker you are can be an important tool when <br />
          planning future hikes. This hiking level guide will help you plan hikes <br />
           according to different hike ratings set by various websites like All Trails and <br />
            Modern Hiker. What type of hiker are you – novice, moderate, advanced <br />
             moderate, expert, or expert backpacker? </p>
             <span className="clr fw-bold">read more</span>
    </div>
</div>

<div className="container sec d-flex justify-content-between tope text-white align-items-center">
 <div className="">
        <span className="clr text-uppercase">G E t S t a r t e d</span>
        <h1 className="font">Understand Your <br />
         Map & Timing</h1>
         <p className="my-4">Determining what level of hiker you are can be an important tool when <br />
          planning future hikes. This hiking level guide will help you plan hikes <br />
           according to different hike ratings set by various websites like All Trails and <br />
            Modern Hiker. What type of hiker are you – novice, moderate, advanced <br />
             moderate, expert, or expert backpacker? </p>
             <span className="clr fw-bold">read more</span>
    </div>
    <div className="">
<img width={400} src={fourth} alt="" />
</div>
</div>

<div className="container justify-content-between sec  text-white d-flex">
    <div className="text-white">
        <h3 className="font">MNTN</h3>
        <div className="mt-4">
        <span className="">Get out there & discover your next <br />
        slope, mountain & destination!</span>
        </div>
         <p className="mt-5 text-dark-emphasis pt-5">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
    </div>
    <div className="mt-2">
      <span className="clr fw-bold">More on The Blog</span>
       <div className="mt-4">
       <p>About MNTN</p>
        <p>Contributors & Writers</p>
        <p>Write For Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
       </div>
    </div>
    <div> 
    <span className="clr fw-bold">More on MNTN</span>
      <div className="mt-4">
        <p>The Team</p>
        <p>Jobs</p>
        <p>Press</p>
      </div>
      
    </div>
</div>






</div>
          </div>
          


        </>
    );
} ;

export default Header;