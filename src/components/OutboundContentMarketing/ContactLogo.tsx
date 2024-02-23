import { ContactLogoIcons } from "@/stack/stack";

const ContactLogo = () => {
    return (
        <>
            <div className="w-full py-[50px]">
                <div className="carousel carousel-center rounded-box w-full lg:h-[50px] sm:h-[38px]">
                    {
                        ContactLogoIcons.map((item, index) => {
                            return index === 0 ? <div key={index} className={`carousel-item`}>
                                <img src={item.iconUrl} className=" xl:scale-[0.8] lg:scale-[0.7] scale-[0.6]"></img>
                            </div> : <div key={index} className={`carousel-item 2xl:pl-10 xl:pl-8`}>
                                <img src={item.iconUrl} className=" xl:scale-[0.8] lg:scale-[0.7] scale-[0.6]"></img>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ContactLogo;