
const SmallSendMail = () => {
    return (
        <div className="w-full bg-[#F5F5F5] px-4 xl:px-8 pt-[50px] pb-[40px] flex flex-col text-center gap-6 lg:gap-2">
            <h3 className="font-semibold text-xl xl:text-2xl leading-[110%] text-[#171718]">
                Lets Grow Your Audience!
            </h3>
            <p className="font-regular text-xs md:text-base leading-[120%]">
                The Contact Center  brings real value to your organization bt delivering the set of inbound and outbound contact center services. Fill the form below to get started
            </p>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 items-start">
                    <label className="font-regular text-sm md:text-base leading-[110%] text-gray1">
                        Full Name*
                    </label>
                    <input 
                        type="input" 
                        className="w-full h-[50px] px-4 border border-[#E5E7EB] rounded-lg"
                        placeholder="Enter name"
                    />
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <label className="font-regular text-sm md:text-base leading-[110%] text-gray1">
                        Bussiness Email*
                    </label>
                    <input 
                        type="input" 
                        className="w-full h-[50px] px-4 border border-[#E5E7EB] rounded-lg"
                        placeholder="Enter email"
                    />
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <label className="font-regular text-sm md:text-base leading-[110%] text-gray1">
                        Message
                    </label>
                    <textarea 
                        id="message"
                        name="message"
                        rows={3}
                        cols={50}
                        className="w-full px-4 py-4 border border-[#E5E7EB] rounded-lg"
                        placeholder="Type here..."
                    />
                </div>
            </div>
            <button className="bg-color1 px-2 py-4 mt-2 rounded-lg w-full font-medium text-base text-white hover:text-black leading-[110%]">
                Send
            </button>
        </div>
    )
}
export default SmallSendMail;