type props = {
    imgUrl: string,
    title: string,
    content: string,
    className?: string,
}

const NeedMakeItem = ({ imgUrl, title, content, className="" }: props) => {
    return (
        <div className={"rounded-lg border border-[#F3F4F6] px-4 py-8 flex flex-col gap-4 text-center xl:text-center items-center xl:items-center " + className}>
            <img 
                className="w-[48px] h-[48px]" 
                src={imgUrl}
                alt="Need to make icon"
            />
            <h4 className="font-semibold text-black1 xl:text-xl">
                {title}
            </h4>
            <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                {content}
            </p>
        </div>
    )
} 
export default NeedMakeItem;