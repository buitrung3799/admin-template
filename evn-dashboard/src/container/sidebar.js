import React from "react";

export default function Sidebar() {
  return (
    // <!-- Sidebar -->
    <ul
      className="navbar-nav bg-color-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 100,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          <img
            className="sidebar-brand-logo"
            style={{ height: 50 }}
            src={require("./logo-evn.png")}
            alt="logo-evn"
          />
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Trang chủ</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Quản lý</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="/#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Hợp đồng</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="/#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Báo cáo</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="/"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Tiến độ</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">
              Colors
            </a>
            <a className="collapse-item" href="utilities-border.html">
              Borders
            </a>
            <a className="collapse-item" href="utilities-animation.html">
              Animations
            </a>
            <a className="collapse-item" href="utilities-other.html">
              Other
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="/"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Thống kê</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">
              Login
            </a>
            <a className="collapse-item" href="register.html">
              Register
            </a>
            <a className="collapse-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">
              404 Page
            </a>
            <a className="collapse-item" href="blank.html">
              Blank Page
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Chấm công</span>
        </a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Kế toán</span>
        </a>
      </li>
      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Hệ thống</div>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="/"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Danh mục</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">
              Login
            </a>
            <a className="collapse-item" href="register.html">
              Register
            </a>
            <a className="collapse-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">
              404 Page
            </a>
            <a className="collapse-item" href="blank.html">
              Blank Page
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="/"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Hệ thống</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">
              Login
            </a>
            <a className="collapse-item" href="register.html">
              Register
            </a>
            <a className="collapse-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">
              404 Page
            </a>
            <a className="collapse-item" href="blank.html">
              Blank Page
            </a>
          </div>
        </div>
      </li>
      {/* <!-- Nav Item - Pages Collapse Menu --> */}

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    // {/* <!-- End of Sidebar --> */}
  );
}
