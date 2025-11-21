# Quick Start Guide
## City of Kent Municipal Relocation Dashboard

Get your dashboard up and running in 3 simple steps!

---

## 📦 What You Received

✅ **Complete Dashboard Application** - Ready to use immediately  
✅ **Sample Data** - Pre-populated with City of Kent project data  
✅ **Athenian Group Branding** - Professional colors and logo  
✅ **6 Interactive Charts** - Budget, timeline, risks, and change orders  
✅ **6 KPI Cards** - Auto-calculated metrics  
✅ **2 Data Tables** - Risk register and change order log  
✅ **Export Functions** - Download charts, tables, and data  
✅ **Comprehensive Documentation** - Everything you need to know

**Total Files:** 8 files (~160 KB)  
**Status:** ✅ Production Ready

---

## 🚀 Step 1: Open the Dashboard (30 seconds)

### Option A: Local (Easiest)
1. Download all files to your computer
2. Keep the folder structure intact
3. **Double-click `index.html`**
4. Dashboard opens in your default browser

### Option B: Web Server
1. Upload all files to your web server
2. Maintain the folder structure
3. Navigate to `yourwebsite.com/dashboard/index.html`

### Option C: SharePoint/OneDrive
1. Upload all files to a SharePoint folder
2. Share the link with your team
3. Users open `index.html` directly

**✅ That's it! Your dashboard is now live.**

---

## 🎯 Step 2: Explore Features (5 minutes)

### View the Dashboard
Once opened, you'll see:

#### Header Section
- ✅ Athenian Group logo
- ✅ Project title: "City of Kent Municipal Relocation"
- ✅ Professional navy and gold branding

#### Filter Bar
- ✅ **Date Range** - Filter by time period
- ✅ **Category** - Filter by budget category
- ✅ **Reset** - Clear all filters
- ✅ **Export** - Download all data

#### 6 KPI Cards
1. **Total Budget** - $8.85M approved
2. **Actual Spend** - Current spending
3. **Budget Variance** - Under/over budget
4. **Change Orders** - Count and impact
5. **Active Risks** - Risk exposure
6. **Project Health** - Overall score (0-100)

#### 6 Interactive Charts
1. **Budget vs Actual by Category** - Grouped bar chart
2. **Spend Plan vs Actual Timeline** - Line chart
3. **Change Orders by Category** - Stacked bar chart
4. **Risk Expected vs Actual Impact** - Comparison chart
5. **Budget Allocation** - Pie chart
6. **Change Order Status** - Donut chart

#### 2 Data Tables
1. **Risk Register** - 9 tracked risks
2. **Change Order Log** - 9 change orders

### Try These Features
- ✅ Hover over charts to see detailed data
- ✅ Click date range dropdown to filter
- ✅ Click category dropdown to filter
- ✅ Click download icon on charts to export as PNG
- ✅ Click "Export CSV" on tables to download
- ✅ Click "Export" button to download full data as JSON

**🎉 Congratulations! You've explored the dashboard.**

---

## 📝 Step 3: Update Your Data (10 minutes)

Now let's replace the sample data with your real project data.

### Find the Data File
1. Locate `js/data.js` in your project folder
2. Open it with any text editor:
   - Windows: Notepad, Notepad++, VS Code
   - Mac: TextEdit, VS Code, Sublime Text
   - Online: Any code editor

### Data File Structure
The file contains clearly labeled sections:

```javascript
const projectData = {
    // Project Information
    projectInfo: { ... },
    
    // Budget vs Actual by Category (7 categories)
    budgetVsActual: [ ... ],
    
    // Spend Plan vs Actual Timeline (monthly)
    spendTimeline: [ ... ],
    
    // Change Orders
    changeOrders: [ ... ],
    
    // Risk Register
    risks: [ ... ],
    
    // Project Milestones
    milestones: [ ... ]
};
```

### Update Process

#### 1. Update Project Information (2 minutes)
```javascript
projectInfo: {
    name: "City of Kent Municipal Relocation",
    client: "City of Kent",
    contractor: "Athenian Group",
    startDate: "2024-01-15",  // ⬅️ Update this
    scheduledCompletion: "2025-06-30",  // ⬅️ Update this
    projectManager: "Sarah Mitchell",  // ⬅️ Update this
    location: "Kent, Washington"
}
```

#### 2. Update Budget Data (3 minutes)
```javascript
budgetVsActual: [
    {
        category: "Site Preparation & Demolition",
        budget: 1250000,  // ⬅️ Update with real budget
        actual: 1180000   // ⬅️ Update with actual spend
    },
    // ... update all 7 categories
]
```

#### 3. Update Timeline Data (2 minutes)
```javascript
spendTimeline: [
    { month: "Jan 2024", planned: 280000, actual: 265000 },
    { month: "Feb 2024", planned: 520000, actual: 498000 },
    // ... update all months
]
```

#### 4. Update Change Orders (2 minutes)
```javascript
changeOrders: [
    {
        id: "CO-001",
        date: "2024-03-15",
        description: "Additional ADA Compliance Requirements",
        category: "Interior Fit-out & Finishes",
        costImpact: 45000,
        scheduleImpact: "5 days",
        status: "Approved",
        justification: "New ADA regulations..."
    },
    // ... update or add change orders
]
```

#### 5. Update Risks (2 minutes)
```javascript
risks: [
    {
        id: "RISK-001",
        description: "Permit Delays from County Agencies",
        category: "Regulatory",
        probability: "Medium",
        expectedImpact: 85000,
        actualImpact: 42000,
        status: "Mitigated",
        mitigation: "Early engagement with planning..."
    },
    // ... update or add risks
]
```

### Save and Refresh
1. **Save** the `data.js` file (Ctrl+S or Cmd+S)
2. **Refresh** your browser (Ctrl+F5 or Cmd+Shift+R)
3. **View** your updated dashboard with real data

**🎉 Done! Your dashboard now shows real project data.**

---

## 🎨 Customization (Optional)

### Change Project Name
**File:** `index.html` (Line 31)
```html
<h1>City of Kent Municipal Relocation</h1>
```
Change to your project name.

### Change Logo
**File:** Replace `images/athenian-logo.png`
- Recommended size: 200x60 pixels
- Format: PNG with transparent background
- Keep filename the same or update in `index.html`

### Change Colors
**File:** `css/styles.css` (Lines 10-11)
```css
--athenian-navy: #1B365D;
--athenian-gold: #C9A661;
```
Update with your brand colors.

---

## ✅ Success Checklist

Before sharing with your team:

- [ ] Dashboard opens correctly in browser
- [ ] All 6 charts display properly
- [ ] All 6 KPI cards show data
- [ ] Both tables populate correctly
- [ ] Logo displays (Athenian Group)
- [ ] Project name is correct
- [ ] Filters work (date range, category)
- [ ] Export functions work (charts, tables, data)
- [ ] Data has been updated from sample to real data
- [ ] Responsive design works on mobile (test by resizing browser)

---

## 🎯 What to Do Next

### For Daily Use
1. **Update data weekly** - Keep spending, risks, and change orders current
2. **Export reports** - Use chart and table exports for presentations
3. **Filter data** - Use date range and category filters for focused views
4. **Share dashboard** - Deploy to web server or SharePoint for team access

### For Stakeholders
1. **Print dashboard** - Use Ctrl+P for print-optimized layout
2. **Export charts** - Download charts for reports and presentations
3. **Export data** - Download CSV/JSON for further analysis
4. **Schedule reviews** - Regular dashboard reviews with project team

### For Deployment
1. **Test thoroughly** - Check all features before deploying
2. **Upload to server** - Use FTP, cPanel, or your hosting provider
3. **Set permissions** - Ensure files are accessible
4. **Enable HTTPS** - For security if deployed publicly
5. **Share link** - Provide URL to stakeholders

---

## 📚 Additional Resources

### Documentation Files
- **README.md** - Complete documentation (you are here!)
- **DATA-UPDATE-INSTRUCTIONS.md** - Detailed data update guide
- **Code comments** - Inline documentation in all files

### Getting Help
1. **Check documentation** - Most questions answered in README
2. **Review code comments** - Each file has detailed comments
3. **Browser console** - Press F12 to view error messages
4. **Contact Athenian Group** - For custom modifications

---

## ⌨️ Keyboard Shortcuts

Save time with these shortcuts:

- **Ctrl+E** (or Cmd+E) - Export all data
- **Ctrl+P** (or Cmd+P) - Print dashboard
- **Ctrl+R** (or Cmd+R) - Reset filters
- **F12** - Open browser developer tools

---

## 🚨 Troubleshooting

### Dashboard doesn't load
- ✅ Check that all files are in correct folders
- ✅ Check browser console (F12) for errors
- ✅ Try different browser (Chrome, Firefox, Safari)
- ✅ Disable browser extensions temporarily

### Charts don't display
- ✅ Ensure internet connection (for Chart.js CDN)
- ✅ Check browser console for errors
- ✅ Verify `data.js` format is correct (no syntax errors)

### Data doesn't update
- ✅ Save `data.js` file after changes
- ✅ Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- ✅ Clear browser cache
- ✅ Check for JavaScript syntax errors in console

### Export doesn't work
- ✅ Check browser popup blocker settings
- ✅ Allow downloads in browser settings
- ✅ Try different browser

---

## 🎉 You're All Set!

Your City of Kent Municipal Relocation dashboard is ready to use!

**Remember:**
- ✅ Open `index.html` to view dashboard
- ✅ Update `js/data.js` with real data
- ✅ Refresh browser after data changes
- ✅ Export charts and data as needed
- ✅ Share with your team

**Questions?** Review the documentation or check the code comments.

---

*Dashboard by Athenian Group - Excellence in Project Management*
