import Button from "../Button";

const CompaniesLeavingMoney = () => {
    return (
        <>
            <div className="w-[85%] flex flex-col  text-center items-center justify-center gap-4 mx-auto">
                <div className="w-full flex flex-col gap-3">
                    <span className="text-gary1 font-semibold text-xs lg:text-xl xl:text-2xl">Actionable lead</span>
                    <h1 className="font-bold text-2xl lg:text-[42px] xl:text-5xl leading-[110%]">
                        <span className="text-color1">Why</span> are so Many Companies Leaving Money on the Table?
                    </h1>
                </div>             
                <p className="font-regular text-sm lg:text-base leading-[120%]">
                    You heard it before, it cost ten times less to secure a sale with an existing client compare to a new client. So why so many companies neglect to <a href="https://www.bluevalleymarketing.com/outsource-call-center-cost/" className="text-color1 underline">produce high profit margin sales</a> from existing and past clients?
                    <br></br><br></br>
                    Maybe the marketing department is focused on targeting new audience, maybe the sales team neglect to service existing clients, or fear asking past clients to come back. Whatever the reason may be, you should set aside some of your sales and marketing resources forcing on easy sales from new and past clients.
                    <br></br><br></br>
                    Companies come to rely so heavily on passive Digital marketing and <a href="https://www.bluevalleymarketing.com/b2b-telemarketing/" className="text-color1 underline">sales engagements</a>, that it is too easy to forget that most people still prefer to do business with people. People love to connect with people, not machines.
                    <br></br><br></br>
                    Don’t make the same mistake, pick up the phone and call your clients, make them feel you care about them and in the process find out what else you can sell them. Reach out to past clients to find out why they left you and what it will take to bring them back.
                </p>
                <Button content="Let's Connect"/>
               
            </div>
        </>
    )
}
export default CompaniesLeavingMoney;