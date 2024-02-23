import { FC } from "react";
import SmallSendMail from "../SmallSendMail";

const SurveyResearch: FC = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-10">
            <div className="lg:col-span-5 flex flex-col gap-4">
                <h2 className="font-bold text-2xl lg:text-[2rem] xl:text-5xl leading-[110%] text-[#171718]">
                    Surveys And Market Research
                </h2>
                <h3 className="font-semibold text-gray1 text-base lg:text-xl xl:text-2xl leading-[110%]">
                    Call Center Surveys and Market Research
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    Take the guesswork out of your marketing campaign to deliver a better return on investment and grow your business.
                    <br></br><br></br>
                    Far superior to relying on a gut instinct or anecdotal evidence, market research equips you to better understand your audience and their specific needs.
                    <br></br><br></br>
                    The Contact Center  offers market research that reaches out directly to your audience to understand their needs, opinions and wants through a personal (human to human) survey or questionnaire.
                    <br></br><br></br>
                    We select the best team to conduct the survey/research based on your needs. We follow your scripts or can write them for you.    
                </p>
                <div className="border border-border1 p-5 pr-6">
                    <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                        Surveys and market research…
                    </p>
                    <ul className="list-disc mx-6 text-gray1">
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Help you keep your finger on the trends and pricing among your competitors.
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Equip you to create market segments for personalized messaging.
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Ensure your content is relevant and adding value for your audience.
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Allow you to determine customer satisfaction level, intent to purchase and customer loyalty
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Collect data to identify industry trends and opportunities for your business.
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Give you valuable information to use in testimonials and content development.
                        </li>
                    </ul>
                </div>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    The Contact Center  conducts surveys and market research by phone, which often is a preferable format to email, social media or other options. Your company is provided the data ready for compilation and analysis for business application.
                    <br></br><br></br>
                    From political to non-profit, B2B and other types of businesses, The Contact Center  provides valuable data. Your survey can be simple, with only a few questions, or it can be a more complex data-gathering campaign, with interviews lasting up to 30 minutes.
                    <br></br><br></br>
                    From determining who belongs in your target market to testing the performance of a campaign, surveys and market research helps you keep the focus on your audience and understanding them better.
                </p>
                <h3 className="font-semibold text-gray1 text-base lg:text-xl xl:text-2xl leading-[110%]">
                    Survey Reveals Missed Sales Opportunities Through White Paper Distribution
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    The Contact Center. survey results indicate that white papers are the preferred method for receiving content, but many marketers are failing to capitalize on this opportunity.
                    <br></br><br></br>
                    White papers are the most popular method, with 37 percent of respondents reporting that they would rather receive a white paper than other types of content formats, but only 11 percent receive their content through white papers. Learn more about why you may be missing important opportunities in B2B marketing when you fail to prioritize white papers for content distribution.
                </p>
            </div>
            <div className="w-full lg:col-span-3">
                <SmallSendMail />
            </div>
        </div>
    )
}
export default SurveyResearch;