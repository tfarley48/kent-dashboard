# Data Update Instructions
## City of Kent Municipal Relocation Dashboard

Complete guide to updating your dashboard data.

---

## 📋 Overview

All dashboard data is stored in a single file: **`js/data.js`**

This file contains:
- ✅ Project information
- ✅ Budget vs actual spending (7 categories)
- ✅ Monthly spend timeline (12 months)
- ✅ Change orders (9+ items)
- ✅ Risk register (9+ risks)
- ✅ Project milestones

**Update frequency:** Weekly or monthly for best accuracy

---

## 🎯 Quick Reference

| Section | What It Controls | Update Frequency |
|---------|------------------|------------------|
| `projectInfo` | Project details, dates, manager | Monthly or as needed |
| `budgetVsActual` | Budget categories and spending | Weekly/Monthly |
| `spendTimeline` | Monthly cumulative spending | Monthly |
| `changeOrders` | Change order log | As they occur |
| `risks` | Risk register | Weekly/Monthly |
| `milestones` | Project milestones | As completed |

---

## 📂 Opening the Data File

### Windows
1. Navigate to project folder → `js` folder
2. Right-click `data.js`
3. Select **"Open with" → "Notepad"** (or Notepad++, VS Code)

### Mac
1. Navigate to project folder → `js` folder
2. Right-click `data.js`
3. Select **"Open With" → "TextEdit"** (or VS Code, Sublime Text)

### Important Tips
- ✅ Use a code editor for best results (VS Code, Notepad++, Sublime Text)
- ✅ Do NOT use Microsoft Word or rich text editors
- ✅ Save as plain text (.js extension)
- ✅ Make backup before major changes

---

## 📊 Section 1: Project Information

**Location in file:** Top of `projectData` object

### What It Looks Like
```javascript
projectInfo: {
    name: "City of Kent Municipal Relocation",
    client: "City of Kent",
    contractor: "Athenian Group",
    startDate: "2024-01-15",
    scheduledCompletion: "2025-06-30",
    projectManager: "Sarah Mitchell",
    location: "Kent, Washington"
}
```

### How to Update
1. Find the `projectInfo` section (around line 15)
2. Update values in quotes
3. Keep date format as `YYYY-MM-DD`
4. Save file

### Example Update
```javascript
projectInfo: {
    name: "City of Kent Municipal Relocation",
    client: "City of Kent",
    contractor: "Athenian Group",
    startDate: "2024-01-15",
    scheduledCompletion: "2025-08-15",  // ⬅️ Extended date
    projectManager: "John Smith",  // ⬅️ New PM
    location: "Kent, Washington"
}
```

---

## 💰 Section 2: Budget vs Actual

**Location in file:** `budgetVsActual` array

**Controls:** 
- Budget vs Actual bar chart
- Budget Allocation pie chart
- Total Budget KPI
- Actual Spend KPI
- Budget Variance KPI

### Structure
```javascript
budgetVsActual: [
    {
        category: "Site Preparation & Demolition",
        budget: 1250000,
        actual: 1180000
    },
    // ... 6 more categories
]
```

### The 7 Categories
1. Site Preparation & Demolition
2. Building Construction
3. Interior Fit-out & Finishes
4. Technology Infrastructure
5. Furniture & Equipment
6. Professional Services
7. Contingency

### How to Update

#### Update Existing Category
```javascript
{
    category: "Building Construction",
    budget: 3800000,  // ⬅️ Update budget amount
    actual: 3750000   // ⬅️ Update actual spending
}
```

#### Add New Category
```javascript
budgetVsActual: [
    // ... existing categories
    {
        category: "Landscaping",
        budget: 150000,
        actual: 45000
    }
]
```

**Important Rules:**
- ✅ Keep category names consistent
- ✅ Use numbers without commas or dollar signs
- ✅ Each entry needs category, budget, and actual
- ✅ Maintain comma between entries

---

## 📈 Section 3: Spend Timeline

**Location in file:** `spendTimeline` array

**Controls:** 
- Spend Plan vs Actual Timeline chart

### Structure
```javascript
spendTimeline: [
    { month: "Jan 2024", planned: 280000, actual: 265000 },
    { month: "Feb 2024", planned: 520000, actual: 498000 },
    // ... more months
]
```

### How to Update

#### Update Existing Month
```javascript
{ 
    month: "Dec 2024", 
    planned: 7200000,  // ⬅️ Update planned cumulative spend
    actual: 7450000    // ⬅️ Update actual cumulative spend
}
```

#### Add New Month
```javascript
spendTimeline: [
    // ... existing months
    { month: "Jan 2025", planned: 7850000, actual: 7920000 }
]
```

**Important Notes:**
- ✅ Values are CUMULATIVE (total to date)
- ✅ Month format: "MMM YYYY" (e.g., "Jan 2024")
- ✅ Keep chronological order
- ✅ Update monthly for best results

---

## 🔄 Section 4: Change Orders

**Location in file:** `changeOrders` array

**Controls:** 
- Change Orders by Category chart
- Change Order Status chart
- Change Order Log table
- Change Orders KPI

### Structure
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
        justification: "New ADA regulations require additional accessibility features"
    },
    // ... more change orders
]
```

### How to Add New Change Order

1. Find the `changeOrders` array
2. Add comma after last entry
3. Copy this template:

```javascript
{
    id: "CO-XXX",  // ⬅️ Next sequential number
    date: "YYYY-MM-DD",  // ⬅️ Date submitted
    description: "Brief description",  // ⬅️ What changed
    category: "Category name",  // ⬅️ Which category
    costImpact: 00000,  // ⬅️ Cost impact (number only)
    scheduleImpact: "X days",  // ⬅️ Schedule impact
    status: "Pending",  // ⬅️ Approved, Pending, or Rejected
    justification: "Why this change is needed"  // ⬅️ Justification
}
```

### Example: Adding Change Order
```javascript
changeOrders: [
    // ... existing change orders
    {
        id: "CO-010",
        date: "2024-12-15",
        description: "Additional Electrical Capacity",
        category: "Technology Infrastructure",
        costImpact: 35000,
        scheduleImpact: "3 days",
        status: "Pending",
        justification: "Increased power requirements for server room expansion"
    }
]
```

### Valid Status Values
- `"Approved"` - Green badge, included in totals
- `"Pending"` - Yellow badge, not yet approved
- `"Rejected"` - Red badge, not included in totals

**Important Rules:**
- ✅ Use sequential ID numbers
- ✅ Date format: YYYY-MM-DD
- ✅ Cost as number (no $ or commas)
- ✅ Match category to one of the 7 main categories
- ✅ Status must be exactly: Approved, Pending, or Rejected

---

## ⚠️ Section 5: Risk Register

**Location in file:** `risks` array

**Controls:** 
- Risk Expected vs Actual Impact chart
- Risk Register table
- Active Risks KPI

### Structure
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
        mitigation: "Early engagement with planning department"
    },
    // ... more risks
]
```

### How to Add New Risk

Template:
```javascript
{
    id: "RISK-XXX",  // ⬅️ Next sequential number
    description: "Risk description",  // ⬅️ What could go wrong
    category: "Category",  // ⬅️ Risk category
    probability: "High",  // ⬅️ High, Medium, or Low
    expectedImpact: 00000,  // ⬅️ Expected cost impact
    actualImpact: 0,  // ⬅️ Actual cost (0 if not occurred)
    status: "Active",  // ⬅️ Active, Mitigated, or Closed
    mitigation: "Mitigation strategy"  // ⬅️ How you're managing it
}
```

### Example: Adding Risk
```javascript
{
    id: "RISK-010",
    description: "Labor Shortage During Peak Season",
    category: "Schedule",
    probability: "Medium",
    expectedImpact: 65000,
    actualImpact: 0,
    status: "Active",
    mitigation: "Early hiring and subcontractor pre-qualification"
}
```

### Valid Values

**Probability:**
- `"High"` - Red color
- `"Medium"` - Yellow color
- `"Low"` - Green color

**Status:**
- `"Active"` - Currently being monitored
- `"Mitigated"` - Actions taken to reduce impact
- `"Closed"` - No longer a concern

**Categories:**
- Regulatory
- Infrastructure
- Environmental
- Schedule
- Technology
- Procurement
- Operations

**Important Rules:**
- ✅ expectedImpact is the potential cost
- ✅ actualImpact is 0 until risk occurs
- ✅ Only "Active" risks count toward KPI
- ✅ Probability affects dashboard coloring

---

## 🎯 Section 6: Project Milestones

**Location in file:** `milestones` array

**Controls:** 
- Project timeline tracking
- Milestone completion status

### Structure
```javascript
milestones: [
    {
        name: "Project Kickoff",
        date: "2024-01-15",
        status: "Completed",
        completion: 100
    },
    // ... more milestones
]
```

### How to Update Milestone

```javascript
{
    name: "Interior Construction Complete",
    date: "2025-03-15",
    status: "In Progress",  // ⬅️ Update status
    completion: 75  // ⬅️ Update percentage (0-100)
}
```

### Valid Status Values
- `"Completed"` - 100% complete
- `"In Progress"` - 1-99% complete
- `"Not Started"` - 0% complete

---

## ✅ Validation Checklist

Before saving your changes:

### Syntax Check
- [ ] All quotes match (`"` with `"`)
- [ ] All brackets match (`{` with `}`, `[` with `]`)
- [ ] Commas between entries (but NOT after last entry)
- [ ] No extra commas or missing commas

### Data Format
- [ ] Dates in YYYY-MM-DD format
- [ ] Numbers without $ or commas
- [ ] Category names match exactly
- [ ] Status values match valid options

### Testing
- [ ] Save file (Ctrl+S or Cmd+S)
- [ ] Refresh browser (Ctrl+F5 or Cmd+Shift+R)
- [ ] Check browser console for errors (F12)
- [ ] Verify all charts update correctly
- [ ] Check KPIs calculate correctly

---

## 🔧 Common Mistakes & Fixes

### ❌ Missing Comma
**Error:**
```javascript
{ category: "Labor", budget: 1000, actual: 950 }
{ category: "Materials", budget: 2000, actual: 1980 }  // ❌ Missing comma above
```

**Fix:**
```javascript
{ category: "Labor", budget: 1000, actual: 950 },  // ✅ Added comma
{ category: "Materials", budget: 2000, actual: 1980 }
```

### ❌ Extra Comma
**Error:**
```javascript
{ category: "Labor", budget: 1000, actual: 950 },  // ❌ Last entry has comma
]
```

**Fix:**
```javascript
{ category: "Labor", budget: 1000, actual: 950 }  // ✅ Removed comma
]
```

### ❌ Wrong Date Format
**Error:**
```javascript
date: "12/15/2024"  // ❌ Wrong format
```

**Fix:**
```javascript
date: "2024-12-15"  // ✅ Correct format
```

### ❌ Dollar Signs in Numbers
**Error:**
```javascript
budget: $1,250,000  // ❌ Has $ and commas
```

**Fix:**
```javascript
budget: 1250000  // ✅ Numbers only
```

---

## 🚨 Troubleshooting

### Dashboard shows no data
- ✅ Check browser console (F12) for errors
- ✅ Look for syntax errors (missing quotes, brackets, commas)
- ✅ Verify file saved as `data.js` (not .txt)

### Charts don't update
- ✅ Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- ✅ Clear browser cache
- ✅ Check data format matches examples

### KPIs show wrong values
- ✅ Verify numbers don't have $ or commas
- ✅ Check all values are present
- ✅ Ensure categories match exactly

### Validation Tool
Open browser console (F12) after loading dashboard:
- No errors = Data is valid ✅
- Red errors = Fix syntax issues ❌

---

## 📞 Getting Help

### Self-Help
1. **Review examples** in this document
2. **Check syntax** carefully (quotes, brackets, commas)
3. **Use browser console** (F12) to see errors
4. **Compare to sample data** in original file

### Online Tools
- **JSONLint** (jsonlint.com) - Validate JavaScript syntax
- **JSHint** (jshint.com) - Check for errors

### Contact Support
For complex issues:
- Review all documentation first
- Note exact error messages from console
- Contact Athenian Group with details

---

## 💾 Backup Best Practices

### Before Making Changes
1. Copy `data.js` to `data-backup.js`
2. Or copy entire folder to safe location
3. Keep dated backups (data-2024-12-15.js)

### Version Control
- Save dated versions monthly
- Keep last 3-6 months of backups
- Document major changes

---

## 🎉 You're Ready!

You now know how to update all dashboard data.

**Remember:**
- ✅ Update `js/data.js` with your data
- ✅ Follow format examples exactly
- ✅ Save and refresh browser after changes
- ✅ Check console for errors (F12)
- ✅ Make backups before major changes

**Questions?** Review the examples in this guide or check the sample data in the file.

---

*Data Management Guide by Athenian Group*
