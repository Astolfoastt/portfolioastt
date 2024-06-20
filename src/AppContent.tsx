import React from "react";
import { useLocation } from "react-router-dom";
import { ProjectPage } from "./pages/projectsPage";
import { FormationsPage } from "./pages/formationsPage";

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <div
        id="projects"
        style={{
          display: location.pathname === "/projects" ? "visible" : "hidden",
        }}
      >
        <ProjectPage />
      </div>
      <div
        id="formations"
        style={{
          display: location.pathname === "/formations" ? "visible" : "hidden",
        }}
      >
        <FormationsPage />
      </div>
    </div>
  );
};

export default AppContent;
