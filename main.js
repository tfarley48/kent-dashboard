/**
 * City of Kent Municipal Relocation - Main JavaScript
 * 
 * This file handles:
 * - KPI calculations
 * - Data filtering (date range and category)
 * - Table population
 * - Export functionality
 * - User interactions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard
    initDashboard();
    
    // Set up event listeners
    setupEventListeners();
});

/**
 * Initialize the dashboard
 */
function initDashboard() {
    // Update KPIs
    updateKPIs();
    
    // Initialize charts
    initAllCharts();
    
    // Populate tables
    populateRiskTable();
    populateChangeOrderTable();
    
    // Update last updated timestamp
    updateLastUpdated();
}

/**
 * Set up event listeners for filters and buttons
 */
function setupEventListeners() {
    // Date range filter
    document.getElementById('dateRange').addEventListener('change', applyFilters);
    
    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    
    // Reset filters button
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    
    // Export data button
    document.getElementById('exportData').addEventListener('click', exportAllData);
    
    // Export chart buttons
    document.querySelectorAll('.export-chart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const chartId = this.getAttribute('data-chart');
            exportChart(chartId);
        });
    });
    
    // Export table buttons
    document.querySelectorAll('.export-table-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tableId = this.getAttribute('data-table');
            exportTableToCSV(tableId);
        });
    });
}

/**
 * Calculate and update all KPIs
 */
function updateKPIs() {
    // Calculate totals
    const totalBudget = projectData.budgetVsActual.reduce((sum, item) => sum + item.budget, 0);
    const totalActual = projectData.budgetVsActual.reduce((sum, item) => sum + item.actual, 0);
    const budgetVariance = totalBudget - totalActual;
    const variancePercentage = (budgetVariance / totalBudget) * 100;
    
    // Change Orders
    const changeOrderCount = projectData.changeOrders.length;
    const changeOrderValue = projectData.changeOrders.reduce((sum, co) => sum + co.costImpact, 0);
    
    // Risks
    const activeRisks = projectData.risks.filter(r => r.status === 'Active').length;
    const totalRiskExposure = projectData.risks
        .filter(r => r.status === 'Active')
        .reduce((sum, r) => sum + r.expectedImpact, 0);
    
    // Project Health Score (0-100)
    const healthScore = calculateProjectHealth();
    
    // Update KPI cards
    document.getElementById('totalBudget').textContent = formatCurrency(totalBudget);
    document.getElementById('actualSpend').textContent = formatCurrency(totalActual);
    document.getElementById('spendPercentage').textContent = `${((totalActual / totalBudget) * 100).toFixed(1)}% of budget`;
    
    document.getElementById('budgetVariance').textContent = formatCurrency(Math.abs(budgetVariance));
    const varianceText = budgetVariance > 0 ? 'under budget' : 'over budget';
    const varianceClass = budgetVariance > 0 ? 'text-success' : 'text-danger';
    document.getElementById('variancePercentage').textContent = `${Math.abs(variancePercentage).toFixed(1)}% ${varianceText}`;
    document.getElementById('variancePercentage').className = `kpi-change ${varianceClass}`;
    
    document.getElementById('changeOrderCount').textContent = changeOrderCount;
    document.getElementById('changeOrderValue').textContent = formatCurrency(changeOrderValue) + ' impact';
    
    document.getElementById('activeRisks').textContent = activeRisks;
    document.getElementById('riskExposure').textContent = formatCurrency(totalRiskExposure) + ' exposure';
    
    document.getElementById('projectHealth').textContent = healthScore;
    document.getElementById('healthStatus').textContent = getHealthStatus(healthScore);
    document.getElementById('healthStatus').className = `kpi-change ${getHealthClass(healthScore)}`;
}

/**
 * Calculate project health score (0-100)
 */
function calculateProjectHealth() {
    let score = 100;
    
    // Budget variance impact (max -30 points)
    const totalBudget = projectData.budgetVsActual.reduce((sum, item) => sum + item.budget, 0);
    const totalActual = projectData.budgetVsActual.reduce((sum, item) => sum + item.actual, 0);
    const variancePercentage = Math.abs((totalBudget - totalActual) / totalBudget);
    score -= Math.min(variancePercentage * 100, 30);
    
    // Active risks impact (max -25 points)
    const activeRisks = projectData.risks.filter(r => r.status === 'Active').length;
    score -= Math.min(activeRisks * 3, 25);
    
    // Change order impact (max -20 points)
    const pendingCOs = projectData.changeOrders.filter(co => co.status === 'Pending').length;
    score -= Math.min(pendingCOs * 4, 20);
    
    // Schedule performance (max -25 points)
    // Simplified: assume on schedule for now
    const scheduleImpact = 5; // This would be calculated from actual schedule data
    score -= scheduleImpact;
    
    return Math.max(Math.round(score), 0);
}

/**
 * Get health status text
 */
function getHealthStatus(score) {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Attention';
}

/**
 * Get health status CSS class
 */
function getHealthClass(score) {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-navy';
    if (score >= 40) return 'text-warning';
    return 'text-danger';
}

/**
 * Format currency
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

/**
 * Populate Risk Register Table
 */
function populateRiskTable() {
    const tbody = document.getElementById('riskTableBody');
    tbody.innerHTML = '';
    
    projectData.risks.forEach(risk => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${risk.id}</strong></td>
            <td>${risk.description}</td>
            <td><span class="status-badge">${risk.category}</span></td>
            <td><span class="prob-${risk.probability.toLowerCase()}">${risk.probability}</span></td>
            <td>${formatCurrency(risk.expectedImpact)}</td>
            <td>${formatCurrency(risk.actualImpact)}</td>
            <td><span class="status-badge status-${risk.status.toLowerCase()}">${risk.status}</span></td>
            <td>${risk.mitigation}</td>
        `;
        
        tbody.appendChild(row);
    });
}

/**
 * Populate Change Order Log Table
 */
function populateChangeOrderTable() {
    const tbody = document.getElementById('changeOrderTableBody');
    tbody.innerHTML = '';
    
    projectData.changeOrders.forEach(co => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${co.id}</strong></td>
            <td>${formatDate(co.date)}</td>
            <td>${co.description}</td>
            <td><span class="status-badge">${co.category}</span></td>
            <td class="font-bold">${formatCurrency(co.costImpact)}</td>
            <td>${co.scheduleImpact}</td>
            <td><span class="status-badge status-${co.status.toLowerCase()}">${co.status}</span></td>
            <td>${co.justification}</td>
        `;
        
        tbody.appendChild(row);
    });
}

/**
 * Format date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

/**
 * Apply filters to data
 */
function applyFilters() {
    const dateRange = document.getElementById('dateRange').value;
    const category = document.getElementById('categoryFilter').value;
    
    // For now, we'll just log the filters
    // In production, you'd filter the data and update charts
    console.log('Filters applied:', { dateRange, category });
    
    // Show visual feedback
    showFilterFeedback();
}

/**
 * Show filter feedback
 */
function showFilterFeedback() {
    const filterBar = document.querySelector('.filter-bar');
    filterBar.style.boxShadow = '0 0 0 3px rgba(201, 166, 97, 0.3)';
    
    setTimeout(() => {
        filterBar.style.boxShadow = '';
    }, 500);
}

/**
 * Reset all filters
 */
function resetFilters() {
    document.getElementById('dateRange').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    
    // Refresh data
    updateKPIs();
    updateAllCharts(projectData);
    populateRiskTable();
    populateChangeOrderTable();
}

/**
 * Export chart as PNG
 */
function exportChart(chartId) {
    const chart = chartInstances[chartId];
    if (!chart) {
        console.error('Chart not found:', chartId);
        return;
    }
    
    // Get chart image as base64
    const url = chart.toBase64Image();
    
    // Create download link
    const link = document.createElement('a');
    link.download = `${chartId}_${Date.now()}.png`;
    link.href = url;
    link.click();
}

/**
 * Export table to CSV
 */
function exportTableToCSV(tableId) {
    const table = document.getElementById(tableId);
    if (!table) {
        console.error('Table not found:', tableId);
        return;
    }
    
    let csv = [];
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        const csvRow = [];
        
        cols.forEach(col => {
            // Get text content and clean it
            let text = col.textContent.trim();
            // Escape quotes and wrap in quotes if contains comma
            text = text.replace(/"/g, '""');
            if (text.includes(',') || text.includes('"') || text.includes('\n')) {
                text = `"${text}"`;
            }
            csvRow.push(text);
        });
        
        csv.push(csvRow.join(','));
    });
    
    // Create download link
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${tableId}_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Export all data as comprehensive report
 */
function exportAllData() {
    // Create a comprehensive data export
    const exportData = {
        projectInfo: projectData.projectInfo,
        exportDate: new Date().toISOString(),
        summary: {
            totalBudget: projectData.budgetVsActual.reduce((sum, item) => sum + item.budget, 0),
            totalActual: projectData.budgetVsActual.reduce((sum, item) => sum + item.actual, 0),
            changeOrderCount: projectData.changeOrders.length,
            activeRisks: projectData.risks.filter(r => r.status === 'Active').length
        },
        budgetDetails: projectData.budgetVsActual,
        spendTimeline: projectData.spendTimeline,
        changeOrders: projectData.changeOrders,
        risks: projectData.risks,
        milestones: projectData.milestones
    };
    
    // Convert to JSON and download
    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `city_of_kent_project_data_${Date.now()}.json`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Update last updated timestamp
 */
function updateLastUpdated() {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    document.getElementById('lastUpdated').textContent = formatted;
}

/**
 * Print functionality (optional enhancement)
 */
function printDashboard() {
    window.print();
}

/**
 * Keyboard shortcuts (optional enhancement)
 */
document.addEventListener('keydown', function(e) {
    // Ctrl+P or Cmd+P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printDashboard();
    }
    
    // Ctrl+E or Cmd+E for export
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportAllData();
    }
    
    // Ctrl+R or Cmd+R for reset (prevent default browser refresh)
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        resetFilters();
    }
});

/**
 * Responsive table handling
 */
function makeTablesResponsive() {
    const tables = document.querySelectorAll('.data-table');
    
    tables.forEach(table => {
        if (window.innerWidth < 768) {
            // Add horizontal scroll hint on mobile
            const container = table.closest('.table-container');
            if (container) {
                container.style.position = 'relative';
                container.setAttribute('data-scroll-hint', 'Scroll horizontally →');
            }
        }
    });
}

// Run on load and resize
window.addEventListener('resize', makeTablesResponsive);
makeTablesResponsive();
