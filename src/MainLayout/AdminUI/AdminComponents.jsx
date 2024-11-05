import React from "react";
import AdminCommonPageTitle from "../../CommonComponents/AdminCommonPageTitle";
import AlertsSection from "../../Components/AdminUi/AdminComponent/Alert/AlertsSection";
import Accordians from "../../Components/AdminUi/AdminComponent/Accordion/AccordionSection"
import BadgeSection from "../../Components/AdminUi/AdminComponent/Badge/BadgeSection";
import Breadcrumb from "../../Components/AdminUi/AdminComponent/Breadcrumb/Breadcrumb"
import Button from "../../Components/AdminUi/AdminComponent/Button/Button"
import Cards from "../../Components/AdminUi/AdminComponent/Card/Cards"
import Carousels from "../../Components/AdminUi/AdminComponent/Carousels/Carousels"
import Dropdowns from "../../Components/AdminUi/AdminComponent/Dropdown/Dropdowns"
import FormElements from "../../Components/AdminUi/AdminComponent/FormElements/FormElements"
import NavTabs from "../../Components/AdminUi/AdminComponent/NavTabs/NavTabs"
import ProgressCard from "../../Components/AdminUi/AdminComponent/ProgressCard/ProgressCard"
import PaginationCard from "../../Components/AdminUi/AdminComponent/PaginationCard/PaginationCard"
import SpinnerCard from "../../Components/AdminUi/AdminComponent/SpinnerCard/SpinnerCard"
import OffcanvasExample from "../../Components/AdminUi/AdminComponent/Offcanvas/Offcanvas"
import TooltipExample from "../../Components/AdminUi/AdminComponent/TooltipSection/TooltipSection"
import Footer from "../../Components/AdminUi/AdminComponent/Footer/Footer"
import AdminNav from "../../Components/AdminUi/AdminNav/AdminNav";
const AdminComponents = () => {
  return (
    <>
    <div id="uicomponent">
    <AdminNav/>
      <AdminCommonPageTitle title="UI Components" />
      <AlertsSection />
      <Accordians/>
      <BadgeSection />
      <Breadcrumb />
      <Button />
      <Cards />
      <Carousels />
      <Dropdowns />
      <FormElements />
      <NavTabs />
      <ProgressCard />
      <PaginationCard />
      <SpinnerCard />
      <OffcanvasExample />
      <TooltipExample />
      <Footer />
    </div>
    </>
  );
};

export default AdminComponents;
