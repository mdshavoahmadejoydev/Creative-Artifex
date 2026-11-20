import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./sections/RootLayout";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import GraphicMultimedia from "./pages/GraphicMultimedia";
import WebSoftware from "./pages/WebSoftware";
import LogoDesign from "./sections/graphicMultimediaservices/LogoDesign";
import UiUxDesign from "./sections/graphicMultimediaservices/UiUxDesign";
import VideoAnimations from "./sections/graphicMultimediaservices/VideoAnimations";
import CoverDesign from "./sections/graphicMultimediaservices/CoverDesign";
import AdsDesign from "./sections/graphicMultimediaservices/AdsDesign";
import ThumbnailDesign from "./sections/graphicMultimediaservices/ThumbnailDesign";
import BusinessCardDesign from "./sections/graphicMultimediaservices/BusinessCardDesign";
import WebsiteDevelopment from "./sections/webSoftowerServices/WebsiteDevelopment";
import SoftwareDevelopment from "./sections/webSoftowerServices/SoftwareDevelopment";
import MobileApplicationDevelopment from "./sections/webSoftowerServices/MobileApplicationDevelopment";
import WordPressDevelopment from "./sections/webSoftowerServices/WordPressDevelopment";
import ShopifyStoreDesignDevelopment from "./sections/webSoftowerServices/ShopifyStoreDesignDevelopment";
import Templates from "./sections/Templates";
import AppsDesignTem from "./sections/Templates/AppsDesignTem";
import WebsiteDesigntem from "./sections/Templates/WebsiteDesigntem";
import DesktopSoftwaredesignTem from "./sections/Templates/DesktopSoftwaredesignTem";
import CoverDesignTem from "./sections/Templates/CoverDesignTem";
import AdsDesignTem from "./sections/Templates/AdsDesignTem";
import ThumbelDesignTem from "./sections/Templates/ThumbelDesignTem";
import BusinessCardDesignTem from "./sections/Templates/BusinessCardDesignTem";
import SubmitOrder from "./pages/SubmitOrder";
import OrderSubmited from "./pages/OrderSubmited";
import ScheduleButton from "./sections/ScheduleButton";
import LiveMessage from "./components/LiveMessage";
import Deshboard from "./sections/Dashboard";
import OrderList from "./sections/OrderList";
import Dashboarditems from "./sections/Dashboarditems";
import Notifications from "./sections/Notifications";
import Support from "./sections/Support";
import Setting from "./sections/Setting";
import Error from "./sections/Error";
import OrderPrintablePage from "./pages/OrderPrintablePage";
import AdminDeshboard from "./pages/AdminDeshboard"
import AdminDashboarditems from "./pages/AdminDashboarditems"
import AdminOrderList from "./sections/AdminOrderList";
// import ProfileTemplate from './sections/ProfileTemplate'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>

        <Route path="/services" element={<Services />}>
          <Route path="graphic-multimedia" element={<GraphicMultimedia />}>
            <Route path="logo-design" element={<LogoDesign />}></Route>
            <Route path="uiux-design" element={<UiUxDesign />}></Route>
            <Route path="video-animation" element={<VideoAnimations />}></Route>
            <Route path="cover-design" element={<CoverDesign />}></Route>
            <Route path="ads-design" element={<AdsDesign />}></Route>
            <Route
              path="thumbnail-design"
              element={<ThumbnailDesign />}
            ></Route>
            <Route
              path="business-card-design"
              element={<BusinessCardDesign />}
            ></Route>
          </Route>

          <Route path="web-software" element={<WebSoftware />}>
            <Route
              path="website-development"
              element={<WebsiteDevelopment />}
            ></Route>
            <Route
              path="software-development"
              element={<SoftwareDevelopment />}
            ></Route>
            <Route
              path="mobile-application-development"
              element={<MobileApplicationDevelopment />}
            ></Route>
            <Route
              path="wordpress-development"
              element={<WordPressDevelopment />}
            ></Route>
            <Route
              path="shopify-store-design-development"
              element={<ShopifyStoreDesignDevelopment />}
            ></Route>
          </Route>
        </Route>

        {/* Template nav */}
        <Route path="/templates" element={<Templates />}>
          <Route path="apps-design" element={<AppsDesignTem />}></Route>
          <Route path="website-design" element={<WebsiteDesigntem />}></Route>
          <Route
            path="desktop-software-design"
            element={<DesktopSoftwaredesignTem />}
          ></Route>
          <Route path="cover-design" element={<CoverDesignTem />}></Route>
          <Route path="ads-design" element={<AdsDesignTem />}></Route>
          <Route path="thumbnail-design" element={<ThumbelDesignTem />}></Route>
          <Route
            path="business-card-design"
            element={<BusinessCardDesignTem />}
          ></Route>
        </Route>

        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route
          path="/OrderPrintablePage"
          element={<OrderPrintablePage />}
        ></Route>

        <Route path="/deshboard" element={<Deshboard />}>
          <Route index element={<Dashboarditems />} />
          <Route path="orderlist" element={<OrderList />} />
          <Route path="Setting" element={<Setting />} />
          <Route path="Notifications" element={<Notifications />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* for admin */}
        <Route path="/admindeshboard" element={<AdminDeshboard />}>
          <Route index element={<AdminDashboarditems />} />
          <Route path="adminorderlist" element={<AdminOrderList />} />
          {/* <Route path="adminSetting" element={<Setting />} />
          <Route path="adminNotifications" element={<Notifications />} />
          <Route path="adminsupport" element={<Support />} /> */}
        </Route>

        <Route path="/order" element={<SubmitOrder />}></Route>

        <Route path="/order-submited" element={<OrderSubmited />}></Route>

        <Route path="/*" element={<Error />}></Route>

      </Route>
      {/* <Route path="/profile" element={<ProfileTemplate/>}></Route> */}
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
