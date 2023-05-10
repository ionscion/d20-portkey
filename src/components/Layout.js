import React from 'react'
import bgImage from '../images/bg1.jpg'

function Layout({ children }) {
    return (
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          {children}
        </div>
      );
}

export default Layout