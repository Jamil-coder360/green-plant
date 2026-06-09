import React from 'react'
import ctabg from "../../assets/ctabg.png";
import Button from '../global/Button';

const bgImage = {
  backgroundImage: `url(${ctabg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Cta = () => {
  return (
    <section style={bgImage}>
        <div className="container mx-auto py-29.5 flex items-center justify-between">
            <h2 className="text-white text-[32px] font-lato font-bold leading-[150%] max-w-[570px]">
                Enter your email address for our mailing Promo or other interesting things
            </h2>
            <form action="" className="flex items-center gap-4">
                <input type="email" value="" placeholder="Enter your email"  className="border boeder-white w-[475px] py-3 pl-6 rounded-md"/>

                <Button  className="!bg-[#285A43] text-white">
                    submit
                </Button>
            </form>
        </div>
    </section>
  )
}

export default Cta