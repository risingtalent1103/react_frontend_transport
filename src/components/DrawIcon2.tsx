type props = {
    icon: string,
}

const DrawIcon2 = ({icon}:props) => {
    return(
        <>
            <div className="relative w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] flex justify-center items-center">
                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] rounded-[50%] bg-color1 opacity-[10%] flex items-center justify-center">

                </div>
                <div className="absolute w-[32.41px] h-[32.41px] lg:w-[40.52px] lg:h-[40.52px] xl:w-[48.62px] xl:h-[48.62px] rounded-[50%] bg-color1 opacity-[100%] flex justify-center items-center">
                    <img src={icon} className="w-[13.6px] h-[13.6px] lg:w-[17px] lg:h-[17px] xl:w-[20px] xl:h-[20px]"></img>
                </div>
            </div>
        </>
    )
}

export default DrawIcon2;