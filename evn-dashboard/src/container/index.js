import React from "react";
import Navbar from "./navbar";
import Content from "./content";
import Sidebar from "./sidebar";

export default function MainContent() {
  return (
    <div id="wrapper">
      <Sidebar />

      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  );
}
