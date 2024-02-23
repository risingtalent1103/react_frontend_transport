import DrawIcon from "../Hompage/DrawIcon";

type props = {
    title: string,
    content: string,
    imgUrl: string,
    className?: string,
} 

const LeadInformationItem = ({ title, content, imgUrl, className = "" }: props) => {
    return (
        <>
            <div className = {"w-[93%] md:w-[50%] xl:w-[30%] xl:h-[228px] xl:mx-auto flex items-start rounded-lg bg-white " + className}>
                <div className="relative w-full h-full">
                    <div className="w-full h-full p-[20px] text-left">
                        <div className="w-full h-full rounded-xl flex flex-col gap-2">
                            <h1 className="w-[90%] font-semibold md:text-2xl text-base text-[#171718] leading-loose">{title}</h1>
                            <p className="w-[90%] font-regular xl:text-base md:text-[14px] text-[12px] text-gray1 leading-auto">{content}</p>
                        </div>
                    </div>
                    <div className="absolute top-[-30px] left-[-30px]">
                        <DrawIcon icon={imgUrl} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadInformationItem;