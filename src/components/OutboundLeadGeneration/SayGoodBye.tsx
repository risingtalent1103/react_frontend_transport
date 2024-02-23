import Button from "../Button";

const SayGoodBye = () => {
    return(
        <>
            <div className="xl:w-[80%] w-[100%] items-center sm:hidden lg:flex lg:flex-col mt-[130px] mb-10">
                <div className="font-medium xl:text-base lg:text-sm text-xs text-[#466E79] text-center leading-loose">
                    You can cut through the noise with telemarketing.
                </div>
                <div className="font-bold xl:text-5xl lg:text-4xl text-2xl text-center xl:py-2 lg:py-4">
                    <span className="text-[#171718]">Say</span>
                    <span className="text-color1">Goodbye</span>
                    <span className="text-[#171718]">to Missed Opportunities.</span>
                </div>
                <div className="font-normal text-gray1 lg:text-base text-xs text-center">
                    Marketers strive to capture the interest of prospective clients, positioning them to enter the sales pipeline through a process called lead generation. There are a number of methods and channels lead generation companies use to identify intent and stimulate interest in potential clients. There are so many, in fact, that there is a lot of noise to contend with within today’s market.
                </div>
                <br/>
                <div className="font-normal text-gray1 lg:text-base text-xs text-center mb-10">
                    Lead generation requires business development expertise, a focus on a pre-sales process intended to exclude time wasters in order to produce actionable leads that are rigorously profiled and properly qualified.
                </div>
                <Button content="Let's Connect"/>
            </div>
        </>
    )
}

export default SayGoodBye;