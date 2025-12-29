import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../Layout/WhatsAppButton";
import CallButton from "../Layout/CallButton";
import FloatingSocialSidebar from "./FloatingSocialSidebar";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Wait a bit for the page to render
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <FloatingSocialSidebar />
      </div>

      {/* Mobile Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50 lg:hidden">
        <WhatsAppButton />
        <CallButton />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
