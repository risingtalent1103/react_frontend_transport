import CostAnalysisItem from "./CostAnalysisItem";
import { CostAnalysisData } from "@/stack/stack";

const CostAnalysis = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="w-full md:w-[90%] xl:w-[80%] text-center">
              <h3 className="w-full font-bold text-2xl lg:text-4xl xl:text-5xl leading-[120%]">
                <span className="text-color1">Cost Analysis:</span> Outsource, or keep Lead Generation In-House?</h3>  
            </div>
            <div className="w-full md:w-[90%] xl:w-[70%] text-center">
                <p className="font-regular text-xs md:text-base leading-[120%]">
                    Compare you all-inclusive fully Loaded annual investment to outsource Lead generation of only $63,000 $85,000 a year to the below real fully loaded costs of your in-house Telemarketing or Inside Sales support agents (not taking into account your cost associated with Attrition).
                </p>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-0 gap-8 ">
            {
                CostAnalysisData.map((item, index) => {
                    return (
                        <CostAnalysisItem 
                            key={index}
                            title={item.title}
                            contents={item.contents}
                            costs={item.costs}
                            totalcost={item.totalcost}
                            fillcolor1={item.fillcolor1}
                            fillcolor2={item.fillcolor2}
                            bordercolor={item.bordercolor}
                        />    
                    )
                })
            }
            </div>
        </div>
    )
}
export default CostAnalysis; 