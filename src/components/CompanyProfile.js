import React, { useState } from "react";

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <div className="company-profile">
      {/* Header */}
      <div className="header">
        <div className="company-info">
          <h2>Dunder Mifflin</h2>
          <p>Business Supplies & Equipment | Scranton, PA</p>
          <a href="https://recruitcrm.io" target="_blank" rel="noreferrer">
            recruitcrm.io
          </a>
        </div>
        <div className="actions">
          <button className="btn add">➕ Add Job</button>
          <button className="btn call">📞 Log Call</button>
          <button className="btn contact">👤 Add Contact</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "jobs" ? "active" : ""}
          onClick={() => setActiveTab("jobs")}
        >
          Jobs
        </button>
        <button
          className={activeTab === "contacts" ? "active" : ""}
          onClick={() => setActiveTab("contacts")}
        >
          Contacts
        </button>
        <button
          className={activeTab === "candidates" ? "active" : ""}
          onClick={() => setActiveTab("candidates")}
        >
          Candidates
        </button>
        <button
          className={activeTab === "activities" ? "active" : ""}
          onClick={() => setActiveTab("activities")}
        >
          Activities
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "jobs" && (
          <div>
            <h3>Open Jobs (1)</h3>
            <ul>
              <li>Sales Manager – San Francisco</li>
            </ul>
          </div>
        )}
        {activeTab === "contacts" && (
          <div>
            <h3>Contacts</h3>
            <p>No contacts available.</p>
          </div>
        )}
        {activeTab === "candidates" && (
          <div>
            <h3>Candidates</h3>
            <p>No candidates available.</p>
          </div>
        )}
        {activeTab === "activities" && (
          <div>
            <h3>Activities</h3>
            <p>No recent activity.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;
