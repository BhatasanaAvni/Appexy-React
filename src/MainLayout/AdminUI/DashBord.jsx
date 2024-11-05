import React from "react";
import AdminCommonPageTitle from "../../CommonComponents/AdminCommonPageTitle";
import DashbordCard from "../../Components/AdminUi/Dashbord/DashbordCard/DashbordCard";
import RecentProjects from "../../Components/AdminUi/Dashbord/RecentProjects/RecentProjects";
import TasksList from "../../Components/AdminUi/Dashbord/Task2/TasksList"
import tasksData from "../../Components/AdminUi/Dashbord/Task2/tasksData"
import Footer from "../../Components/AdminUi/Dashbord/Footer/Footer";
import AdminNav from "../../Components/AdminUi/AdminNav/AdminNav";

const DashBord = () => {
  return (
    <>
      <div className="custom-container" id="Dashbord">
        <AdminNav/>
        <AdminCommonPageTitle title="Hi Jesica" name="Jesica" />
        <DashbordCard />
        <RecentProjects/>
        <TasksList tasks={tasksData} />;
      </div>
        <Footer/>
    </>
  );
};

export default DashBord;
