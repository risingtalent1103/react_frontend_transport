import { useState } from "react";

const answerCardList = [
    {
        title:"Are your B2B lists authentic?",
        content:"Certainly! Our B2B lists are compiled from over 500 sources using reliable sources of business data, such as business directories, opt-in email addresses, business journals, and events, among many others. We ensure that all (100%) the contact details and data points we provide are thoroughly human verified, guaranteeing their accuracy and authenticity."
    },
    {
        title:"Are your lists up to date?",
        content:"Certainly! Our B2B lists are compiled from over 500 sources using reliable sources of business data, such as business directories, opt-in email addresses, business journals, and events, among many others. We ensure that all (100%) the contact details and data points we provide are thoroughly human verified, guaranteeing their accuracy and authenticity."
    },
    {
        title:"Do you have lists with e-mails for every industry?",
        content:"Certainly! Our B2B lists are compiled from over 500 sources using reliable sources of business data, such as business directories, opt-in email addresses, business journals, and events, among many others. We ensure that all (100%) the contact details and data points we provide are thoroughly human verified, guaranteeing their accuracy and authenticity."
    },
    {
        title:"What are the designations of the contacts you provide?",
        content:"Certainly! Our B2B lists are compiled from over 500 sources using reliable sources of business data, such as business directories, opt-in email addresses, business journals, and events, among many others. We ensure that all (100%) the contact details and data points we provide are thoroughly human verified, guaranteeing their accuracy and authenticity."
    }
]

const QuestionsAnswered = () => {

    const [showBtnState, setShowBtnState] = useState(0);

    const handleBtnState = (stateNum:number) => {
        setShowBtnState(stateNum);
    }

    return (
        <>
            <div className="w-full flex flex-col  text-center items-center justify-center gap-4">
                <div className="w-full flex flex-col gap-3 lg:mb-5">
                    <h1 className="font-bold text-2xl lg:text-[32px] xl:text-5xl leading-[110%] text-[#171718]">
                        All Your Questions <span className="lg:text-color1">Answered</span>
                    </h1>
                </div>
                <div className="flex flex-col">
                    {
                        answerCardList.map((item, index) => {
                            return <div key={index} className="border-b">
                                <div onClick={() => handleBtnState(index)} className="flex justify-between cursor-pointer">
                                    <p className="font-medium text-base text-gray1 text-start py-4 ">{item.title}</p>
                                    <img src={showBtnState === index ? `/icons/upvector.svg`:`/icons/downvector.svg`}></img>
                                </div>
                                <p className="font-normal text-base text-gray1 text-start pb-4" style={{display:showBtnState === index ? "block" : "none"}}>{item.content}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default QuestionsAnswered;