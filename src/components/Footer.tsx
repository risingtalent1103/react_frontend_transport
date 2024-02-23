import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="w-full bg-color1">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:justify-between  text-center lg:text-left py-10 text-white gap-10 ">
                    <div className="lg:w-[35%] xl:w-[25%] flex flex-col gap-2">
                        <h3 className="font-bold text-xl mb-4">
                            The Contact Centre.
                        </h3>
                        <p className="text-sm font-regular text-white">
                            “Business is all about solving people’s problems — at a profit.”
                        </p>
                        <div className="w-[80px] lg:w-full mt-4 lg:mt-[20%] flex justify-around items-center mx-auto">
                            <img className="hidden lg:block" src="/icons/whatsapp.svg" alt="whatsapp"/>
                            <img className="block lg:hidden" src="/icons/simpleicon2.svg" alt="simple"/>
                            <img src="/icons/instogram.svg" alt="instogram"/>
                            <img className="hidden lg:block" src="/icons/simpleicon.svg" alt="simple"/>
                            <img className="hidden lg:block" src="/icons/facebook.svg" alt="facebook"/>
                        </div>
                    </div>
                    <div className="lg:w-[15%] xl:w-[15%] flex flex-col gap-1">
                        <h3 className="font-bold text-xl mb-4">
                            Services
                        </h3>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Outbound
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Inbound
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Industries
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Publisher
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Political
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Contact center AI
                        </p>
                    </div>
                    <div className="lg:w-[15%] xl:w-[10%] flex flex-col gap-1">
                        <h3 className="font-bold text-xl mb-4">
                            Agency
                        </h3>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            About
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Blog
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Ebooks
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            White Papers
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Careers
                        </p>
                        <p className="text-sm font-regular leading-[200%] text-white">
                            Contact
                        </p>
                    </div>
                    <div className="lg:w-[30%] xl:w-[30%] flex flex-col items-center lg:items-start gap-1">
                        <h3 className="font-bold text-xl mb-4">
                            Keep In Touch
                        </h3>
                        <div className="flex items-start mb-2 gap-2">
                            <img className="mt-1" src="/icons/position.svg" alt="position"/>
                            <p className="text-sm font-regular text-white">
                                200 Clarendon Street Boston Ma 02116
                            </p>
                        </div>
                        <div className="flex items-start mb-2 gap-2">
                            <img className="mt-1" src="/icons/telephone.svg" alt="telephone"/>
                            <p className="text-sm font-regular text-white underline">
                                <Link to="/telephone">+1-213- 693-1910</Link>
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <img className="mt-1.5" src="/icons/mail.svg" alt="mail"/>
                            <p className="text-sm font-regular text-white underline">
                                <Link to="/mail">info@thecallcenter.io</Link>
                            </p>
                        </div>
                        
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row justify-between text-center my-6">
                    <p className="text-base font-regular leading-[200%] text-white">
                        © 2023 The Contact Center.
                    </p>
                    <p className="text-base font-regular leading-[200%] text-white">
                        Privacy | Terms | Disclaimer | Sitemap
                    </p>
                </div>
            </div>

        </div>        
    )
}
export default Footer;