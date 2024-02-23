type props = {
    icon:string,
    content:string,
    className?:string,
}

const IconAndText = ({icon, content, className}:props) => {
    return(
        <>
            <div className={`flex items-center gap-3 ${className}`}>
                <img src={icon} className="w-5 h-5 ml-5"></img>
                <p className="font-normal text-base text-gray1">{content}</p>
            </div>
        </>
    )
}

export default IconAndText;