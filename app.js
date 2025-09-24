// Application Data
let appData = {
  "agents": [
    {
      "id": 1,
      "name": "Dr. Rajesh Kumar",
      "territory": "Mumbai West",
      "phone": "+91 98765 43210",
      "email": "rajesh.kumar@pharma.com",
      "status": "Active",
      "location": "Andheri, Mumbai",
      "todayVisits": 6,
      "plannedVisits": 8,
      "samplesDistributed": 15,
      "performance": 92,
      "lastActivity": "2 hours ago"
    },
    {
      "id": 2,
      "name": "Ms. Priya Sharma",
      "territory": "Delhi NCR",
      "phone": "+91 98765 43211",
      "email": "priya.sharma@pharma.com",
      "status": "Active",
      "location": "Gurgaon, Haryana",
      "todayVisits": 4,
      "plannedVisits": 7,
      "samplesDistributed": 12,
      "performance": 88,
      "lastActivity": "1 hour ago"
    },
    {
      "id": 3,
      "name": "Mr. Amit Patel",
      "territory": "Ahmedabad",
      "phone": "+91 98765 43212",
      "email": "amit.patel@pharma.com",
      "status": "On Leave",
      "location": "Ahmedabad, Gujarat",
      "todayVisits": 0,
      "plannedVisits": 5,
      "samplesDistributed": 0,
      "performance": 85,
      "lastActivity": "Yesterday"
    }
  ],
  "doctors": [
    {
      "id": 1,
      "name": "Dr. Suresh Gupta",
      "specialty": "Cardiology",
      "hospital": "Max Hospital, Mumbai",
      "phone": "+91 98765 54321",
      "lastVisit": "2024-09-20",
      "stockRequested": "Yes",
      "sampleStatus": "Approved",
      "prescriptionVolume": "High",
      "territory": "Mumbai West"
    },
    {
      "id": 2,
      "name": "Dr. Meera Singh",
      "specialty": "Pediatrics",
      "hospital": "Apollo Hospital, Delhi",
      "phone": "+91 98765 54322",
      "lastVisit": "2024-09-22",
      "stockRequested": "No",
      "sampleStatus": "Pending",
      "prescriptionVolume": "Medium",
      "territory": "Delhi NCR"
    },
    {
      "id": 3,
      "name": "Dr. Ravi Reddy",
      "specialty": "Dermatology",
      "hospital": "Care Hospital, Hyderabad",
      "phone": "+91 98765 54323",
      "lastVisit": "2024-09-21",
      "stockRequested": "Yes",
      "sampleStatus": "Approved",
      "prescriptionVolume": "High",
      "territory": "Hyderabad"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Cardiomax 10mg",
      "category": "Cardiovascular",
      "stockLevel": 850,
      "minStock": 200,
      "status": "In Stock",
      "expiryDate": "2025-12-31",
      "batchNumber": "CM001234",
      "price": 45.50
    },
    {
      "id": 2,
      "name": "Pediatric Syrup",
      "category": "Pediatrics",
      "stockLevel": 120,
      "minStock": 100,
      "status": "Low Stock",
      "expiryDate": "2025-08-15",
      "batchNumber": "PS005678",
      "price": 78.00
    },
    {
      "id": 3,
      "name": "Derma Cream 25g",
      "category": "Dermatology",
      "stockLevel": 45,
      "minStock": 50,
      "status": "Critical Stock",
      "expiryDate": "2025-06-30",
      "batchNumber": "DC009012",
      "price": 125.75
    }
  ],
  "samples": [
    {
      "id": 1,
      "productName": "Cardiomax 10mg",
      "agentName": "Dr. Rajesh Kumar",
      "doctorName": "Dr. Suresh Gupta",
      "quantity": 5,
      "distributedDate": "2024-09-20",
      "status": "Approved",
      "feedback": "Excellent efficacy",
      "batchNumber": "CM001234"
    },
    {
      "id": 2,
      "productName": "Pediatric Syrup",
      "agentName": "Ms. Priya Sharma",
      "doctorName": "Dr. Meera Singh",
      "quantity": 3,
      "distributedDate": "2024-09-22",
      "status": "Pending",
      "feedback": "Awaiting patient feedback",
      "batchNumber": "PS005678"
    },
    {
      "id": 3,
      "productName": "Derma Cream 25g",
      "agentName": "Mr. Amit Patel",
      "doctorName": "Dr. Ravi Reddy",
      "quantity": 2,
      "distributedDate": "2024-09-21",
      "status": "Approved",
      "feedback": "Positive patient response",
      "batchNumber": "DC009012"
    }
  ],
  "visits": [
    {
      "id": 1,
      "agentName": "Dr. Rajesh Kumar",
      "doctorName": "Dr. Suresh Gupta",
      "date": "2024-09-24",
      "time": "10:30 AM",
      "location": "Max Hospital, Mumbai",
      "status": "Completed",
      "notes": "Discussed new cardio product line",
      "stockRequest": "Yes",
      "samplesGiven": 5,
      "nextVisit": "2024-10-15"
    },
    {
      "id": 2,
      "agentName": "Ms. Priya Sharma",
      "doctorName": "Dr. Meera Singh",
      "date": "2024-09-24",
      "time": "2:00 PM",
      "location": "Apollo Hospital, Delhi",
      "status": "Scheduled",
      "notes": "",
      "stockRequest": "No",
      "samplesGiven": 0,
      "nextVisit": ""
    }
  ],
  "kpis": {
    "totalAgents": 3,
    "activeAgents": 2,
    "doctorsVisitedToday": 8,
    "samplesDistributed": 27,
    "stockRequestsPending": 4,
    "ordersCompleted": 12,
    "revenueThisMonth": "₹2,45,000",
    "performanceAverage": 88
  }
};

// Global variables
let currentSection = 'dashboard';
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeTime();
  initializeModal();
  initializeDashboard();
  initializeAgents();
  initializeVisits();
  initializeDistribution();
  initializeSamples();
  initializeReports();
  
  // Simulate real-time updates
  setInterval(updateRealTimeData, 30000);
});

// Navigation
function initializeNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const section = this.dataset.section;
      switchSection(section);
      
      // Update active state
      menuItems.forEach(mi => mi.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function switchSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionName;
    
    // Update page title
    const pageTitle = document.getElementById('page-title');
    pageTitle.textContent = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  }
}

// Time display
function initializeTime() {
  updateTime();
  setInterval(updateTime, 1000);
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('current-time').textContent = timeString;
}

// Modal functionality
function initializeModal() {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = modal.querySelector('.modal-overlay');
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
}

function showModal(title, content) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Dashboard
function initializeDashboard() {
  updateKPIs();
  initializeCharts();
  updateActivityFeed();
}

function updateKPIs() {
  const kpis = appData.kpis;
  document.getElementById('active-agents').textContent = kpis.activeAgents;
  document.getElementById('doctors-visited').textContent = kpis.doctorsVisitedToday;
  document.getElementById('samples-distributed').textContent = kpis.samplesDistributed;
  document.getElementById('pending-requests').textContent = kpis.stockRequestsPending;
  document.getElementById('orders-completed').textContent = kpis.ordersCompleted;
  document.getElementById('revenue-month').textContent = kpis.revenueThisMonth;
}

function initializeCharts() {
  // Visit Trends Chart
  const visitCtx = document.getElementById('visitTrendsChart').getContext('2d');
  charts.visitTrends = new Chart(visitCtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Visits Completed',
        data: [12, 15, 8, 18, 22, 14, 10],
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Sample Distribution Chart
  const sampleCtx = document.getElementById('sampleDistributionChart').getContext('2d');
  charts.sampleDistribution = new Chart(sampleCtx, {
    type: 'doughnut',
    data: {
      labels: ['Cardiovascular', 'Pediatrics', 'Dermatology', 'Others'],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function updateActivityFeed() {
  const activities = [
    { icon: 'fas fa-user-check', color: '#1FB8CD', text: 'Dr. Rajesh Kumar completed visit to Dr. Suresh Gupta', time: '2 hours ago' },
    { icon: 'fas fa-flask', color: '#FFC185', text: 'Sample approved by Dr. Ravi Reddy', time: '3 hours ago' },
    { icon: 'fas fa-truck', color: '#B4413C', text: 'Stock delivery completed to Mumbai West', time: '4 hours ago' },
    { icon: 'fas fa-calendar', color: '#5D878F', text: 'New visit scheduled with Dr. Meera Singh', time: '5 hours ago' }
  ];
  
  const activityList = document.getElementById('activity-list');
  activityList.innerHTML = activities.map(activity => `
    <div class="activity-item">
      <div class="activity-icon" style="background: ${activity.color}20; color: ${activity.color};">
        <i class="${activity.icon}"></i>
      </div>
      <div class="activity-content">
        <p>${activity.text}</p>
        <span class="activity-time">${activity.time}</span>
      </div>
    </div>
  `).join('');
}

// Agent Management
function initializeAgents() {
  renderAgents();
  initializeAgentFilters();
  initializeAgentActions();
}

function renderAgents(filteredAgents = null) {
  const agents = filteredAgents || appData.agents;
  const agentsGrid = document.getElementById('agents-grid');
  
  agentsGrid.innerHTML = agents.map(agent => `
    <div class="agent-card">
      <div class="agent-header">
        <div class="agent-info">
          <h4>${agent.name}</h4>
          <p>${agent.territory}</p>
        </div>
        <span class="status-badge ${agent.status.toLowerCase().replace(' ', '-')}">${agent.status}</span>
      </div>
      <div class="agent-stats">
        <div class="stat-item">
          <span class="stat-value">${agent.todayVisits}/${agent.plannedVisits}</span>
          <span class="stat-label">Visits</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${agent.samplesDistributed}</span>
          <span class="stat-label">Samples</span>
        </div>
      </div>
      <div class="performance-bar">
        <div class="performance-fill" style="width: ${agent.performance}%"></div>
      </div>
      <div class="performance-text">Performance: ${agent.performance}%</div>
      <div class="agent-actions">
        <button class="action-btn" onclick="viewAgent(${agent.id})">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn" onclick="editAgent(${agent.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn" onclick="contactAgent(${agent.id})">
          <i class="fas fa-phone"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function initializeAgentFilters() {
  const searchInput = document.getElementById('agent-search');
  const filterSelect = document.getElementById('agent-filter');
  
  searchInput.addEventListener('input', filterAgents);
  filterSelect.addEventListener('change', filterAgents);
}

function filterAgents() {
  const searchTerm = document.getElementById('agent-search').value.toLowerCase();
  const statusFilter = document.getElementById('agent-filter').value;
  
  let filteredAgents = appData.agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm) ||
                         agent.territory.toLowerCase().includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && agent.status === 'Active') ||
                         (statusFilter === 'inactive' && agent.status === 'On Leave');
    
    return matchesSearch && matchesStatus;
  });
  
  renderAgents(filteredAgents);
}

function initializeAgentActions() {
  document.getElementById('add-agent-btn').addEventListener('click', () => {
    showAddAgentModal();
  });
}

function viewAgent(agentId) {
  const agent = appData.agents.find(a => a.id === agentId);
  showModal('Agent Details', `
    <div class="agent-details">
      <p><strong>Name:</strong> ${agent.name}</p>
      <p><strong>Territory:</strong> ${agent.territory}</p>
      <p><strong>Phone:</strong> ${agent.phone}</p>
      <p><strong>Email:</strong> ${agent.email}</p>
      <p><strong>Status:</strong> ${agent.status}</p>
      <p><strong>Location:</strong> ${agent.location}</p>
      <p><strong>Last Activity:</strong> ${agent.lastActivity}</p>
      <p><strong>Performance:</strong> ${agent.performance}%</p>
    </div>
  `);
}

function editAgent(agentId) {
  const agent = appData.agents.find(a => a.id === agentId);
  showModal('Edit Agent', `
    <form class="modal-form" onsubmit="updateAgent(event, ${agentId})">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" value="${agent.name}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Territory</label>
        <input type="text" class="form-control" value="${agent.territory}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Phone</label>
        <input type="tel" class="form-control" value="${agent.phone}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" value="${agent.email}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-control" required>
          <option value="Active" ${agent.status === 'Active' ? 'selected' : ''}>Active</option>
          <option value="On Leave" ${agent.status === 'On Leave' ? 'selected' : ''}>On Leave</option>
        </select>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn--primary">Update</button>
      </div>
    </form>
  `);
}

function contactAgent(agentId) {
  const agent = appData.agents.find(a => a.id === agentId);
  window.open(`tel:${agent.phone}`);
}

function showAddAgentModal() {
  showModal('Add New Agent', `
    <form class="modal-form" onsubmit="addAgent(event)">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Territory</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Phone</label>
        <input type="tel" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" required>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn--primary">Add Agent</button>
      </div>
    </form>
  `);
}

// Visit Management
function initializeVisits() {
  renderVisits();
  initializeVisitFilters();
  initializeVisitActions();
}

function renderVisits(filteredVisits = null) {
  const visits = filteredVisits || appData.visits;
  const visitsTableBody = document.getElementById('visits-table-body');
  
  visitsTableBody.innerHTML = visits.map(visit => `
    <tr>
      <td>${visit.agentName}</td>
      <td>${visit.doctorName}</td>
      <td>${visit.date} ${visit.time}</td>
      <td>${visit.location}</td>
      <td><span class="status-badge ${visit.status.toLowerCase()}">${visit.status}</span></td>
      <td>${visit.samplesGiven}</td>
      <td>
        <button class="action-btn" onclick="viewVisit(${visit.id})">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn" onclick="editVisit(${visit.id})">
          <i class="fas fa-edit"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function initializeVisitFilters() {
  const dateFilter = document.getElementById('visit-date-filter');
  const statusFilter = document.getElementById('visit-status-filter');
  
  dateFilter.addEventListener('change', filterVisits);
  statusFilter.addEventListener('change', filterVisits);
}

function filterVisits() {
  const dateFilter = document.getElementById('visit-date-filter').value;
  const statusFilter = document.getElementById('visit-status-filter').value;
  
  let filteredVisits = appData.visits.filter(visit => {
    const matchesDate = !dateFilter || visit.date === dateFilter;
    const matchesStatus = statusFilter === 'all' || visit.status.toLowerCase() === statusFilter;
    
    return matchesDate && matchesStatus;
  });
  
  renderVisits(filteredVisits);
}

function initializeVisitActions() {
  document.getElementById('schedule-visit-btn').addEventListener('click', () => {
    showScheduleVisitModal();
  });
}

function viewVisit(visitId) {
  const visit = appData.visits.find(v => v.id === visitId);
  showModal('Visit Details', `
    <div class="visit-details">
      <p><strong>Agent:</strong> ${visit.agentName}</p>
      <p><strong>Doctor:</strong> ${visit.doctorName}</p>
      <p><strong>Date & Time:</strong> ${visit.date} ${visit.time}</p>
      <p><strong>Location:</strong> ${visit.location}</p>
      <p><strong>Status:</strong> ${visit.status}</p>
      <p><strong>Notes:</strong> ${visit.notes || 'No notes'}</p>
      <p><strong>Stock Request:</strong> ${visit.stockRequest}</p>
      <p><strong>Samples Given:</strong> ${visit.samplesGiven}</p>
      ${visit.nextVisit ? `<p><strong>Next Visit:</strong> ${visit.nextVisit}</p>` : ''}
    </div>
  `);
}

function showScheduleVisitModal() {
  const agentOptions = appData.agents.filter(a => a.status === 'Active')
    .map(agent => `<option value="${agent.name}">${agent.name}</option>`).join('');
  const doctorOptions = appData.doctors
    .map(doctor => `<option value="${doctor.name}">${doctor.name} - ${doctor.specialty}</option>`).join('');
  
  showModal('Schedule Visit', `
    <form class="modal-form" onsubmit="scheduleVisit(event)">
      <div class="form-group">
        <label class="form-label">Agent</label>
        <select class="form-control" required>
          <option value="">Select Agent</option>
          ${agentOptions}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Doctor</label>
        <select class="form-control" required>
          <option value="">Select Doctor</option>
          ${doctorOptions}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Date</label>
        <input type="date" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Time</label>
        <input type="time" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Location</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn--primary">Schedule</button>
      </div>
    </form>
  `);
}

// Distribution Management
function initializeDistribution() {
  renderProducts();
  updateInventoryStats();
  initializeDistributionActions();
}

function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  
  productsGrid.innerHTML = appData.products.map(product => {
    const stockPercentage = (product.stockLevel / (product.minStock * 2)) * 100;
    const stockStatus = product.stockLevel > product.minStock ? 'good' : 
                       product.stockLevel > product.minStock * 0.5 ? 'warning' : 'critical';
    
    return `
      <div class="product-card">
        <div class="product-header">
          <div class="product-info">
            <h4>${product.name}</h4>
            <p>${product.category}</p>
          </div>
          <span class="status-badge ${product.status.toLowerCase().replace(' ', '-')}">${product.status}</span>
        </div>
        <div class="stock-level">
          <div class="stock-bar">
            <div class="stock-fill ${stockStatus}" style="width: ${Math.min(stockPercentage, 100)}%"></div>
          </div>
          <div class="stock-info">
            <span>Stock: ${product.stockLevel}</span>
            <span>Min: ${product.minStock}</span>
          </div>
        </div>
        <div class="product-details">
          <div class="detail-item">
            <div class="detail-label">Batch</div>
            <div class="detail-value">${product.batchNumber}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Price</div>
            <div class="detail-value">₹${product.price}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Expiry</div>
            <div class="detail-value">${product.expiryDate}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateInventoryStats() {
  const totalProducts = appData.products.length;
  const lowStockItems = appData.products.filter(p => p.stockLevel <= p.minStock).length;
  const expiringItems = appData.products.filter(p => {
    const expiryDate = new Date(p.expiryDate);
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    return expiryDate <= sixMonthsFromNow;
  }).length;
  
  document.getElementById('total-products').textContent = totalProducts;
  document.getElementById('low-stock-items').textContent = lowStockItems;
  document.getElementById('expiring-items').textContent = expiringItems;
}

function initializeDistributionActions() {
  document.getElementById('add-product-btn').addEventListener('click', () => {
    showAddProductModal();
  });
}

function showAddProductModal() {
  showModal('Add New Product', `
    <form class="modal-form" onsubmit="addProduct(event)">
      <div class="form-group">
        <label class="form-label">Product Name</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <select class="form-control" required>
          <option value="">Select Category</option>
          <option value="Cardiovascular">Cardiovascular</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Stock Level</label>
        <input type="number" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Minimum Stock</label>
        <input type="number" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Price</label>
        <input type="number" step="0.01" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Batch Number</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Expiry Date</label>
        <input type="date" class="form-control" required>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn--primary">Add Product</button>
      </div>
    </form>
  `);
}

// Sample Management
function initializeSamples() {
  renderSamples();
  initializeSampleFilters();
  initializeSampleActions();
}

function renderSamples(filteredSamples = null) {
  const samples = filteredSamples || appData.samples;
  const samplesTableBody = document.getElementById('samples-table-body');
  
  samplesTableBody.innerHTML = samples.map(sample => `
    <tr>
      <td>${sample.productName}</td>
      <td>${sample.agentName}</td>
      <td>${sample.doctorName}</td>
      <td>${sample.quantity}</td>
      <td>${sample.distributedDate}</td>
      <td><span class="status-badge ${sample.status.toLowerCase()}">${sample.status}</span></td>
      <td>${sample.feedback}</td>
      <td>
        <button class="action-btn" onclick="viewSample(${sample.id})">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn" onclick="updateSampleStatus(${sample.id})">
          <i class="fas fa-edit"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function initializeSampleFilters() {
  const statusFilter = document.getElementById('sample-status-filter');
  const agentFilter = document.getElementById('sample-agent-filter');
  
  // Populate agent filter
  const agentOptions = ['<option value="all">All Agents</option>']
    .concat(appData.agents.map(agent => `<option value="${agent.name}">${agent.name}</option>`));
  agentFilter.innerHTML = agentOptions.join('');
  
  statusFilter.addEventListener('change', filterSamples);
  agentFilter.addEventListener('change', filterSamples);
}

function filterSamples() {
  const statusFilter = document.getElementById('sample-status-filter').value;
  const agentFilter = document.getElementById('sample-agent-filter').value;
  
  let filteredSamples = appData.samples.filter(sample => {
    const matchesStatus = statusFilter === 'all' || sample.status.toLowerCase() === statusFilter;
    const matchesAgent = agentFilter === 'all' || sample.agentName === agentFilter;
    
    return matchesStatus && matchesAgent;
  });
  
  renderSamples(filteredSamples);
}

function initializeSampleActions() {
  document.getElementById('allocate-sample-btn').addEventListener('click', () => {
    showAllocateSampleModal();
  });
}

function viewSample(sampleId) {
  const sample = appData.samples.find(s => s.id === sampleId);
  showModal('Sample Details', `
    <div class="sample-details">
      <p><strong>Product:</strong> ${sample.productName}</p>
      <p><strong>Agent:</strong> ${sample.agentName}</p>
      <p><strong>Doctor:</strong> ${sample.doctorName}</p>
      <p><strong>Quantity:</strong> ${sample.quantity}</p>
      <p><strong>Distributed Date:</strong> ${sample.distributedDate}</p>
      <p><strong>Status:</strong> ${sample.status}</p>
      <p><strong>Batch Number:</strong> ${sample.batchNumber}</p>
      <p><strong>Feedback:</strong> ${sample.feedback}</p>
    </div>
  `);
}

function showAllocateSampleModal() {
  const productOptions = appData.products
    .map(product => `<option value="${product.name}">${product.name}</option>`).join('');
  const agentOptions = appData.agents.filter(a => a.status === 'Active')
    .map(agent => `<option value="${agent.name}">${agent.name}</option>`).join('');
  const doctorOptions = appData.doctors
    .map(doctor => `<option value="${doctor.name}">${doctor.name} - ${doctor.specialty}</option>`).join('');
  
  showModal('Allocate Sample', `
    <form class="modal-form" onsubmit="allocateSample(event)">
      <div class="form-group">
        <label class="form-label">Product</label>
        <select class="form-control" required>
          <option value="">Select Product</option>
          ${productOptions}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Agent</label>
        <select class="form-control" required>
          <option value="">Select Agent</option>
          ${agentOptions}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Doctor</label>
        <select class="form-control" required>
          <option value="">Select Doctor</option>
          ${doctorOptions}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Quantity</label>
        <input type="number" min="1" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn--primary">Allocate</button>
      </div>
    </form>
  `);
}

// Reports & Analytics
function initializeReports() {
  initializeReportCharts();
  initializeReportActions();
}

function initializeReportCharts() {
  // Agent Performance Chart
  const agentPerfCtx = document.getElementById('agentPerformanceChart').getContext('2d');
  charts.agentPerformance = new Chart(agentPerfCtx, {
    type: 'bar',
    data: {
      labels: appData.agents.map(agent => agent.name.split(' ')[0]),
      datasets: [{
        label: 'Performance %',
        data: appData.agents.map(agent => agent.performance),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // Territory Analysis Chart
  const territoryCtx = document.getElementById('territoryChart').getContext('2d');
  charts.territory = new Chart(territoryCtx, {
    type: 'pie',
    data: {
      labels: ['Mumbai West', 'Delhi NCR', 'Ahmedabad', 'Others'],
      datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Sample Approval Rate Chart
  const approvalCtx = document.getElementById('approvalRateChart').getContext('2d');
  charts.approvalRate = new Chart(approvalCtx, {
    type: 'doughnut',
    data: {
      labels: ['Approved', 'Pending', 'Rejected'],
      datasets: [{
        data: [67, 25, 8],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Stock Movement Trends Chart
  const stockCtx = document.getElementById('stockMovementChart').getContext('2d');
  charts.stockMovement = new Chart(stockCtx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Stock Out',
        data: [120, 150, 100, 180],
        borderColor: '#B4413C',
        tension: 0.4
      }, {
        label: 'Stock In',
        data: [200, 180, 220, 160],
        borderColor: '#1FB8CD',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function initializeReportActions() {
  document.getElementById('generate-report-btn').addEventListener('click', () => {
    generateReport();
  });
}

function generateReport() {
  const startDate = document.getElementById('report-start-date').value;
  const endDate = document.getElementById('report-end-date').value;
  
  if (!startDate || !endDate) {
    alert('Please select both start and end dates');
    return;
  }
  
  // Simulate report generation
  showModal('Report Generated', `
    <div class="report-summary">
      <h4>Report Summary (${startDate} to ${endDate})</h4>
      <div style="margin-top: 16px;">
        <p><strong>Total Visits:</strong> 28</p>
        <p><strong>Samples Distributed:</strong> 67</p>
        <p><strong>Revenue Generated:</strong> ₹3,45,000</p>
        <p><strong>Average Performance:</strong> 88%</p>
        <p><strong>Top Performing Agent:</strong> Dr. Rajesh Kumar</p>
        <p><strong>Most Visited Specialty:</strong> Cardiology</p>
      </div>
      <div class="modal-actions" style="margin-top: 24px;">
        <button class="btn btn--primary" onclick="downloadReport()">Download PDF</button>
      </div>
    </div>
  `);
}

function downloadReport() {
  alert('Report download initiated (demo)');
  closeModal();
}

// Real-time data updates
function updateRealTimeData() {
  // Simulate real-time data updates
  const randomVisits = Math.floor(Math.random() * 5) + 6;
  const randomSamples = Math.floor(Math.random() * 10) + 20;
  
  document.getElementById('doctors-visited').textContent = randomVisits;
  document.getElementById('samples-distributed').textContent = randomSamples;
  
  updateActivityFeed();
}

// Form submission handlers
function addAgent(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  const newAgent = {
    id: appData.agents.length + 1,
    name: formData.get('name') || event.target.elements[0].value,
    territory: formData.get('territory') || event.target.elements[1].value,
    phone: formData.get('phone') || event.target.elements[2].value,
    email: formData.get('email') || event.target.elements[3].value,
    status: 'Active',
    location: 'N/A',
    todayVisits: 0,
    plannedVisits: 0,
    samplesDistributed: 0,
    performance: 85,
    lastActivity: 'Just added'
  };
  
  appData.agents.push(newAgent);
  renderAgents();
  closeModal();
}

function updateAgent(event, agentId) {
  event.preventDefault();
  const agent = appData.agents.find(a => a.id === agentId);
  const inputs = event.target.elements;
  
  agent.name = inputs[0].value;
  agent.territory = inputs[1].value;
  agent.phone = inputs[2].value;
  agent.email = inputs[3].value;
  agent.status = inputs[4].value;
  
  renderAgents();
  closeModal();
}

function scheduleVisit(event) {
  event.preventDefault();
  const inputs = event.target.elements;
  
  const newVisit = {
    id: appData.visits.length + 1,
    agentName: inputs[0].value,
    doctorName: inputs[1].value,
    date: inputs[2].value,
    time: inputs[3].value,
    location: inputs[4].value,
    status: 'Scheduled',
    notes: inputs[5].value,
    stockRequest: 'No',
    samplesGiven: 0,
    nextVisit: ''
  };
  
  appData.visits.push(newVisit);
  renderVisits();
  closeModal();
}

function addProduct(event) {
  event.preventDefault();
  const inputs = event.target.elements;
  
  const newProduct = {
    id: appData.products.length + 1,
    name: inputs[0].value,
    category: inputs[1].value,
    stockLevel: parseInt(inputs[2].value),
    minStock: parseInt(inputs[3].value),
    price: parseFloat(inputs[4].value),
    batchNumber: inputs[5].value,
    expiryDate: inputs[6].value,
    status: 'In Stock'
  };
  
  appData.products.push(newProduct);
  renderProducts();
  updateInventoryStats();
  closeModal();
}

function allocateSample(event) {
  event.preventDefault();
  const inputs = event.target.elements;
  
  const newSample = {
    id: appData.samples.length + 1,
    productName: inputs[0].value,
    agentName: inputs[1].value,
    doctorName: inputs[2].value,
    quantity: parseInt(inputs[3].value),
    distributedDate: new Date().toISOString().split('T')[0],
    status: 'Pending',
    feedback: 'Awaiting feedback',
    batchNumber: 'TBD001'
  };
  
  appData.samples.push(newSample);
  renderSamples();
  closeModal();
}

function updateSampleStatus(sampleId) {
  const sample = appData.samples.find(s => s.id === sampleId);
  showModal('Update Sample Status', `
    <form class="modal-form" onsubmit="saveSampleStatus(event, ${sampleId})">
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-control" required>
          <option value="Pending" ${sample.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Approved" ${sample.status === 'Approved' ? 'selected' : ''}>Approved</option>
          <option value="Rejected" ${sample.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Feedback</label>
        <textarea class="form-control" rows="3">${sample.feedback}</textarea>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn--primary">Update</button>
      </div>
    </form>
  `);
}

function saveSampleStatus(event, sampleId) {
  event.preventDefault();
  const sample = appData.samples.find(s => s.id === sampleId);
  const inputs = event.target.elements;
  
  sample.status = inputs[0].value;
  sample.feedback = inputs[1].value;
  
  renderSamples();
  closeModal();
}