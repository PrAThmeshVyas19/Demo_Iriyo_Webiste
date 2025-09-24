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
let isMobile = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // Check mobile state immediately
  checkMobileState();
  
  // Initialize all features
  initializeMobileFeatures();
  initializeNavigation();
  initializeTime();
  initializeModal();
  initializeDashboard();
  initializeAgents();
  initializeVisits();
  initializeDistribution();
  initializeSamples();
  initializeReports();
  
  // Handle window resize
  window.addEventListener('resize', handleResize);
  
  // Force mobile layout check after a brief delay
  setTimeout(checkMobileState, 100);
  
  // Simulate real-time updates
  setInterval(updateRealTimeData, 30000);
});

// Check mobile state
function checkMobileState() {
  const newIsMobile = window.innerWidth <= 768;
  const mobileHeader = document.querySelector('.mobile-header');
  const sidebar = document.getElementById('sidebar');
  
  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    console.log('Mobile state changed:', isMobile);
    
    // Force mobile layout
    if (isMobile && mobileHeader) {
      mobileHeader.style.display = 'flex';
      document.body.classList.add('mobile-view');
      if (sidebar) {
        sidebar.classList.remove('active');
      }
    } else if (mobileHeader) {
      mobileHeader.style.display = 'none';
      document.body.classList.remove('mobile-view');
    }
  }
}

// Mobile Features
function initializeMobileFeatures() {
  console.log('Initializing mobile features...');
  
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const sidebarClose = document.getElementById('sidebar-close');
  const mobileFab = document.getElementById('mobile-fab');
  
  console.log('Mobile elements found:', {
    mobileMenuToggle: !!mobileMenuToggle,
    sidebar: !!sidebar,
    mobileOverlay: !!mobileOverlay,
    sidebarClose: !!sidebarClose,
    mobileFab: !!mobileFab
  });
  
  // Mobile menu toggle - Enhanced with multiple event listeners
  if (mobileMenuToggle) {
    const toggleFunction = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Mobile menu toggle clicked');
      
      if (sidebar && mobileOverlay) {
        sidebar.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Sidebar opened');
      }
    };
    
    mobileMenuToggle.addEventListener('click', toggleFunction);
    mobileMenuToggle.addEventListener('touchstart', toggleFunction);
  }
  
  // Close sidebar function
  function closeMobileSidebar(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Closing mobile sidebar');
    
    if (sidebar && mobileOverlay) {
      sidebar.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
      console.log('Sidebar closed');
    }
  }
  
  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeMobileSidebar);
    sidebarClose.addEventListener('touchstart', closeMobileSidebar);
  }
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileSidebar);
    mobileOverlay.addEventListener('touchstart', closeMobileSidebar);
  }
  
  // Floating Action Button
  if (mobileFab) {
    mobileFab.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('FAB clicked');
      showQuickActionMenu();
    });
  }
  
  // Enhanced touch events for better mobile interaction
  let touchStartX = 0;
  let touchStartY = 0;
  let isSwipeEnabled = true;
  
  document.addEventListener('touchstart', function(e) {
    if (!isSwipeEnabled) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });
  
  document.addEventListener('touchend', function(e) {
    if (!isSwipeEnabled || !isMobile) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Swipe to open sidebar (swipe right from left edge)
    if (deltaX > 50 && Math.abs(deltaY) < 100 && touchStartX < 30) {
      console.log('Swipe right detected from edge');
      if (sidebar && mobileOverlay) {
        sidebar.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
    
    // Swipe to close sidebar (swipe left when sidebar is open)
    if (deltaX < -50 && Math.abs(deltaY) < 100 && sidebar && sidebar.classList.contains('active')) {
      console.log('Swipe left detected on open sidebar');
      closeMobileSidebar();
    }
  });
  
  // Disable swipe on form elements to prevent interference
  document.addEventListener('focusin', function(e) {
    if (e.target.matches('input, textarea, select')) {
      isSwipeEnabled = false;
    }
  });
  
  document.addEventListener('focusout', function(e) {
    if (e.target.matches('input, textarea, select')) {
      setTimeout(() => {
        isSwipeEnabled = true;
      }, 100);
    }
  });
}

function handleResize() {
  const previousMobile = isMobile;
  checkMobileState();
  
  // Close mobile sidebar when switching to desktop
  if (previousMobile && !isMobile) {
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    if (sidebar && mobileOverlay) {
      sidebar.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  // Reinitialize charts for responsive display
  setTimeout(() => {
    Object.keys(charts).forEach(chartKey => {
      if (charts[chartKey] && typeof charts[chartKey].resize === 'function') {
        try {
          charts[chartKey].resize();
        } catch (error) {
          console.warn('Chart resize failed:', error);
        }
      }
    });
  }, 100);
}

function showQuickActionMenu() {
  const quickActions = [
    { label: 'Add Agent', icon: 'fas fa-user-plus', action: 'showAddAgentModal' },
    { label: 'Schedule Visit', icon: 'fas fa-calendar-plus', action: 'showScheduleVisitModal' },
    { label: 'Add Product', icon: 'fas fa-box', action: 'showAddProductModal' },
    { label: 'Allocate Sample', icon: 'fas fa-flask', action: 'showAllocateSampleModal' }
  ];
  
  const actionsList = quickActions.map(action => `
    <button class="btn btn--outline" onclick="${action.action}(); closeModal();" style="width: 100%; margin-bottom: 8px; justify-content: flex-start;">
      <i class="${action.icon}"></i>
      <span style="margin-left: 8px;">${action.label}</span>
    </button>
  `).join('');
  
  showModal('Quick Actions', `
    <div class="quick-actions-menu">
      ${actionsList}
    </div>
  `);
}

// Navigation
function initializeNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    const clickHandler = function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      if (section) {
        switchSection(section);
        
        // Update active state
        menuItems.forEach(mi => mi.classList.remove('active'));
        this.classList.add('active');
        
        // Close mobile sidebar after navigation
        if (isMobile) {
          const sidebar = document.getElementById('sidebar');
          const mobileOverlay = document.getElementById('mobile-overlay');
          if (sidebar && mobileOverlay) {
            sidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
          }
        }
      }
    };
    
    item.addEventListener('click', clickHandler);
    item.addEventListener('touchstart', clickHandler);
  });
}

function switchSection(sectionName) {
  console.log('Switching to section:', sectionName);
  
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
    if (pageTitle) {
      pageTitle.textContent = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    }
    
    // Scroll to top on section change
    window.scrollTo(0, 0);
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
  
  const desktopTime = document.getElementById('current-time');
  const mobileTime = document.getElementById('mobile-current-time');
  
  if (desktopTime) desktopTime.textContent = timeString;
  if (mobileTime) mobileTime.textContent = timeString;
}

// Modal functionality
function initializeModal() {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = modal?.querySelector('.modal-overlay');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }
  
  // Handle escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function showModal(title, content) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
    
    // Focus trap for accessibility
    const focusableElements = modal.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
      setTimeout(() => focusableElements[0].focus(), 100);
    }
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Dashboard
function initializeDashboard() {
  updateKPIs();
  setTimeout(initializeCharts, 100); // Delay chart initialization
  updateActivityFeed();
}

function updateKPIs() {
  const kpis = appData.kpis;
  const elements = {
    'active-agents': kpis.activeAgents,
    'doctors-visited': kpis.doctorsVisitedToday,
    'samples-distributed': kpis.samplesDistributed,
    'pending-requests': kpis.stockRequestsPending,
    'orders-completed': kpis.ordersCompleted,
    'revenue-month': kpis.revenueThisMonth
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function initializeCharts() {
  // Visit Trends Chart
  const visitCtx = document.getElementById('visitTrendsChart');
  if (visitCtx && typeof Chart !== 'undefined') {
    try {
      charts.visitTrends = new Chart(visitCtx.getContext('2d'), {
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
          },
          interaction: {
            intersect: false,
            mode: 'index'
          }
        }
      });
    } catch (error) {
      console.warn('Failed to initialize visit trends chart:', error);
    }
  }

  // Sample Distribution Chart
  const sampleCtx = document.getElementById('sampleDistributionChart');
  if (sampleCtx && typeof Chart !== 'undefined') {
    try {
      charts.sampleDistribution = new Chart(sampleCtx.getContext('2d'), {
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
    } catch (error) {
      console.warn('Failed to initialize sample distribution chart:', error);
    }
  }
}

function updateActivityFeed() {
  const activities = [
    { icon: 'fas fa-user-check', color: '#1FB8CD', text: 'Dr. Rajesh Kumar completed visit to Dr. Suresh Gupta', time: '2 hours ago' },
    { icon: 'fas fa-flask', color: '#FFC185', text: 'Sample approved by Dr. Ravi Reddy', time: '3 hours ago' },
    { icon: 'fas fa-truck', color: '#B4413C', text: 'Stock delivery completed to Mumbai West', time: '4 hours ago' },
    { icon: 'fas fa-calendar', color: '#5D878F', text: 'New visit scheduled with Dr. Meera Singh', time: '5 hours ago' }
  ];
  
  const activityList = document.getElementById('activity-list');
  if (activityList) {
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
  
  if (agentsGrid) {
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
          <button class="action-btn" onclick="viewAgent(${agent.id})" title="View Details">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" onclick="editAgent(${agent.id})" title="Edit Agent">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn" onclick="contactAgent(${agent.id})" title="Contact Agent">
            <i class="fas fa-phone"></i>
          </button>
        </div>
      </div>
    `).join('');
  }
}

function initializeAgentFilters() {
  const searchInput = document.getElementById('agent-search');
  const filterSelect = document.getElementById('agent-filter');
  
  if (searchInput) searchInput.addEventListener('input', filterAgents);
  if (filterSelect) filterSelect.addEventListener('change', filterAgents);
}

function filterAgents() {
  const searchInput = document.getElementById('agent-search');
  const filterSelect = document.getElementById('agent-filter');
  
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const statusFilter = filterSelect ? filterSelect.value : 'all';
  
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
  const addAgentBtn = document.getElementById('add-agent-btn');
  const quickActionBtn = document.getElementById('quick-action-btn');
  
  if (addAgentBtn) {
    addAgentBtn.addEventListener('click', () => showAddAgentModal());
  }
  
  if (quickActionBtn) {
    quickActionBtn.addEventListener('click', () => {
      if (isMobile) {
        showQuickActionMenu();
      } else {
        showAddAgentModal();
      }
    });
  }
}

function viewAgent(agentId) {
  const agent = appData.agents.find(a => a.id === agentId);
  if (agent) {
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
}

function editAgent(agentId) {
  const agent = appData.agents.find(a => a.id === agentId);
  if (agent) {
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
}

function contactAgent(agentId) {
  const agent = appData.agents.find(a => a.id === agentId);
  if (agent) {
    window.open(`tel:${agent.phone}`);
  }
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
  
  if (visitsTableBody) {
    visitsTableBody.innerHTML = visits.map(visit => `
      <tr>
        <td>${visit.agentName}</td>
        <td>${visit.doctorName}</td>
        <td>${visit.date} ${visit.time}</td>
        <td>${visit.location}</td>
        <td><span class="status-badge ${visit.status.toLowerCase()}">${visit.status}</span></td>
        <td>${visit.samplesGiven}</td>
        <td>
          <button class="action-btn" onclick="viewVisit(${visit.id})" title="View Details">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" onclick="editVisit(${visit.id})" title="Edit Visit">
            <i class="fas fa-edit"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }
}

function initializeVisitFilters() {
  const dateFilter = document.getElementById('visit-date-filter');
  const statusFilter = document.getElementById('visit-status-filter');
  
  if (dateFilter) dateFilter.addEventListener('change', filterVisits);
  if (statusFilter) statusFilter.addEventListener('change', filterVisits);
}

function filterVisits() {
  const dateFilter = document.getElementById('visit-date-filter');
  const statusFilter = document.getElementById('visit-status-filter');
  
  const dateValue = dateFilter ? dateFilter.value : '';
  const statusValue = statusFilter ? statusFilter.value : 'all';
  
  let filteredVisits = appData.visits.filter(visit => {
    const matchesDate = !dateValue || visit.date === dateValue;
    const matchesStatus = statusValue === 'all' || visit.status.toLowerCase() === statusValue;
    
    return matchesDate && matchesStatus;
  });
  
  renderVisits(filteredVisits);
}

function initializeVisitActions() {
  const scheduleVisitBtn = document.getElementById('schedule-visit-btn');
  if (scheduleVisitBtn) {
    scheduleVisitBtn.addEventListener('click', () => showScheduleVisitModal());
  }
}

function viewVisit(visitId) {
  const visit = appData.visits.find(v => v.id === visitId);
  if (visit) {
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
}

function editVisit(visitId) {
  // Placeholder for edit visit functionality
  showModal('Edit Visit', '<p>Edit visit functionality would be implemented here.</p>');
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
  
  if (productsGrid) {
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
  
  const elements = {
    'total-products': totalProducts,
    'low-stock-items': lowStockItems,
    'expiring-items': expiringItems
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function initializeDistributionActions() {
  const addProductBtn = document.getElementById('add-product-btn');
  if (addProductBtn) {
    addProductBtn.addEventListener('click', () => showAddProductModal());
  }
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
  
  if (samplesTableBody) {
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
          <button class="action-btn" onclick="viewSample(${sample.id})" title="View Details">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" onclick="updateSampleStatus(${sample.id})" title="Update Status">
            <i class="fas fa-edit"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }
}

function initializeSampleFilters() {
  const statusFilter = document.getElementById('sample-status-filter');
  const agentFilter = document.getElementById('sample-agent-filter');
  
  // Populate agent filter
  if (agentFilter) {
    const agentOptions = ['<option value="all">All Agents</option>']
      .concat(appData.agents.map(agent => `<option value="${agent.name}">${agent.name}</option>`));
    agentFilter.innerHTML = agentOptions.join('');
  }
  
  if (statusFilter) statusFilter.addEventListener('change', filterSamples);
  if (agentFilter) agentFilter.addEventListener('change', filterSamples);
}

function filterSamples() {
  const statusFilter = document.getElementById('sample-status-filter');
  const agentFilter = document.getElementById('sample-agent-filter');
  
  const statusValue = statusFilter ? statusFilter.value : 'all';
  const agentValue = agentFilter ? agentFilter.value : 'all';
  
  let filteredSamples = appData.samples.filter(sample => {
    const matchesStatus = statusValue === 'all' || sample.status.toLowerCase() === statusValue;
    const matchesAgent = agentValue === 'all' || sample.agentName === agentValue;
    
    return matchesStatus && matchesAgent;
  });
  
  renderSamples(filteredSamples);
}

function initializeSampleActions() {
  const allocateSampleBtn = document.getElementById('allocate-sample-btn');
  if (allocateSampleBtn) {
    allocateSampleBtn.addEventListener('click', () => showAllocateSampleModal());
  }
}

function viewSample(sampleId) {
  const sample = appData.samples.find(s => s.id === sampleId);
  if (sample) {
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
  setTimeout(initializeReportCharts, 200); // Delay for better loading
  initializeReportActions();
}

function initializeReportCharts() {
  // Agent Performance Chart
  const agentPerfCtx = document.getElementById('agentPerformanceChart');
  if (agentPerfCtx && typeof Chart !== 'undefined') {
    try {
      charts.agentPerformance = new Chart(agentPerfCtx.getContext('2d'), {
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
    } catch (error) {
      console.warn('Failed to initialize agent performance chart:', error);
    }
  }

  // Territory Analysis Chart
  const territoryCtx = document.getElementById('territoryChart');
  if (territoryCtx && typeof Chart !== 'undefined') {
    try {
      charts.territory = new Chart(territoryCtx.getContext('2d'), {
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
    } catch (error) {
      console.warn('Failed to initialize territory chart:', error);
    }
  }

  // Sample Approval Rate Chart
  const approvalCtx = document.getElementById('approvalRateChart');
  if (approvalCtx && typeof Chart !== 'undefined') {
    try {
      charts.approvalRate = new Chart(approvalCtx.getContext('2d'), {
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
    } catch (error) {
      console.warn('Failed to initialize approval rate chart:', error);
    }
  }

  // Stock Movement Trends Chart
  const stockCtx = document.getElementById('stockMovementChart');
  if (stockCtx && typeof Chart !== 'undefined') {
    try {
      charts.stockMovement = new Chart(stockCtx.getContext('2d'), {
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
    } catch (error) {
      console.warn('Failed to initialize stock movement chart:', error);
    }
  }
}

function initializeReportActions() {
  const generateReportBtn = document.getElementById('generate-report-btn');
  if (generateReportBtn) {
    generateReportBtn.addEventListener('click', () => generateReport());
  }
}

function generateReport() {
  const startDate = document.getElementById('report-start-date');
  const endDate = document.getElementById('report-end-date');
  
  const startValue = startDate ? startDate.value : '';
  const endValue = endDate ? endDate.value : '';
  
  if (!startValue || !endValue) {
    alert('Please select both start and end dates');
    return;
  }
  
  // Simulate report generation
  showModal('Report Generated', `
    <div class="report-summary">
      <h4>Report Summary (${startValue} to ${endValue})</h4>
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
  
  const doctorsElement = document.getElementById('doctors-visited');
  const samplesElement = document.getElementById('samples-distributed');
  
  if (doctorsElement) doctorsElement.textContent = randomVisits;
  if (samplesElement) samplesElement.textContent = randomSamples;
  
  updateActivityFeed();
}

// Form submission handlers
function addAgent(event) {
  event.preventDefault();
  const inputs = event.target.elements;
  
  const newAgent = {
    id: appData.agents.length + 1,
    name: inputs[0].value,
    territory: inputs[1].value,
    phone: inputs[2].value,
    email: inputs[3].value,
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
  
  if (agent) {
    agent.name = inputs[0].value;
    agent.territory = inputs[1].value;
    agent.phone = inputs[2].value;
    agent.email = inputs[3].value;
    agent.status = inputs[4].value;
    
    renderAgents();
    closeModal();
  }
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
    notes: inputs[5].value || '',
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
  
  const stockLevel = parseInt(inputs[2].value);
  const minStock = parseInt(inputs[3].value);
  let status = 'In Stock';
  
  if (stockLevel <= minStock * 0.5) {
    status = 'Critical Stock';
  } else if (stockLevel <= minStock) {
    status = 'Low Stock';
  }
  
  const newProduct = {
    id: appData.products.length + 1,
    name: inputs[0].value,
    category: inputs[1].value,
    stockLevel: stockLevel,
    minStock: minStock,
    price: parseFloat(inputs[4].value),
    batchNumber: inputs[5].value,
    expiryDate: inputs[6].value,
    status: status
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
    batchNumber: 'TBD' + String(appData.samples.length + 1).padStart(3, '0')
  };
  
  appData.samples.push(newSample);
  renderSamples();
  closeModal();
}

function updateSampleStatus(sampleId) {
  const sample = appData.samples.find(s => s.id === sampleId);
  if (sample) {
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
}

function saveSampleStatus(event, sampleId) {
  event.preventDefault();
  const sample = appData.samples.find(s => s.id === sampleId);
  const inputs = event.target.elements;
  
  if (sample) {
    sample.status = inputs[0].value;
    sample.feedback = inputs[1].value;
    
    renderSamples();
    closeModal();
  }
}