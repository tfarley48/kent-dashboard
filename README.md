# City of Kent Municipal Relocation - Project Dashboard

A comprehensive, interactive project management dashboard for the City of Kent Municipal Relocation project, developed by Athenian Group.

![Dashboard Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-Proprietary-red)

## 📋 Project Overview

**Project Name:** City of Kent Municipal Relocation  
**Client:** City of Kent, Washington  
**Contractor:** Athenian Group  
**Dashboard Version:** 1.0.0  
**Last Updated:** December 2024

This dashboard provides real-time visibility into project performance, budget tracking, risk management, and change order monitoring for the City of Kent Municipal Relocation project.

---

## ✨ Features

### 📊 Interactive Visualizations
- **Budget vs Actual by Category** - Compare planned budget to actual spending across 7 project categories
- **Spend Plan vs Actual Timeline** - Track cumulative spending over time with monthly granularity
- **Change Orders Analysis** - Monitor change order impacts by category and status
- **Risk Management Matrix** - Visualize expected vs actual risk impacts
- **Budget Allocation** - Pie chart showing budget distribution across categories
- **Change Order Status** - Donut chart showing approval status breakdown

### 📈 Key Performance Indicators (KPIs)
- **Total Budget** - Approved project budget
- **Actual Spend** - Current spending with percentage of budget
- **Budget Variance** - Under/over budget amount and percentage
- **Change Orders** - Count and total cost impact
- **Active Risks** - Number of active risks with total exposure
- **Project Health Score** - Calculated health metric (0-100)

### 🎯 Data Management
- **Risk Register** - Complete risk tracking with mitigation strategies
- **Change Order Log** - Detailed change order history with justifications
- **Export Capabilities** - Export charts as PNG, tables as CSV, full data as JSON
- **Filtering** - Filter data by date range and category

### 🎨 Athenian Group Branding
- **Primary Color:** Navy Blue (#1B365D)
- **Accent Color:** Gold (#C9A661)
- **Professional Typography:** Inter font family
- **Corporate Logo:** Integrated Athenian Group branding

### 📱 Responsive Design
- Fully responsive layout for desktop, tablet, and mobile devices
- Touch-friendly interface for mobile users
- Print-optimized layouts
- Accessible design following WCAG guidelines

---

## 🚀 Quick Start

### Option 1: Open Locally (Easiest)
1. Download all project files
2. Double-click `index.html` to open in your web browser
3. Explore the dashboard features
4. Update `js/data.js` with your project data

### Option 2: Deploy to Web Server
1. Upload all files to your web server (via FTP, cPanel, etc.)
2. Ensure the folder structure is maintained
3. Access via your domain: `yourwebsite.com/dashboard/index.html`
4. No server-side configuration required

### Option 3: SharePoint/Cloud Storage
1. Upload all files to SharePoint, OneDrive, or similar
2. Share the folder with your team
3. Users can access `index.html` directly

---

## 📂 File Structure

```
city-of-kent-dashboard/
├── index.html                          # Main dashboard page
├── css/
│   └── styles.css                      # All styling and Athenian branding
├── js/
│   ├── data.js                         # ⭐ PROJECT DATA FILE - UPDATE THIS
│   ├── charts.js                       # Chart.js configurations
│   └── main.js                         # Dashboard logic and interactions
├── images/
│   └── athenian-logo.png              # Athenian Group logo
├── README.md                           # This file
├── QUICK-START-GUIDE.md               # Quick setup instructions
└── DATA-UPDATE-INSTRUCTIONS.md        # How to update project data
```

**⭐ Important:** The file you'll update most frequently is `js/data.js` - this contains all project data.

---

## 📊 Data Structure

### Budget Categories
1. Site Preparation & Demolition
2. Building Construction
3. Interior Fit-out & Finishes
4. Technology Infrastructure
5. Furniture & Equipment
6. Professional Services
7. Contingency

### Change Order Types
- Additional ADA Compliance Requirements
- Expanded IT Server Room
- Enhanced Security Systems
- Asbestos Remediation
- Emergency Generator Upgrade
- Council Chambers A/V Enhancement
- Additional Parking Lot Lighting
- Green Building Certification Upgrades
- Public Records Vault Enhancement

### Risk Categories
- Regulatory
- Infrastructure
- Environmental
- Schedule
- Technology
- Procurement
- Operations

---

## 🔄 Updating Data

### Quick Update Process
1. Open `js/data.js` in any text editor
2. Find the section you want to update (clearly labeled with comments)
3. Replace values following the existing format
4. Save the file
5. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)

### What You Can Update
- **Budget & Spending** - Update budget and actual values for each category
- **Timeline Data** - Add new months, update planned vs actual spending
- **Change Orders** - Add new change orders with details
- **Risks** - Update risk status, impacts, and mitigation strategies
- **Project Info** - Update project dates, manager, status
- **Milestones** - Track project milestone completion

### Example: Adding a New Change Order
```javascript
{
    id: "CO-010",
    date: "2024-12-15",
    description: "Additional Electrical Capacity",
    category: "Technology Infrastructure",
    costImpact: 35000,
    scheduleImpact: "3 days",
    status: "Pending",
    justification: "Increased power requirements for IT equipment"
}
```

**📖 For detailed instructions, see:** `DATA-UPDATE-INSTRUCTIONS.md`

---

## 🎨 Customization

### Branding Colors
All Athenian Group brand colors are defined in `css/styles.css` as CSS variables:
```css
--athenian-navy: #1B365D;
--athenian-gold: #C9A661;
```

### Logo
Replace `images/athenian-logo.png` with a new logo (recommended size: 200x60px)

### Project Name
Update the project name in:
- `index.html` - Header title and page title
- `js/data.js` - Project information section

---

## 📤 Export Functionality

### Chart Export
- Click the download icon on any chart
- Downloads as PNG image
- Suitable for reports and presentations

### Table Export
- Click "Export CSV" button on tables
- Opens in Excel or any spreadsheet software
- Maintains all data and formatting

### Full Data Export
- Click "Export" in the filter bar
- Downloads complete project data as JSON
- Includes all budget, spending, risks, and change orders

### Keyboard Shortcuts
- `Ctrl+E` (or `Cmd+E`) - Export all data
- `Ctrl+P` (or `Cmd+P`) - Print dashboard
- `Ctrl+R` (or `Cmd+R`) - Reset filters

---

## 🔍 Filtering

### Date Range Filter
Filter data by time period:
- All Time
- Year to Date
- Q4 2024, Q3 2024, Q2 2024, Q1 2024
- Last 6 Months
- Last 3 Months

### Category Filter
Filter by budget category:
- All Categories
- Site Preparation & Demolition
- Building Construction
- Interior Fit-out & Finishes
- Technology Infrastructure
- Furniture & Equipment
- Professional Services
- Contingency

### Reset Filters
Click "Reset" button to clear all filters and view complete data.

---

## 📱 Browser Compatibility

### Supported Browsers
- ✅ Google Chrome 90+
- ✅ Mozilla Firefox 88+
- ✅ Safari 14+
- ✅ Microsoft Edge 90+
- ✅ Opera 75+

### Mobile Browsers
- ✅ Chrome for Android
- ✅ Safari for iOS
- ✅ Firefox Mobile
- ✅ Samsung Internet

**Note:** Internet Explorer is not supported. Please use a modern browser.

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Modern semantic markup
- **CSS3** - Advanced styling with CSS Grid and Flexbox
- **JavaScript ES6+** - Modern JavaScript features
- **Chart.js 4.4.0** - Interactive charting library
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Inter typography

### Dependencies
All dependencies are loaded via CDN - no installation required:
- Chart.js - Chart rendering
- Font Awesome - Icons
- Google Fonts - Typography

### Performance
- **Load Time:** < 2 seconds on standard connection
- **File Size:** ~160 KB total (excluding images)
- **Optimization:** Minified assets, optimized images
- **Caching:** Browser caching enabled

---

## 🔒 Security & Privacy

### Data Storage
- All data is stored locally in `js/data.js`
- No external database connections
- No data sent to external servers
- No analytics or tracking

### Deployment Security
- Use HTTPS when deploying to web servers
- Restrict access using server authentication if needed
- Regular backups recommended

---

## 📖 Additional Documentation

### Getting Started
- **QUICK-START-GUIDE.md** - 3-step setup process
- **DATA-UPDATE-INSTRUCTIONS.md** - Detailed data update guide

### Support Resources
- Review code comments in `js/data.js` for data structure
- Check browser console (F12) for any error messages
- Ensure all files are uploaded if deploying to server

---

## 🎯 Best Practices

### Data Updates
- ✅ Update data weekly or monthly for accuracy
- ✅ Back up `data.js` before major changes
- ✅ Test changes locally before deploying
- ✅ Maintain consistent data formats

### Performance
- ✅ Keep data sets reasonable (< 1000 records per table)
- ✅ Use date range filters for large datasets
- ✅ Clear browser cache if issues occur

### Accessibility
- ✅ High contrast colors for readability
- ✅ Keyboard navigation supported
- ✅ Screen reader compatible
- ✅ Responsive text sizing

---

## 📝 Project Information

### Project Details
- **Start Date:** January 15, 2024
- **Scheduled Completion:** June 30, 2025
- **Project Manager:** Sarah Mitchell
- **Location:** Kent, Washington
- **Total Budget:** $8,850,000
- **Current Status:** Interior Construction Phase

### Contact Information
- **Contractor:** Athenian Group
- **Dashboard Developer:** Athenian Group Digital Solutions
- **Dashboard Version:** 1.0.0

---

## 🚀 Deployment Checklist

Before deploying to your website:

- [ ] Update all sample data in `js/data.js` with real project data
- [ ] Test dashboard in multiple browsers
- [ ] Verify logo displays correctly
- [ ] Test all export functions
- [ ] Ensure responsive design works on mobile
- [ ] Check all links and buttons
- [ ] Update project information
- [ ] Set appropriate file permissions on server
- [ ] Configure HTTPS if deploying publicly
- [ ] Share access credentials with team

---

## 📞 Support

For technical support or questions about the dashboard:

1. **Review Documentation** - Check README and DATA-UPDATE-INSTRUCTIONS
2. **Check Browser Console** - Press F12 to view any error messages
3. **Verify File Structure** - Ensure all files are in correct locations
4. **Contact Athenian Group** - For custom modifications or issues

---

## 📄 License

Copyright © 2025 Athenian Group. All rights reserved.

This dashboard is proprietary software developed specifically for the City of Kent Municipal Relocation project. Unauthorized copying, distribution, or modification is prohibited.

---

## 🎉 Conclusion

You now have a powerful, professional project management dashboard tailored specifically for the City of Kent Municipal Relocation project. 

**Next Steps:**
1. Open `index.html` to view the dashboard
2. Read `QUICK-START-GUIDE.md` for setup instructions
3. Update `js/data.js` with your real project data
4. Deploy to your website or SharePoint

**Questions?** Review the documentation files or check the inline comments in the code.

---

*Dashboard developed with precision by Athenian Group - Excellence in Project Management*
