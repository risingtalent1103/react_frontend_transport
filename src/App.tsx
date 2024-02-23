import { FC } from "react";
import HomePage from "@/pages/Home/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import OutboundContentMarketing from "./pages/Home/OutboundContentMarketing";
import OutboundLeadGeneration from "./pages/Home/OutboundLeadGeneration";
import CustomerdevelopmentWinback from "./pages/Home/CustomerDevelopmentWinback";
import BTBListForBussinessGrowth from "./pages/Home/BTBListForBussinessGrowth";
import OutBoundPoliticalCampaign from "./pages/Home/OutBoundPoliticalCampaign";
import CustomerServices from "./pages/Home/CustomerServices";
import OutboundPulisherPage from "./pages/OutboundPublisher/OutboundPublisherPage";
import OutBoundSurveyPage from "./pages/OutboundSurvey/OutBoundSurveyPage";
import InboundOmnichannelPage from "./pages/InboundOmnichannel/InboundOmnichannelPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OutboundMarketingPage from "./pages/OutboundMarketing/OutboundMarketingPage";
import InboundMarketingPage from "./pages/InboundMarketing/InboundMarketingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/outboundMarketing",
        element: <OutboundMarketingPage />
      },
      {
        path: "/inboundMarketing",
        element: <InboundMarketingPage />
      },
      {
        path: "/outboundContentMarketing",
        element: <OutboundContentMarketing/>
      },
      {
        path: "/outboundLeadGeneration",
        element: <OutboundLeadGeneration/>,
      },
      {
        path:"/customerdevelopmentWinback",
        element: <CustomerdevelopmentWinback/>
      },
      {
        path:"/btbListForBussinessGrowth",
        element: <BTBListForBussinessGrowth/>
      },
      {
        path:"/outBoundPoliticalCampaign",
        element: <OutBoundPoliticalCampaign/>
      },
      {
        path: "/outboundPublisher",
        element: <OutboundPulisherPage />
      },
      {
        path:"/customerServices",
        element: <CustomerServices/>
      },
      {
        path: "/outboundSurvey",
        element: <OutBoundSurveyPage />
      },
      {
        path: "/inboundOmnichannel",
        element: <InboundOmnichannelPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
]);
const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
