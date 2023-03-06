import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";


const Home = () => {
    return (
        <div>
            <Header/>
            <BannerHome/>
            <Card/>
            <Footer/>
        </div>
    );
};

export default Home;