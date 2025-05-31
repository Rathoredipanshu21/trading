import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBlog, faHandshake, faBook, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="admin-container" style={styles.container}>
      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          ...styles.sidebar,
          width: isSidebarCollapsed ? "80px" : "250px",
        }}
      >
        <button onClick={toggleSidebar} style={styles.toggleButton}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h2 style={{ ...styles.title, display: isSidebarCollapsed ? "none" : "block" }}>Admin Panel</h2>
        <ul style={styles.menuList}>
          <li
            style={activePage === "/dashAdm" ? styles.activeItem : styles.menuItem}
            onClick={() => handleMenuClick("/dashAdm")}
          >
            <FontAwesomeIcon icon={faTachometerAlt} style={styles.icon} />
            {!isSidebarCollapsed && "Dashboard"}
          </li>
          <li
            style={activePage === "/admin" ? styles.activeItem : styles.menuItem}
            onClick={() => handleMenuClick("/admin")}
          >
            <FontAwesomeIcon icon={faBlog} style={styles.icon} />
            {!isSidebarCollapsed && "Add Blog"}
          </li>
          <li
            style={activePage === "/tradeAdd" ? styles.activeItem : styles.menuItem}
            onClick={() => handleMenuClick("/tradeAdd")}
          >
            <FontAwesomeIcon icon={faHandshake} style={styles.icon} />
            {!isSidebarCollapsed && "Add Trading Partners"}
          </li>
          <li
            style={activePage === "/learn-admin" ? styles.activeItem : styles.menuItem}
            onClick={() => handleMenuClick("/learn-admin")}
          >
            <FontAwesomeIcon icon={faBook} style={styles.icon} />
            {!isSidebarCollapsed && "Add Learn section"}
          </li>
          <li style={styles.logoutItem}>
            <Link to="/login" style={styles.link}>
              <FontAwesomeIcon icon={faSignOutAlt} style={styles.icon} />
              {!isSidebarCollapsed && "Logout"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content" style={styles.mainContent}>
        <iframe
          title="admin-content"
          src={
            activePage === "dashboard"
              ? "/dashAdm"
              : activePage === "/admin"
              ? "/admin"
              : activePage === "/tradeAdd"
              ? "/tradeAdd"
              : activePage === "/learn-admin"
              ? "/learn-admin"
              : "/admin-settings.html"
          }
          style={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {
    background: "rgb(57, 103, 45)",
    color: "#fff",
    padding: "20px",
    transition: "width 0.3s",
  },
  toggleButton: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  title: {
    textAlign: "center",
  },
  menuList: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #555",
    display: "flex",
    alignItems: "center",
  },
  activeItem: {
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color:'green',
    borderBottom: "1px solid #777",
    display: "flex",
    alignItems: "center",
  },
  logoutItem: {
    padding: "10px",
    marginTop: "20px",
    backgroundColor: "#ff4d4d",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "10px",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};

export default AdminDashboard;