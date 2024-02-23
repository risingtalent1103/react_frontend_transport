import Button from "../Button";

const OurPortFolioSays = () => {
    return (
        <>
            <div className="w-[85%] flex flex-col  text-center items-center justify-center gap-4 mx-auto">
                <div className="w-full flex flex-col gap-3">
                    <h1 className="font-bold text-2xl lg:text-[42px] xl:text-5xl leading-[110%] text-[#171718]">
                        Our <span className="lg:text-color1">Portfolio</span> Says It All 
                    </h1>
                </div>             
                <p className="font-regular text-sm lg:text-base leading-[120%] mb-5">
                    The Contact Center  has established itself as a reliable provider of B2B lists and qualified leads for numerous top companies in the industry. With a track record dating back to 1991, the company has consistently served esteemed clients such as Dell, Motorola, HP, SAP, and others.
                    <br></br><br></br>  
                    Over the course of three decades, The Contact Center  has expanded its client base and formed partnerships with renowned companies including Microsoft, IBM, Nvidia, Cisco, Salesforce, AWS, and Verizon, among others. These collaborations highlight the company’s ability to adapt to changing market demands and cater to the needs of diverse businesses.
                    <br></br><br></br>
                    Despite the evolving clientele, The Contact Center ’s core objective has remained unwavering. The company strives to provide its clients with exceptional data and leads, enabling them to drive growth and achieve their business objectives effectively.
                    <br></br><br></br>
                    Through their extensive experience and strong industry connections, The Contact Center  has positioned itself as a trusted partner in the B2B data and leads industry. Their portfolio of esteemed clients stands as a testament to their commitment to excellence and their dedication to helping businesses thrive.
                </p>
                <Button content="Let's Connect"/>
            </div>
        </>
    )
}
export default OurPortFolioSays;