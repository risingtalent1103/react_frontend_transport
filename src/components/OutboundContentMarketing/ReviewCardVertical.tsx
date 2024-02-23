import star from "/icons/star.svg";
import whitestar from "/icons/whitestar.svg";

type props = {
    itemId:string;
    item: any;
    className?:string;
}

const ReviewCardVertical = ({itemId, item, className=""}:props) => {
    return (
        <>
            <div id={itemId} className={`flex flex-col xl:h-[47%] lg:h-[46%] sm:h-[94%] border border-[#F59E0B] rounded-xl ${className}`}>
                <div className="mt-7 mx-7 flex justify-end">
                    <div className="flex gap-x-[5px]">
                        {
                            [0, 1, 2, 3, 4].map((items, index) => {
                                return items < item.rating ? <img key={index} src={star} className="w-[19px] h-[19px] float-right"></img> : <img key={index} src={whitestar} className="w-[19px] h-[19px] float-right"></img>
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center mx-7">
                    <img src={item.avatar} className="w-[60px] h-[60px] mr-3" alt={item.name}></img>
                    <div>
                        <p className="font-semibold text-base text-[#252525]">{item.name}</p>
                        <p className="font-regular text-[14px] text-[#4B5563]">{item.career}</p>
                    </div>
                </div>
                <p className="mt-5 mx-7 mb-7 font-regular text-base text-[#4B5563]">{item.content}</p>
            </div>
        </>
    )
}

export default ReviewCardVertical;