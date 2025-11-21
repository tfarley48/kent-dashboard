/**
 * City of Kent Municipal Relocation - Charts Configuration
 * 
 * This file contains all Chart.js configurations for the dashboard.
 * Chart colors use the Athenian Group branding.
 */

// Athenian Group Color Palette
const colors = {
    navy: '#1B365D',
    navyLight: '#2a4a7f',
    navyDark: '#152849',
    gold: '#C9A661',
    goldLight: '#d4b875',
    goldDark: '#b89550',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
    gray: '#6b7280'
};

// Chart.js Default Configuration
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#374151';

// Global chart instances (for later reference and export)
let chartInstances = {};

/**
 * Initialize Budget vs Actual Chart
 */
function initBudgetChart() {
    const ctx = document.getElementById('budgetChart').getContext('2d');
    
    const categories = projectData.budgetVsActual.map(item => item.category);
    const budgetData = projectData.budgetVsActual.map(item => item.budget);
    const actualData = projectData.budgetVsActual.map(item => item.actual);
    
    chartInstances.budgetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [
                {
                    label: 'Budget',
                    data: budgetData,
                    backgroundColor: colors.navy,
                    borderColor: colors.navyDark,
                    borderWidth: 1,
                    borderRadius: 6,
                },
                {
                    label: 'Actual',
                    data: actualData,
                    backgroundColor: colors.gold,
                    borderColor: colors.goldDark,
                    borderWidth: 1,
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            weight: 600
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 600
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Initialize Spend Timeline Chart
 */
function initSpendTimelineChart() {
    const ctx = document.getElementById('spendTimelineChart').getContext('2d');
    
    const months = projectData.spendTimeline.map(item => item.month);
    const plannedData = projectData.spendTimeline.map(item => item.planned);
    const actualData = projectData.spendTimeline.map(item => item.actual);
    
    chartInstances.spendTimelineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Planned Spend',
                    data: plannedData,
                    borderColor: colors.navy,
                    backgroundColor: 'rgba(27, 54, 93, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: colors.navy,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Actual Spend',
                    data: actualData,
                    borderColor: colors.gold,
                    backgroundColor: 'rgba(201, 166, 97, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: colors.gold,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            weight: 600
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 600
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Initialize Change Orders Chart
 */
function initChangeOrdersChart() {
    const ctx = document.getElementById('changeOrdersChart').getContext('2d');
    
    // Group change orders by category
    const categoryTotals = {};
    projectData.changeOrders.forEach(co => {
        if (!categoryTotals[co.category]) {
            categoryTotals[co.category] = { approved: 0, pending: 0, rejected: 0 };
        }
        if (co.status === 'Approved') {
            categoryTotals[co.category].approved += co.costImpact;
        } else if (co.status === 'Pending') {
            categoryTotals[co.category].pending += co.costImpact;
        } else if (co.status === 'Rejected') {
            categoryTotals[co.category].rejected += co.costImpact;
        }
    });
    
    const categories = Object.keys(categoryTotals);
    const approvedData = categories.map(cat => categoryTotals[cat].approved);
    const pendingData = categories.map(cat => categoryTotals[cat].pending);
    const rejectedData = categories.map(cat => categoryTotals[cat].rejected);
    
    chartInstances.changeOrdersChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [
                {
                    label: 'Approved',
                    data: approvedData,
                    backgroundColor: colors.success,
                    borderRadius: 6,
                },
                {
                    label: 'Pending',
                    data: pendingData,
                    backgroundColor: colors.warning,
                    borderRadius: 6,
                },
                {
                    label: 'Rejected',
                    data: rejectedData,
                    backgroundColor: colors.danger,
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            weight: 600
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000).toFixed(0) + 'K';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Initialize Risk Chart (Expected vs Actual Impact)
 */
function initRiskChart() {
    const ctx = document.getElementById('riskChart').getContext('2d');
    
    const riskIds = projectData.risks.map(risk => risk.id);
    const expectedData = projectData.risks.map(risk => risk.expectedImpact);
    const actualData = projectData.risks.map(risk => risk.actualImpact);
    
    chartInstances.riskChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: riskIds,
            datasets: [
                {
                    label: 'Expected Impact',
                    data: expectedData,
                    backgroundColor: colors.danger,
                    borderRadius: 6,
                },
                {
                    label: 'Actual Impact',
                    data: actualData,
                    backgroundColor: colors.gold,
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            weight: 600
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(context.parsed.y);
                            
                            // Add risk description
                            const riskIndex = context.dataIndex;
                            const risk = projectData.risks[riskIndex];
                            return [label, 'Status: ' + risk.status, 'Description: ' + risk.description];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000).toFixed(0) + 'K';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Initialize Budget Allocation Pie Chart
 */
function initBudgetPieChart() {
    const ctx = document.getElementById('budgetPieChart').getContext('2d');
    
    const categories = projectData.budgetVsActual.map(item => item.category);
    const budgetData = projectData.budgetVsActual.map(item => item.budget);
    
    // Generate distinct colors for each category
    const pieColors = [
        colors.navy,
        colors.gold,
        colors.success,
        colors.warning,
        colors.info,
        colors.navyLight,
        colors.goldLight
    ];
    
    chartInstances.budgetPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: budgetData,
                backgroundColor: pieColors,
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            weight: 600
                        },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    const value = data.datasets[0].data[i];
                                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return {
                                        text: `${label} (${percentage}%)`,
                                        fillStyle: data.datasets[0].backgroundColor[i],
                                        hidden: false,
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            
                            const formattedValue = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(value);
                            
                            return `${label}: ${formattedValue} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * Initialize Change Order Status Donut Chart
 */
function initChangeOrderStatusChart() {
    const ctx = document.getElementById('changeOrderStatusChart').getContext('2d');
    
    // Count change orders by status
    const statusCounts = {
        'Approved': 0,
        'Pending': 0,
        'Rejected': 0
    };
    
    projectData.changeOrders.forEach(co => {
        if (statusCounts[co.status] !== undefined) {
            statusCounts[co.status]++;
        }
    });
    
    chartInstances.changeOrderStatusChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statusCounts),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: [colors.success, colors.warning, colors.danger],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            weight: 600
                        },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    const value = data.datasets[0].data[i];
                                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                    const percentage = ((value / total) * 100).toFixed(0);
                                    return {
                                        text: `${label} (${value}) - ${percentage}%`,
                                        fillStyle: data.datasets[0].backgroundColor[i],
                                        hidden: false,
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            
                            return `${label}: ${value} orders (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * Initialize all charts
 */
function initAllCharts() {
    initBudgetChart();
    initSpendTimelineChart();
    initChangeOrdersChart();
    initRiskChart();
    initBudgetPieChart();
    initChangeOrderStatusChart();
}

/**
 * Update all charts with filtered data
 */
function updateAllCharts(filteredData) {
    // This function will be called by main.js when filters are applied
    // For now, we'll keep it simple and reinitialize charts
    // In production, you'd update the data without recreating the charts
    
    Object.keys(chartInstances).forEach(key => {
        if (chartInstances[key]) {
            chartInstances[key].destroy();
        }
    });
    
    initAllCharts();
}
