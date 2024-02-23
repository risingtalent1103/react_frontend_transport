type props = {
    idNum:number,
    title: string,
    content: string,
    details: string[],
    imgUrl: string,
    arrange?: string,
}

const HowWedo = ({ idNum, title, content, details, imgUrl, arrange = "" }: props) => {

    return (
        <>
            <div className={`w-full lg:flex ${arrange} lg:mt-20 sm:mt-14 lg:justify-between`}>
                <div className="w-full h-auto lg:w-[48%] flex items-center">
                    <div className="relative lg:w-[80%] h-[216px] lg:h-[265px] xl:h-[390px] mx-auto">
                        <img className="z-30 h-full" src={imgUrl} alt={imgUrl} />
                        <div className="-z-10 w-[95%] h-full rounded-xl top-[0] left-[3%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                </div>
                <div className="w-full h-full lg:w-[48%] flex flex-col justify-center gap-6 text-center lg:text-left py-20">
                    <h3 className="font-semibold text-black text-[1.25rem] lg:text-[1.5rem] xl:text-[2rem]">
                        {title}
                    </h3>
                    <p className="font-normal text-xs lg:text-sm xl:text-base lg:w-[460px] xl:w-[555px]">
                        {content}
                    </p>
                    <div>
                       {
                            idNum === 0 && <div className="flex xl:flex-row flex-col-reverse xl:gap-7 gap-3 text-xs xl:text-sm">
                                        <div className="flex flex-col gap-3 items-center lg:items-start">
                                            {details.map((item, index) => {
                                                if(index < details.length / 2) return <div className="flex items-center cursor-pointer" key={index}>
                                                    <p className="underline mr-2">{item}</p>
                                                    <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                                </div>
                                            })}
                                        </div>
                                        <div className="flex flex-col gap-3 items-center lg:items-start">
                                            {details.map((item, index) => {
                                                if(details.length / 2 <= index)return <div className="flex items-center cursor-pointer" key={index}>
                                                    <p className="underline mr-2">{item}</p>
                                                    <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                                </div>
                                            })}
                                        </div>
                                </div>
                        }
                        {
                            idNum === 1 && <div className="flex flex-col gap-3">
                                        <div className="flex flex-col-reverse items-center lg:flex-row-reverse xl:flex-row xl:gap-[85px] lg:gap-[26px] gap-3 text-xs xl:text-sm">
                                            <div className="flex flex-col gap-3 items-center lg:items-start">
                                                {
                                                    details.map((item, index) => {
                                                        if(index < 3) return <div className="flex items-center cursor-pointer" key={index}>
                                                            <p className="underline mr-2">{item}</p>
                                                            <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                            <div className="flex flex-col gap-3 items-center lg:items-start">
                                                {details.map((item, index) => {
                                                    if(3 < index)return <div className="flex items-center cursor-pointer" key={index}>
                                                        <p className="underline mr-2">{item}</p>
                                                        <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start text-xs xl:text-sm">
                                            <p className="underline mr-2">{details[3]}</p>
                                            <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                        </div>
                                </div>
                        }
                        {
                            idNum === 2 && <div className="lg:flex lg:flex-row xl:gap-20 lg:gap-16 text-xs xl:text-sm hidden">
                                <div className="flex flex-col gap-3 items-center lg:items-start">
                                    {details.map((item, index) => {
                                        if(index < 7) return <div className="flex items-center cursor-pointer" key={index}>
                                            <p className="underline mr-2">{item}</p>
                                            <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                        </div>
                                    })}
                                </div>
                                <div className="flex flex-col gap-3 items-center lg:items-start">
                                    {details.map((item, index) => {
                                        if(index < 14 && index > 6)return <div className="flex items-center cursor-pointer" key={index}>
                                            <p className="underline mr-2">{item}</p>
                                            <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                        </div>
                                    })}
                                </div>
                                <div className="flex flex-col gap-3 items-center lg:items-start">
                                    {details.map((item, index) => {
                                        if(14 < index)return <div className="flex items-center cursor-pointer" key={index}>
                                            <p className="underline mr-2">{item}</p>
                                            <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                        </div>
                                    })}
                                </div>
                            </div>
                        }
                        {
                            idNum === 2 && <div className="flex flex-row md:justify-center xl:gap-7 gap-16 text-xs xl:text-sm lg:hidden">
                                <div className="flex flex-col gap-3 items-start">
                                    {details.map((item, index) => {
                                        if(index < details.length / 2) return <div className="flex items-center cursor-pointer" key={index}>
                                            <p className="underline mr-2">{item}</p>
                                            <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                        </div>
                                    })}
                                </div>
                                <div className="flex flex-col gap-3 items-start">
                                    {details.map((item, index) => {
                                        if(details.length / 2 <= index)return <div className="flex items-center cursor-pointer" key={index}>
                                            <p className="underline mr-2">{item}</p>
                                            <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                        </div>
                                    })}
                                </div>
                            </div>
                        }
                        {
                            idNum === 3 && <div className="flex flex-row justify-center lg:justify-start xl:gap-7 gap-3 text-xs xl:text-sm">
                                    <div className="lg:flex lg:flex-col gap-3 items-center lg:items-start hidden">
                                        {details.map((item, index) => {
                                            if(index % 2 === 0) return <div className="flex items-center cursor-pointer" key={index}>
                                                <p className="underline mr-2">{item}</p>
                                                <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                            </div>
                                        })}
                                    </div>
                                    <div className="lg:flex lg:flex-col gap-3 items-center lg:items-start hidden">
                                        {details.map((item, index) => {
                                            if(index % 2 === 1)return <div className="flex items-center cursor-pointer" key={index}>
                                                <p className="underline mr-2">{item}</p>
                                                <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                            </div>
                                        })}
                                    </div>
                                    <div className="flex flex-col lg:hidden gap-3 items-center lg:items-start">
                                        {details.map((item, index) => {
                                            return <div className="flex items-center cursor-pointer" key={index}>
                                                <p className="underline mr-2">{item}</p>
                                                <img src="/icons/rightarrow.svg" alt="rightarrow" />
                                            </div>
                                        })}
                                    </div>
                            </div>
                        }
                    </div>
                </div>
                

            </div>
        </>
    )
}
export default HowWedo;