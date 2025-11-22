import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Company from "../Company/Company";
import Benefits from "../Benefits/Benefits";
import BeExpert from "../BeExpert/BeExpert";
import Roadmap from "../../../components/Roadmap";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services></Services>
            <Roadmap></Roadmap>
            <Company></Company>
            <Benefits></Benefits>
            <BeExpert></BeExpert>
        </div>
    );
};

export default Home;