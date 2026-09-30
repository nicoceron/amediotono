"use client";

import { useId, useState } from "react";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { JOB_OVERVIEW_ITEMS } from "@/lib/job-posting";

export function JobApplicationTabs() {
  const [activeTab, setActiveTab] = useState<"overview" | "application">("application");
  const overviewTabId = useId();
  const applicationTabId = useId();
  const overviewPanelId = useId();
  const applicationPanelId = useId();

  return (
    <div className="job-tabbed-application" data-active-tab={activeTab}>
      <nav className="job-application-tabs" role="tablist" aria-label="Detalles del cargo">
        <a
          id={overviewTabId}
          role="tab"
          href="#descripcion"
          aria-controls={overviewPanelId}
          aria-selected={activeTab === "overview"}
          aria-current={activeTab === "overview" ? "page" : undefined}
          tabIndex={activeTab === "overview" ? 0 : -1}
          onClick={(event) => {
            event.preventDefault();
            setActiveTab("overview");
          }}
        >
          <span className="job-overview-tab-label">Descripción</span>
        </a>
        <a
          id={applicationTabId}
          role="tab"
          href="#aplicacion"
          aria-controls={applicationPanelId}
          aria-selected={activeTab === "application"}
          aria-current={activeTab === "application" ? "page" : undefined}
          tabIndex={activeTab === "application" ? 0 : -1}
          onClick={(event) => {
            event.preventDefault();
            setActiveTab("application");
          }}
        >
          <span className="job-application-tab-label">Aplicación</span>
        </a>
        <span className="job-tab-slider" aria-hidden="true" />
      </nav>

      <section
        id={overviewPanelId}
        className="job-tab-panel"
        role="tabpanel"
        aria-labelledby={overviewTabId}
        hidden={activeTab !== "overview"}
      >
        <div className="job-overview-panel">
          {JOB_OVERVIEW_ITEMS.map((item) => (
            <section key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </section>
          ))}
        </div>
      </section>

      <section
        id={applicationPanelId}
        className="job-tab-panel"
        role="tabpanel"
        aria-labelledby={applicationTabId}
        hidden={activeTab !== "application"}
      >
        <JobApplicationForm />
      </section>
    </div>
  );
}
