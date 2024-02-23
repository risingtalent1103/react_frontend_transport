type props = {
    imgUrl: string,
    title: string,
    className?: string,
}
const ContentMarketingItem = ({ imgUrl, title, className = "" }: props ) => {
    return (
        <>
            <div className = {"w-[60%] lg:w-[45.5%] lg:mx-auto flex items-center pl-2 xl:pl-3 rounded-lg bg-white  py-3 gap-2 " + className}>
                <img src={imgUrl} alt="icons"></img>
                <p className="font-regular text-xs lg:text-sm xl:text-base">{ title }</p>
            </div>
        </>
    )
}
export default ContentMarketingItem