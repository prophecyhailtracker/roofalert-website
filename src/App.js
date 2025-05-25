import React from "react";
import { Check, MapPin, CloudLightning } from "lucide-react";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", background: "#fff", color: "#000" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>RoofAlert Leads</h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}>
          Strike first. Close faster. Get storm-targeted roofing leads before your competitors do.
        </p>
        <button style={{ marginTop: "1.5rem", padding: "0.75rem 2rem", fontSize: "1rem", background: "#000", color: "#fff", border: "none", borderRadius: "6px" }}>
          Get My Leads
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        <div style={cardStyle}>
          <MapPin size={32} />
          <h2 style={cardTitle}>Zip-Targeted Lists</h2>
          <p>Choose your cities, ZIP codes, and strike zones â€” we send verified addresses only.</p>
        </div>
        <div style={cardStyle}>
          <CloudLightning size={32} />
          <h2 style={cardTitle}>Storm Verified Data</h2>
          <p>Each lead includes hail size, storm date, and risk level to prioritize high-value homes.</p>
        </div>
        <div style={cardStyle}>
          <Check size={32} />
          <h2 style={cardTitle}>No Contracts</h2>
          <p>Start or stop anytime. Perfect for storm chasers, roofers, and restoration reps.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "1.5rem",
  maxWidth: "300px",
  textAlign: "left"
};

const cardTitle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  marginTop: "0.5rem",
  marginBottom: "0.5rem"
};

export default App;
