type props = {
    title: string,
    contents: string[],
    costs: number[],
    totalcost: number,
    fillcolor1: string,
    fillcolor2: string,
    bordercolor: string,
}

const CostAnalysisItem = ({ title, contents, costs, totalcost, fillcolor1, fillcolor2, bordercolor}: props) => {
    return (
        <div className={`w-full rounded-lg border border-[${bordercolor}]`}>
            <div className={`w-full h-[106px] bg-[${fillcolor1}] flex items-center rounded-t-lg border-b border-[${bordercolor}]`}>
                <h3 className="w-[80%] font-semibold text-[#171718] text-xl xl:text-2xl my-auto ml-4">
                    { title }
                </h3>
            </div>
            <div className={`w-full flex flex-col gap-2 items-center px-4 py-6 bg-[${fillcolor2}]`}>
             {
                contents.map((item, index) => {
                    return (
                        <div className="w-full grid grid-cols-9" key={index}>
                            <span className="text-gray1 col-span-7 font-regular text-xs xl:text-base leading-[120%]">
                               {item}
                            </span>
                            <span className="font-semibold col-span-2 text-color1 text-xs xl:text-base leading-[120%]">${costs[index]}</span>
                        </div>
                    )
                })
             }
                <div className="w-full flex justify-center items-center mx-4 border-2 rounded-lg border-color1 mt-4">
                    <p className="py-3 font-medium text-color1 text-base xl:text-xl leading-[120%]">
                        {totalcost}/year
                    </p>
                </div>
                <span className="font-regular text-[#4B5563] text-xs md:text-sm leading-[120%]">Total In-House Annual Investment</span>
            </div>
           
            
        </div>
    )
}
export default CostAnalysisItem;