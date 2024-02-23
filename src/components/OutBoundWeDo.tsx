import Button from "./Button";

type props = {
    title: string,
    content1: string,
    content2: string,
    imgUrl: string,
    arrange?: string,
}
const OutBoundWeDo = ({ title, content1, content2, imgUrl, arrange = "" }: props) => {
    return (
        <>
            <div className={`w-full lg:flex lg:${arrange} xl:mt-20 lg:justify-between`}>
                <div className="w-full h-auto lg:w-[50%] flex items-center">
                    <div className="relative lg:w-[80%] h-[216px] lg:h-[265px] xl:h-[390px] mx-auto">
                        <img className="z-30 h-full" src={imgUrl} alt={imgUrl} />
                        <div className="-z-10 w-[95%] h-full rounded-xl top-[0] left-[3%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                </div>
                <div className="w-full h-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-2 text-center lg:text-left py-20">
                    <h3 className="font-semibold text-black text-[1.25rem] lg:text-[1.5rem] xl:text-[2rem]">
                        {title}
                    </h3>
                    <p className="font-normal text-xs lg:text-sm xl:text-base">
                        {content1}<br></br><br></br>{content2}
                    </p>
                    <Button className="" content="Lets Connect"/>
                </div>
            </div>
        </>
    )
}

export default OutBoundWeDo;