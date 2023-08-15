import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer>
      <p className="disclaimer">
        I would like to kindly ask for your understanding regarding any potential data gaps or inconsistencies within my book app. The application
        draws its information from the Open Library API, and as a result, any instances of incomplete data are a direct consequence of the integration
        with this external source. Your patience and consideration are greatly appreciated as I continue to enhance the app's functionality and
        content quality.
      </p>
    </footer>
  );
}

export default Footer;
