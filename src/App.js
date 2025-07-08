import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import ContactUs from "./pages/ContactUs";
import AppLayout from "./components/AppLayout/AppLayout";
import OurService from "./pages/OurService/OurService.js";
import WhyUs from "./pages/WhyUs";
import BillPayUI from "../src/pages/services/BillPayUI.js";
import BillPayUI11 from "../src/pages/services/BillPayUI11.js";
import OurPartner from "./pages/OurPartner";
import BBPS from "./pages/BBPS";
import Term from "./pages/Term";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import RefundPolicy from "./pages/RefundPolicy.js";
import History from "./pages/History/History.js";
import MyWallet from "./pages/My_Wallet/MyWallet.js";
import ProfileSetting from "./pages/ProfileSetting/ProfileSetting.js";
import PaymentCheck from "./pages/My_Wallet/PaymentCheck.js";
import PaymentMode from "./pages/services/PaymentMode/PaymentMode.js";
import TransferToBank from "./pages/services/TransferToBank/TransferToBank.js";
import RedeemPayback from "./pages/services/Redeem/RedeemPayback.js";
import WalletTransfer from "./pages/services/WalletTransfer/WalletTransfer.js";
import Page404 from "./pages/Page404.js";
import KYC from "./pages/Kyc/KYC.js";
import AadharCard from "./pages/Kyc/AadharCard.js";
import PaymentSuccessPage from "./pages/PaymentSuccessPage/PaymentSuccessPage.js";
import PaymentErrorPage from "./pages/PaymentErrorPage/PaymentErrorPage.js";
import PaymentRecipt from "./pages/services/PaymentReciptPage/PaymentRecipt.js";
import ContentPolicy from "./pages/contentPolicy.js";
import LeadForm from "./pages/leadForm.js";
import LeadFormPopup from "./pages/leadForm.js";
import { ContextProvider } from "./components/services/context.js";
import CreateAccount from "./pages/Login/page.js";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import LoginPage from "./pages/Login/Login.js";
import UserAccountCreation from "./pages/Login/userAccountCreation.js";
import Blog from "./pages/Blog/Blog.js";
import BlogDetails from "./pages/Blog/BlogDetails.js";
import SiteMape from "./pages/SiteMap/SiteMape.js";
import BugBountyProgram from "./pages/BugBounty/BugBounty.js";
import BillPaymentSystem from "./pages/services/BillPaymentSystem.js";
import SnakeGame from "./pages/Game/SnakeGame.js";

function App() {
  // const { pathname } = useLocation();
  // const hideLayout = pathname === "/createaccount";

  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <LeadFormPopup />
        <Routes>
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/" element={<AppLayout />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Services" element={<OurService />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/recharge" element={<BillPayUI />} />
          <Route path="/recharge1" element={<BillPayUI11 />} />
          <Route path="/billpayment" element={<BillPaymentSystem />} />
          <Route path="/OurPartner" element={<OurPartner />} />
          <Route path="/BBPS" element={<BBPS />} />
          <Route path="/term" element={<Term />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contentPolicy" element={<ContentPolicy />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/paymentmode" element={<PaymentMode />} />
          <Route path="/transfer-to-bank" element={<TransferToBank />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/paymentcheck/:amount" element={<PaymentCheck />} />
          <Route path="/redeem-payback-points" element={<RedeemPayback />} />
          <Route path="/wallet-transfer" element={<WalletTransfer />} />
          <Route path="/mywallet" element={<MyWallet />} />
          <Route path="/history" element={<History />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/aadhar" element={<AadharCard />} />
          <Route path="/success" element={<PaymentSuccessPage />} />
          <Route path="/failure" element={<PaymentErrorPage />} />
          <Route path="/receipt" element={<PaymentRecipt />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/login1" element={<LoginPage />} /> */}
          <Route path="/blog" element={<Blog/>} />
           <Route path="/blog_details/:slug" element={<BlogDetails/>} />
             <Route path="/sitemap" element={<SiteMape/>} />
             <Route path="/bug-bounty" element={<BugBountyProgram/>} />
          <Route path="/register/useraccountcreation" element={<UserAccountCreation />} />
          {/* <Route path="/game" element={<SnakeGame />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;




