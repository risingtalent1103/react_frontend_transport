type props = {
    icon: string,
}

const DrawIcon = ({icon}:props) => {
    return(
        <>
            <div className="relative w-[60px] h-[60px] flex justify-center items-center">
                <div className="w-[60px] h-[60px] rounded-[50%] bg-color1 opacity-[10%] flex items-center justify-center">

                </div>
                <div className="absolute w-[48.92px] h-[48.92px] rounded-[50%] bg-color1 opacity-[100%] flex justify-center items-center">
                    <img src={icon} className="w-[20px] h-[20px]"></img>
                </div>
            </div>
        </>
    )
}

export default DrawIcon;