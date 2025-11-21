/**
 * City of Kent Municipal Relocation - Project Data
 * 
 * This file contains all the data for the dashboard.
 * Update the values below with your actual project data.
 * 
 * Project: City of Kent Municipal Relocation
 * Client: City of Kent
 * Contractor: Athenian Group
 * 
 * Last Updated: 2024-12-20
 */

const projectData = {
    // Project Information
    projectInfo: {
        name: "City of Kent Municipal Relocation",
        client: "City of Kent",
        contractor: "Athenian Group",
        startDate: "2024-01-15",
        scheduledCompletion: "2025-06-30",
        projectManager: "Sarah Mitchell",
        location: "Kent, Washington"
    },

    // Budget vs Actual by Category
    // Update these values with your actual budget and spending data
    budgetVsActual: [
        {
            category: "Site Preparation & Demolition",
            budget: 1250000,
            actual: 1180000
        },
        {
            category: "Building Construction",
            budget: 3800000,
            actual: 3650000
        },
        {
            category: "Interior Fit-out & Finishes",
            budget: 1600000,
            actual: 1620000
        },
        {
            category: "Technology Infrastructure",
            budget: 950000,
            actual: 985000
        },
        {
            category: "Furniture & Equipment",
            budget: 420000,
            actual: 405000
        },
        {
            category: "Professional Services",
            budget: 380000,
            actual: 370000
        },
        {
            category: "Contingency",
            budget: 450000,
            actual: 150000
        }
    ],

    // Spend Plan vs Actual Timeline
    // Monthly spending data (planned vs actual)
    spendTimeline: [
        { month: "Jan 2024", planned: 280000, actual: 265000 },
        { month: "Feb 2024", planned: 520000, actual: 498000 },
        { month: "Mar 2024", planned: 780000, actual: 745000 },
        { month: "Apr 2024", planned: 1100000, actual: 1065000 },
        { month: "May 2024", planned: 1520000, actual: 1485000 },
        { month: "Jun 2024", planned: 2050000, actual: 2015000 },
        { month: "Jul 2024", planned: 2680000, actual: 2640000 },
        { month: "Aug 2024", planned: 3450000, actual: 3420000 },
        { month: "Sep 2024", planned: 4280000, actual: 4275000 },
        { month: "Oct 2024", planned: 5150000, actual: 5180000 },
        { month: "Nov 2024", planned: 6080000, actual: 6125000 },
        { month: "Dec 2024", planned: 7200000, actual: 7360000 }
    ],

    // Change Orders
    // Municipal relocation specific change orders
    changeOrders: [
        {
            id: "CO-001",
            date: "2024-03-15",
            description: "Additional ADA Compliance Requirements",
            category: "Interior Fit-out & Finishes",
            costImpact: 45000,
            scheduleImpact: "5 days",
            status: "Approved",
            justification: "New ADA regulations require additional accessibility features in public areas"
        },
        {
            id: "CO-002",
            date: "2024-04-22",
            description: "Expanded IT Server Room",
            category: "Technology Infrastructure",
            costImpact: 65000,
            scheduleImpact: "8 days",
            status: "Approved",
            justification: "City IT department requires additional server capacity for consolidated operations"
        },
        {
            id: "CO-003",
            date: "2024-05-10",
            description: "Enhanced Security Systems",
            category: "Technology Infrastructure",
            costImpact: 82000,
            scheduleImpact: "10 days",
            status: "Approved",
            justification: "Upgraded security infrastructure for municipal records and operations"
        },
        {
            id: "CO-004",
            date: "2024-06-05",
            description: "Asbestos Remediation - Additional Areas",
            category: "Site Preparation & Demolition",
            costImpact: 38000,
            scheduleImpact: "12 days",
            status: "Approved",
            justification: "Additional asbestos discovered during demolition phase"
        },
        {
            id: "CO-005",
            date: "2024-07-18",
            description: "Emergency Generator Upgrade",
            category: "Building Construction",
            costImpact: 55000,
            scheduleImpact: "6 days",
            status: "Approved",
            justification: "City requires increased backup power capacity for emergency operations center"
        },
        {
            id: "CO-006",
            date: "2024-08-30",
            description: "Council Chambers Audio/Visual Enhancement",
            category: "Technology Infrastructure",
            costImpact: 48000,
            scheduleImpact: "7 days",
            status: "Approved",
            justification: "Upgraded A/V systems for public meetings and remote participation"
        },
        {
            id: "CO-007",
            date: "2024-09-14",
            description: "Additional Parking Lot Lighting",
            category: "Site Preparation & Demolition",
            costImpact: 28000,
            scheduleImpact: "4 days",
            status: "Approved",
            justification: "Enhanced lighting for public safety and code compliance"
        },
        {
            id: "CO-008",
            date: "2024-10-25",
            description: "Green Building Certification Upgrades",
            category: "Building Construction",
            costImpact: 72000,
            scheduleImpact: "0 days",
            status: "Approved",
            justification: "City sustainability goals require LEED Silver certification upgrades"
        },
        {
            id: "CO-009",
            date: "2024-11-08",
            description: "Public Records Vault Enhancement",
            category: "Interior Fit-out & Finishes",
            costImpact: 42000,
            scheduleImpact: "5 days",
            status: "Pending",
            justification: "Additional climate control and fire suppression for historical records"
        }
    ],

    // Risk Register
    // Municipal project specific risks
    risks: [
        {
            id: "RISK-001",
            description: "Permit Delays from County Agencies",
            category: "Regulatory",
            probability: "Medium",
            expectedImpact: 85000,
            actualImpact: 42000,
            status: "Mitigated",
            mitigation: "Early engagement with planning department; expedited review process negotiated"
        },
        {
            id: "RISK-002",
            description: "Utility Relocation - Gas and Electric",
            category: "Infrastructure",
            probability: "High",
            expectedImpact: 125000,
            actualImpact: 118000,
            status: "Closed",
            mitigation: "Coordinated with PSE for early relocation; some delays encountered but managed"
        },
        {
            id: "RISK-003",
            description: "Asbestos Remediation Extent",
            category: "Environmental",
            probability: "High",
            expectedImpact: 95000,
            actualImpact: 38000,
            status: "Closed",
            mitigation: "Comprehensive testing completed; remediation included in CO-004"
        },
        {
            id: "RISK-004",
            description: "Archaeological Discovery During Excavation",
            category: "Environmental",
            probability: "Low",
            expectedImpact: 150000,
            actualImpact: 0,
            status: "Closed",
            mitigation: "Pre-construction archaeological survey completed; no artifacts found"
        },
        {
            id: "RISK-005",
            description: "Public Meeting Schedule Conflicts",
            category: "Schedule",
            probability: "Medium",
            expectedImpact: 45000,
            actualImpact: 22000,
            status: "Mitigated",
            mitigation: "Flexible council chambers completion date; temporary facilities available"
        },
        {
            id: "RISK-006",
            description: "Technology Integration Complexity",
            category: "Technology",
            probability: "Medium",
            expectedImpact: 78000,
            actualImpact: 0,
            status: "Active",
            mitigation: "IT integration consultant hired; phased implementation plan developed"
        },
        {
            id: "RISK-007",
            description: "Winter Weather Construction Delays",
            category: "Schedule",
            probability: "Medium",
            expectedImpact: 62000,
            actualImpact: 0,
            status: "Active",
            mitigation: "Weather contingency in schedule; enclosed work prioritized during winter months"
        },
        {
            id: "RISK-008",
            description: "Materials Supply Chain Disruptions",
            category: "Procurement",
            probability: "Medium",
            expectedImpact: 95000,
            actualImpact: 0,
            status: "Active",
            mitigation: "Long-lead items ordered early; alternative suppliers identified"
        },
        {
            id: "RISK-009",
            description: "Public Safety Requirements During Move",
            category: "Operations",
            probability: "Low",
            expectedImpact: 38000,
            actualImpact: 0,
            status: "Active",
            mitigation: "Detailed move plan with police and fire department; phased transition strategy"
        }
    ],

    // Project Milestones
    milestones: [
        {
            name: "Project Kickoff",
            date: "2024-01-15",
            status: "Completed",
            completion: 100
        },
        {
            name: "Site Preparation Complete",
            date: "2024-04-30",
            status: "Completed",
            completion: 100
        },
        {
            name: "Foundation & Structure Complete",
            date: "2024-08-15",
            status: "Completed",
            completion: 100
        },
        {
            name: "Exterior Envelope Complete",
            date: "2024-10-31",
            status: "Completed",
            completion: 100
        },
        {
            name: "Interior Construction Complete",
            date: "2025-03-15",
            status: "In Progress",
            completion: 68
        },
        {
            name: "Technology Installation & Testing",
            date: "2025-05-15",
            status: "Not Started",
            completion: 0
        },
        {
            name: "Final Inspections & Occupancy",
            date: "2025-06-30",
            status: "Not Started",
            completion: 0
        }
    ],

    // KPI Thresholds and Targets
    kpiThresholds: {
        budgetVarianceWarning: 0.05,  // 5% variance triggers warning
        budgetVarianceCritical: 0.10,  // 10% variance is critical
        scheduleVarianceWarning: 7,    // 7 days triggers warning
        scheduleVarianceCritical: 14,  // 14 days is critical
        riskScoreWarning: 70,          // Risk score above 70 is concerning
        riskScoreCritical: 85,         // Risk score above 85 is critical
        healthScoreGood: 80,           // Health score above 80 is good
        healthScoreWarning: 60         // Health score below 60 needs attention
    }
};

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectData;
}
