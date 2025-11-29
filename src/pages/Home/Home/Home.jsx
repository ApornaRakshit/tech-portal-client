import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Company from "../Company/Company";
import Benefits from "../Benefits/Benefits";
import BeExpert from "../BeExpert/BeExpert";
import HomeRoadmap from "../../../components/HomeRoadmap";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services></Services>
            <HomeRoadmap />
            <Company></Company>
            <Benefits></Benefits>
            <BeExpert></BeExpert>
            <Footer></Footer>
        </div>
    );
};

export default Home;