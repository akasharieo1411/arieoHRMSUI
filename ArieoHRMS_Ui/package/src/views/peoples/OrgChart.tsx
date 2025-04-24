import React, { useState, useEffect } from "react";

// 👤 OrgNode type with added employeeId and designation
type OrgNode = {
  name: string;
  employeeId: string;
  designation: string;
  children?: OrgNode[];
};

// 📊 Organizational data with employeeId and designation added
const orgData: OrgNode = {
  name: "CEO",
  employeeId: "001",
  designation: "Chief Executive Officer",
  children: [
    {
      name: "CRO",
      employeeId: "002",
      designation: "Chief Revenue Officer",
    },
    {
      name: "CTO",
      employeeId: "003",
      designation: "Chief Technology Officer",
      children: [
        {
          name: "Dev Manager",
          employeeId: "004",
          designation: "Development Manager",
          children: [
            { name: "Frontend Dev", employeeId: "005", designation: "Frontend Developer" },
            { name: "Backend Dev", employeeId: "006", designation: "Backend Developer" },
          ],
        },
        {
          name: "QA Manager",
          employeeId: "007",
          designation: "Quality Assurance Manager",
        },
      ],
    },
    {
      name: "CFO",
      employeeId: "008",
      designation: "Chief Financial Officer",
      children: [
        { name: "Accountant", employeeId: "009", designation: "Accountant" },
        { name: "Finance Analyst", employeeId: "010", designation: "Financial Analyst" },
      ],
    },
  ],
};

// 🌳 Recursive Node component with added details
const Node: React.FC<{
  node: OrgNode;
  isDarkMode: boolean;
}> = ({ node, isDarkMode }) => {
  const [expanded, setExpanded] = useState(false); // Initially collapsed

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={styles.treeNode}>
      <div
        style={{
          ...styles.node,
          backgroundColor: isDarkMode ? "#2c3e50" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#333",
          border: isDarkMode ? "2px solid #81c784" : "2px solid #4a90e2",
        }}
        onClick={() => hasChildren && setExpanded(!expanded)} // Toggle on click
      >
        {hasChildren && (
          <span style={styles.toggle}>{expanded ? "−" : "+"}</span> // Toggle symbol
        )}
        {/* Add user icon or emoji */}
        <span style={styles.userIcon}>👤</span>
        <div style={styles.nodeContent}>
          <div style={styles.nodeName}>{node.name}</div>
          <div style={{...styles.nodeDetails, color: isDarkMode ? "#bbb" : "#555"}}>
            <div>ID: {node.employeeId}</div>
            <div>{node.designation}</div>
          </div>
        </div>
      </div>

      {/* Render children only if expanded and if they exist */}
      {expanded && hasChildren && (
        <div style={styles.connectorWrapper}>
          <div style={styles.verticalLine}></div>
          <div style={styles.children}>
            {node.children!.map((child, index) => (
              <Node key={index} node={child} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// 🧭 OrgChart main component with dark mode support
const OrgChart: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      const darkModeEnabled = document.querySelector(".dark") !== null;
      setIsDarkMode(darkModeEnabled);
    };

    checkDark();

    const observer = new MutationObserver(() => {
      checkDark();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? "#1a2537" : "#f9fafc",
      }}
    >
      <h2 style={styles.heading}>📊 Organizational Chart</h2>
      <div style={styles.chartWrapper}>
        <Node node={orgData} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default OrgChart;

// 🖌️ Styles with adjustments for new details
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    padding: "40px",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "30px",
    fontWeight: "600",
  },
  chartWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  treeNode: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  node: {
    cursor: "pointer",
    borderRadius: "8px",
    padding: "12px 20px",
    margin: "10px 0",
    fontWeight: 500,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    minWidth: "180px", // Adjusted width to fit more content
    position: "relative",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggle: {
    marginRight: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#007bff",
  },
  userIcon: {
    fontSize: "20px",
    marginRight: "10px",
  },
  nodeContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  nodeName: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  nodeDetails: {
    fontSize: "12px",
    // Default text color can be set dynamically via inline style
  },
  children: {
    display: "flex",
    justifyContent: "space-evenly", // Distribute the children horizontally
    marginTop: "20px",
    gap: "30px",
    position: "relative",
  },
  connectorWrapper: {
    position: "relative",
    width: "100%",
  },
  verticalLine: {
    width: "2px",
    height: "20px",
    position: "absolute",
    top: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    borderLeft: "2px dotted #aaa", // Dotted vertical line
  },
};
