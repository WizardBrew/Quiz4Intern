const projectBank = [
  // BCA Projects
  {
    title: "Student Management System",
    description: "A CRUD app to manage student records with login and role-based access.",
    url: "https://github.com/suraj122/Student-Management-System",
    category: "BCA",
    level: "beginner"
  },
  {
    title: "Portfolio Website",
    description: "Build a personal website to showcase resume and skills using HTML/CSS/JS.",
    url: "https://github.com/sal0man/simple-portfolio-website",
    category: "BCA",
    level: "beginner"
  },
  {
    title: "To-Do List App",
    description: "A web app to add, update, and delete to-do tasks using localStorage.",
    url: "https://github.com/mdbootstrap/bootstrap-todo-list",
    category: "BCA",
    level: "beginner"
  },
  {
    title: "Library Management System",
    description: "Manage books, users, and transactions using PHP and MySQL.",
    url: "https://github.com/Tanishq-Sharma07/Library-Management-System",
    category: "BCA",
    level: "intermediate"
  },
  {
    title: "Online Quiz App",
    description: "A responsive quiz app with timer and scoring logic.",
    url: "https://github.com/CodLancer/Online-Quiz-App",
    category: "BCA",
    level: "intermediate"
  },
  {
    title: "Chat Application",
    description: "Real-time chat using Node.js and Socket.IO.",
    url: "https://github.com/kaushalmodi/chatapp",
    category: "BCA",
    level: "intermediate"
  },
  {
    title: "E-commerce Website",
    description: "A full-stack website to buy/sell products with cart and payment options.",
    url: "https://github.com/hemant101/E-commerce-Website",
    category: "BCA",
    level: "expert"
  },
  {
    title: "Face Recognition Attendance System",
    description: "Python-based attendance system using OpenCV.",
    url: "https://github.com/Mjrovai/OpenCV-Face-Recognition",
    category: "BCA",
    level: "expert"
  },
  {
    title: "Cloud File Storage System",
    description: "Secure cloud storage app with user access and file upload.",
    url: "https://github.com/Ritik2703/Cloud-Storage-System",
    category: "BCA",
    level: "expert"
  },
  {
    title: "Online Compiler",
    description: "Build a code compiler using React and an API backend.",
    url: "https://github.com/Ashutosh00710/Online-Compiler",
    category: "BCA",
    level: "expert"
  },

  // BBA Projects
  {
    title: "SWOT Analysis of a Company",
    description: "Prepare a SWOT analysis report for a known company.",
    url: "https://www.marketing91.com/swot-analysis-apple/",
    category: "BBA",
    level: "beginner"
  },
  {
    title: "Customer Satisfaction Survey",
    description: "Conduct a survey and analyze customer satisfaction metrics.",
    url: "https://www.surveymonkey.com/mp/customer-satisfaction-survey-templates/",
    category: "BBA",
    level: "beginner"
  },
  {
    title: "Marketing Strategy for a Startup",
    description: "Design a marketing plan for a new product or service.",
    url: "https://www.shopify.com/blog/marketing-plan",
    category: "BBA",
    level: "beginner"
  },
  {
    title: "Financial Statement Analysis",
    description: "Analyze the financial performance of a listed company.",
    url: "https://github.com/saifulislamdev/financial-analysis",
    category: "BBA",
    level: "intermediate"
  },
  {
    title: "HR Management Portal",
    description: "Web portal for employee records, leave, and payroll.",
    url: "https://github.com/rohitrajbiradar/Employee-Management-System",
    category: "BBA",
    level: "intermediate"
  },
  {
    title: "Digital Marketing Campaign",
    description: "Create a complete digital marketing campaign with KPIs.",
    url: "https://www.hubspot.com/digital-marketing",
    category: "BBA",
    level: "intermediate"
  },
  {
    title: "Inventory Management System",
    description: "Track product stock, vendors, and orders in real-time.",
    url: "https://github.com/Thuva4/Inventory-Management-System",
    category: "BBA",
    level: "expert"
  },
  {
    title: "Business Plan for E-commerce Startup",
    description: "Draft a full business plan with financial projections.",
    url: "https://www.score.org/resource/business-plan-template-startup-business",
    category: "BBA",
    level: "expert"
  },
  {
    title: "CRM Dashboard",
    description: "Dashboard to track leads, sales pipeline and customer data.",
    url: "https://github.com/Ashutosh00710/CRM-Dashboard",
    category: "BBA",
    level: "expert"
  },
  {
    title: "Operations Research Optimization",
    description: "Solve a business problem using linear programming.",
    url: "https://github.com/pvlib/pvlib-python",
    category: "BBA",
    level: "expert"
  },

  // B.Com Projects
  {
    title: "Cash Book Management System",
    description: "Record daily cash transactions using Excel or app.",
    url: "https://github.com/dev-vishalgaurav/Accounting-Software",
    category: "B.Com",
    level: "beginner"
  },
  {
    title: "GST Filing Simulation",
    description: "Create a mock GST filing system using Google Sheets.",
    url: "https://cleartax.in/s/gst-return-filing",
    category: "B.Com",
    level: "beginner"
  },
  {
    title: "Tally ERP Practice Setup",
    description: "Simulate company accounts using Tally software.",
    url: "https://tallysolutions.com/",
    category: "B.Com",
    level: "beginner"
  },
  {
    title: "Ratio Analysis of a Company",
    description: "Analyze financial ratios of a listed firm.",
    url: "https://github.com/SonalSahu/Financial-Ratio-Analysis",
    category: "B.Com",
    level: "intermediate"
  },
  {
    title: "Final Accounts Preparation",
    description: "Prepare trading, profit & loss and balance sheet.",
    url: "https://www.accountingtools.com/articles/how-to-prepare-final-accounts.html",
    category: "B.Com",
    level: "intermediate"
  },
  {
    title: "Budget Preparation Project",
    description: "Make a sample departmental or household budget.",
    url: "https://www.vertex42.com/ExcelTemplates/personal-budget-spreadsheet.html",
    category: "B.Com",
    level: "intermediate"
  },
  {
    title: "Cost Accounting Case Study",
    description: "Apply costing methods to a manufacturing example.",
    url: "https://github.com/ugglr/cost-accounting-project",
    category: "B.Com",
    level: "expert"
  },
  {
    title: "Income Tax Calculation System",
    description: "Build a calculator based on Indian tax slabs.",
    url: "https://github.com/riteshfulecha/Income-Tax-Calculator",
    category: "B.Com",
    level: "expert"
  },
  {
    title: "Auditing & Vouching Project",
    description: "Design internal audit process for a hypothetical firm.",
    url: "https://www.accountingnotes.net/auditing/what-is-vouching-in-auditing/12364",
    category: "B.Com",
    level: "expert"
  },
  {
    title: "Accounting Software Clone",
    description: "Basic clone of Tally or QuickBooks with ledgers.",
    url: "https://github.com/satishcodes/Accounting-System",
    category: "B.Com",
    level: "expert"
  }
];
