import React from "react";
import { HomePage } from "./home/HomePage";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import AboutPage from "./about/AboutPage";
import { Navbar } from "../layout/Navbar";
import { ContactPage } from "./contact/ContactPage";
import { Route, Router, Routes } from "react-router-dom";

const LandingPage = () => {
  return <HomePage />;
};

export default LandingPage;
