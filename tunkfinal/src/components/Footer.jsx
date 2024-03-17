import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-xs text-gray-500">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved by Tunk.
          </p>      
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
