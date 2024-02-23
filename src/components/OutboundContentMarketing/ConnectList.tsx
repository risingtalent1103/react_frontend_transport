const list = [
    {
        image:"/images/supplement.jpg",
        title:"Content Marketing is a waste without a proved distribution strategy.",
        content1:"Current marketing strategies commonly include the generation of content in the form of blogs, white papers, videos, images, infographics, to name a few.",
        content2:"The distribution of this content is conducted through carefully chosen channels. The form of distribution for content is a critical part of any marketing plan. Creating high-quality content without securing that it reaches the target audience will yield poor results."
    },
    {
        image:"/images/contactchannel.jpg",
        title:"We help our clients reach the right contact with each and every channel.",
        content1:"Selecting the best distribution channels plays a crucial role in successful execution of a marketing plan. One must understand not only who their best audience is, but also how to reach it or run the risk of a failing marketing plan.",
        content2:"The Contact Center  helps our clients reach the right contact with every campaign. Our services have greatly impacted successful content distribution. Our professional calling campaigns utilize the latest software and hardware that help keep costs low and effectiveness high."
    }
]

const ConnectList = () => {
    return(
        <>
            <div className="flex flex-col">
                {
                    list.map((item, index) => {
                        return <div className={ `flex gap-4 ${index % 2 ? "flex-row-reverse" : "flex-row"}`}>
                            <img src={item.image} className="basis-1/2"></img>
                            <div className="basis-1/2 flex flex-col justify-center">
                                <div className="font-semibold text-[32px] text-[#171718] leading-tight">{item.title}</div>
                                <div className="font-normal text-base text-gray1">{item.content1}</div><br/>
                                <div className="font-normal text-base text-gray1">{item.content2}</div>
                                <button className="mt-5 rounded-md font-medium text-base text-[white] bg-color1 w-[150px] h-[50px]">Let's Connect</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default ConnectList;