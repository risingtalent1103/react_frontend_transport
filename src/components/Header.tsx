import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import menudropicon from "/icons/menudropicon.svg"
import menutelephone from "/icons/menutelephone.svg"
import droptoggle from "/icons/droptoggle.svg"
import Button from "./Button";

function Header() {

    const headerRef = useRef<HTMLDivElement>(null);

    const handleVisibleModal = () => {
        const dialog:HTMLDialogElement | null = document.getElementById("my_dropmodal") as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    }

    const handleScroll = () => {
        let scrollTop: number = window.scrollY;
        let divScrollTop: number = 160;
        if (headerRef.current) {
            if (divScrollTop && scrollTop < divScrollTop) {
                headerRef.current.style.position = "absolute";
                headerRef.current.style.top = "160px";
            } else {
                headerRef.current.style.position = "fixed";
                headerRef.current.style.top = "0";
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className="container">
                <header>
                    <div className="mt-[30px] md:mt-0  w-full md:h-[120px] md:flex flex-col md:flex-row justify-between items-center ">
                        <div className="xl:w-[60%] flex justify-between items-center">
                        <Link to="/">
                            <img 
                                className="w-[80px] h-[50px] xl:w-[160px] xl:h-[80px] object-contain"
                                src="/icons/logo.svg" alt="logo"/>
                        </Link>
                        <img className="block md:hidden" src={droptoggle} alt={droptoggle} onClick={() => {handleVisibleModal()}}/>
                        <div className="hidden xl:flex justify-between items-center gap-[50px] text-black font-regular text-base">
                                <div className="dropdown dropdown-bottom ">
                                    <div>
                                        <button className="inline-flex w-full justify-center items-center gap-x-1.5 py-2 "
                                            tabIndex={0} role="button"
                                        >
                                            Outbound
                                            <img src={menudropicon} alt="menudropicon" />
                                        </button>
                                    </div>
                                    <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-gray1">
                                        <li><Link to="/outBoundMarketing">Marketing</Link></li>
                                        <li><Link to="/outboundContentMarketing">Marketing Distribution</Link></li>
                                        <li><Link to="/outboundLeadGeneration">Lead Generation</Link></li>
                                        <li><Link to="/customerdevelopmentWinback">Customer</Link></li>
                                        <li><Link to="/btbListForBussinessGrowth">B2B List</Link></li>
                                        <li><Link to="/outboundSurvey">Market Research</Link></li>
                                        <li><Link to="/outBoundPoliticalCampaign">Political Campaign</Link></li>
                                        <li><Link to="/outboundPublisher">Publisher Audiance</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-bottom ">
                                    <div>
                                        <button className="inline-flex w-full justify-center items-center gap-x-1.5 py-2 "
                                            tabIndex={0} role="button"
                                        >
                                            Inbound
                                            <img src={menudropicon} alt="menudropicon" />
                                        </button>
                                    </div>
                                    <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-gray1">
                                        <li><Link to="/inboundMarketing">Marketing</Link></li>
                                        <li><Link to="/customerServices">Customer Services</Link></li>
                                        <li><Link to="/inboundOmnichannel">Omnichannel</Link></li>
                                    </ul>
                                </div>
                                <Link to="/industries">
                                    <div>
                                        <button className="inline-flex w-full justify-center items-center gap-x-1.5 py-2 "
                                            tabIndex={0} role="button"
                                        > Industries
                                        </button>
                                    </div>
                                </Link>
                                <div className="dropdown dropdown-bottom ">
                                    <div>
                                        <button className="inline-flex w-full justify-center items-center gap-x-1.5 py-2 "
                                            tabIndex={0} role="button"
                                        >
                                            Resources
                                            <img src={menudropicon} alt="menudropicon" />
                                        </button>
                                    </div>
                                    <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-gray1">
                                        <li><Link to="/resource1">Resource1</Link></li>
                                        <li><Link to="/resource2">Resource2</Link></li>
                                    </ul>
                                </div>
                        </div>
                        </div>
                        <div className="w-auto flex justify-between items-center gap-2 md:gap-10">
                            <div className="flex jusify-center items-center gap-2">
                                <img src={menutelephone} alt="menutelephone"/>
                                <p className="text-base font-regular leading-[110%]">+1-213- 693-1910</p>
                            </div>
                            <Button content="Get Started"/>
                            <img className="hidden md:block xl:hidden" src={droptoggle} alt={droptoggle} onClick={() => {handleVisibleModal()}}/>
                            <dialog id="my_dropmodal" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <div className="navbar bg-base-900">
                                        <div className="flex-none">
                                            <ul className="menu menu-vertical px-1 gap-6 text-base text-gray1">
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Outbound
                                                        </summary>
                                                        <ul className="p-2 bg-base-100 rounded-t-none">
                                                            <li><Link to="/outBoundMarketing">Marketing</Link></li>
                                                            <li><Link to="/outboundContentMarketing">Marketing Distribution</Link></li>
                                                            <li><Link to="/outboundLeadGeneration">Lead Generation</Link></li>
                                                            <li><Link to="/customerdevelopmentWinback">Customer</Link></li>
                                                            <li><Link to="/btbListForBussinessGrowth">B2B List</Link></li>
                                                            <li><Link to="/outboundSurvey">Market Research</Link></li>
                                                            <li><Link to="/outBoundPoliticalCampaign">Political Campaign</Link></li>
                                                            <li><Link to="/outboundPublisher">Publisher Audiance</Link></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Inbound
                                                        </summary>
                                                        <ul className="p-2 bg-base-100 rounded-t-none">
                                                            <li><Link to="/inboundMarketing">Marketing</Link></li>
                                                            <li><Link to="/customerServices">Customer Services</Link></li>
                                                            <li><Link to="/inboundOmnichannel">Omnichannel</Link></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <Link to="/industries">Industries</Link>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Resources
                                                        </summary>
                                                        <ul className="p-2 bg-base-100 rounded-t-none">
                                                            <li><Link to="/resource1">Resource1</Link></li>
                                                            <li><Link to="/resource2">Resource2</Link></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;