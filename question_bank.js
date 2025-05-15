const questionBank = [
  // BCA Questions
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Management Language"],
    answer: "Hyper Text Markup Language",
    category: "BCA",
    level: "beginner"
  },
  {
    question: "Which programming language is primarily used for Android development?",
    options: ["Swift", "Kotlin", "Python", "JavaScript"],
    answer: "Kotlin",
    category: "BCA",
    level: "beginner"
  },
  {
    question: "Which of the following is NOT an operating system?",
    options: ["Windows", "Linux", "Oracle", "macOS"],
    answer: "Oracle",
    category: "BCA",
    level: "beginner"
  },
  {
    question: "What is the default port number for HTTP?",
    options: ["80", "8080", "21", "443"],
    answer: "80",
    category: "BCA",
    level: "beginner"
  },
  {
    question: "Which of the following is used to style HTML pages?",
    options: ["JavaScript", "CSS", "PHP", "SQL"],
    answer: "CSS",
    category: "BCA",
    level: "beginner"
  },
  {
    question: "Which data structure uses FIFO principle?",
    options: ["Stack", "Queue", "Array", "Tree"],
    answer: "Queue",
    category: "BCA",
    level: "intermediate"
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Standard Query Language"],
    answer: "Structured Query Language",
    category: "BCA",
    level: "intermediate"
  },
  {
    question: "Which sorting algorithm has the best average case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
    answer: "Quick Sort",
    category: "BCA",
    level: "intermediate"
  },
  {
    question: "What is normalization in DBMS?",
    options: ["Deleting duplicate records", "Dividing data into small tables", "Storing data in a single table", "None of the above"],
    answer: "Dividing data into small tables",
    category: "BCA",
    level: "intermediate"
  },
  {
    question: "Which logic gate outputs true only when inputs differ?",
    options: ["AND", "OR", "XOR", "NAND"],
    answer: "XOR",
    category: "BCA",
    level: "intermediate"
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    answer: "O(log n)",
    category: "BCA",
    level: "expert"
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
    answer: "MongoDB",
    category: "BCA",
    level: "expert"
  },
  {
    question: "Which of the following protocols is used for secure communication over a computer network?",
    options: ["HTTP", "FTP", "TCP", "HTTPS"],
    answer: "HTTPS",
    category: "BCA",
    level: "expert"
  },
  {
    question: "In OOP, what does 'polymorphism' mean?",
    options: ["Having many forms", "Data hiding", "Inheritance", "Encapsulation"],
    answer: "Having many forms",
    category: "BCA",
    level: "expert"
  },
  {
    question: "What is the purpose of the OSI model in networking?",
    options: ["Data encryption", "Routing", "Standardizing communication", "Assigning IP addresses"],
    answer: "Standardizing communication",
    category: "BCA",
    level: "expert"
  },

  // Add 5 more BCA questions (beginner, intermediate, expert mixed)

  // BBA Questions
  {
    question: "What does SWOT stand for?",
    options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Output, Targets", "Strategy, Weakness, Options, Threats", "Structure, Work, Organization, Tactics"],
    answer: "Strengths, Weaknesses, Opportunities, Threats",
    category: "BBA",
    level: "beginner"
  },
  {
    question: "Who is known as the father of modern management?",
    options: ["Elton Mayo", "Peter Drucker", "Henri Fayol", "F.W. Taylor"],
    answer: "Peter Drucker",
    category: "BBA",
    level: "beginner"
  },
  {
    question: "What is the main objective of marketing?",
    options: ["Maximizing profits", "Customer satisfaction", "Increasing production", "Employee retention"],
    answer: "Customer satisfaction",
    category: "BBA",
    level: "beginner"
  },
  {
    question: "Which of the following is NOT a function of management?",
    options: ["Planning", "Staffing", "Cooking", "Controlling"],
    answer: "Cooking",
    category: "BBA",
    level: "beginner"
  },
  {
    question: "Which is the most commonly used pricing strategy?",
    options: ["Cost-plus pricing", "Skimming", "Penetration pricing", "Psychological pricing"],
    answer: "Cost-plus pricing",
    category: "BBA",
    level: "beginner"
  },
  {
    question: "What is Maslow's hierarchy of needs primarily used for?",
    options: ["Marketing strategy", "Employee motivation", "Financial accounting", "Stock management"],
    answer: "Employee motivation",
    category: "BBA",
    level: "intermediate"
  },
  {
    question: "Which financial statement shows a company’s financial position?",
    options: ["Income statement", "Balance sheet", "Cash flow statement", "Expense report"],
    answer: "Balance sheet",
    category: "BBA",
    level: "intermediate"
  },
  {
    question: "What does KPI stand for?",
    options: ["Key Performance Indicator", "Key Planning Initiative", "Knowledge Process Integration", "Known Performance Index"],
    answer: "Key Performance Indicator",
    category: "BBA",
    level: "intermediate"
  },
  {
    question: "Which of the following is a direct tax?",
    options: ["GST", "Customs Duty", "Income Tax", "Sales Tax"],
    answer: "Income Tax",
    category: "BBA",
    level: "intermediate"
  },
  {
    question: "The 4Ps of marketing include Product, Price, Promotion and _____?",
    options: ["People", "Profit", "Place", "Positioning"],
    answer: "Place",
    category: "BBA",
    level: "intermediate"
  },
  {
    question: "What does 'span of control' mean in management?",
    options: ["Time to complete a project", "Hierarchy depth", "Number of subordinates a manager controls", "Market reach"],
    answer: "Number of subordinates a manager controls",
    category: "BBA",
    level: "expert"
  },
  {
    question: "Which type of leadership is based on rewards and punishments?",
    options: ["Transformational", "Transactional", "Autocratic", "Democratic"],
    answer: "Transactional",
    category: "BBA",
    level: "expert"
  },
  {
    question: "What is the break-even point?",
    options: ["Revenue = Cost", "Loss = Revenue", "Cost = 0", "Profit = Revenue"],
    answer: "Revenue = Cost",
    category: "BBA",
    level: "expert"
  },
  {
    question: "What does CRM stand for?",
    options: ["Customer Relationship Management", "Cost Reduction Model", "Customer Retention Model", "Cash Revenue Management"],
    answer: "Customer Relationship Management",
    category: "BBA",
    level: "expert"
  },
  {
    question: "Porter's Five Forces framework helps analyze what?",
    options: ["Market share", "Competitive environment", "Leadership skills", "Customer loyalty"],
    answer: "Competitive environment",
    category: "BBA",
    level: "expert"
  },

  // Add 5 more BBA questions...

  // B.Com Questions
  {
    question: "What is the primary purpose of accounting?",
    options: ["Tax calculation", "Keeping track of financial transactions", "Auditing", "Marketing"],
    answer: "Keeping track of financial transactions",
    category: "B.Com",
    level: "beginner"
  },
  {
    question: "What does GAAP stand for?",
    options: ["Generally Accepted Accounting Principles", "Global Accounting and Auditing Process", "General Agreement on Accounting Practices", "None of the above"],
    answer: "Generally Accepted Accounting Principles",
    category: "B.Com",
    level: "beginner"
  },
  {
    question: "Which of these is a liability?",
    options: ["Cash", "Inventory", "Loan taken", "Machinery"],
    answer: "Loan taken",
    category: "B.Com",
    level: "beginner"
  },
  {
    question: "What is double entry system in accounting?",
    options: ["Recording transaction twice", "Recording in two books", "Debit one account and credit another", "None of the above"],
    answer: "Debit one account and credit another",
    category: "B.Com",
    level: "beginner"
  },
  {
    question: "Which of the following is a real account?",
    options: ["Cash Account", "Rent Account", "Wages Account", "Salary Account"],
    answer: "Cash Account",
    category: "B.Com",
    level: "beginner"
  },
  {
    question: "Which statement reflects the financial performance of a business?",
    options: ["Balance Sheet", "Profit and Loss Account", "Cash Flow Statement", "Bank Statement"],
    answer: "Profit and Loss Account",
    category: "B.Com",
    level: "intermediate"
  },
  {
    question: "Depreciation is recorded as a/an _____",
    options: ["Asset", "Liability", "Expense", "Income"],
    answer: "Expense",
    category: "B.Com",
    level: "intermediate"
  },
  {
    question: "Which of the following is an intangible asset?",
    options: ["Cash", "Building", "Goodwill", "Equipment"],
    answer: "Goodwill",
    category: "B.Com",
    level: "intermediate"
  },
  {
    question: "What does IFRS stand for?",
    options: ["International Financial Reporting Standards", "Indian Financial Reserve System", "International Fiscal Regulatory System", "None of the above"],
    answer: "International Financial Reporting Standards",
    category: "B.Com",
    level: "intermediate"
  },
  {
    question: "Which of the following is not a cash flow activity?",
    options: ["Operating", "Investing", "Financing", "Depreciation"],
    answer: "Depreciation",
    category: "B.Com",
    level: "intermediate"
  },
  {
    question: "What is the formula for Current Ratio?",
    options: ["Current Assets / Current Liabilities", "Total Assets / Total Liabilities", "Fixed Assets / Current Assets", "Cash / Inventory"],
    answer: "Current Assets / Current Liabilities",
    category: "B.Com",
    level: "expert"
  },
  {
    question: "What does a credit balance in the Trial Balance usually represent?",
    options: ["Asset", "Liability", "Expense", "Revenue"],
    answer: "Revenue",
    category: "B.Com",
    level: "expert"
  },
  {
    question: "Which accounting principle assumes business will continue operating?",
    options: ["Accrual", "Matching", "Going Concern", "Conservatism"],
    answer: "Going Concern",
    category: "B.Com",
    level: "expert"
  },
  {
    question: "A budget is usually prepared for a _____ period.",
    options: ["Day", "Week", "Month or Year", "Decade"],
    answer: "Month or Year",
    category: "B.Com",
    level: "expert"
  },
  {
    question: "Which of these is not a financial statement?",
    options: ["Cash Book", "Balance Sheet", "Income Statement", "Cash Flow Statement"],
    answer: "Cash Book",
    category: "B.Com",
    level: "expert"
  }

  // Add 5 more B.Com questions...
];


// =================================================================
// Remaining BCA Questions
remaining [{
  question: "Which of the following is a compiled language?",
  options: ["Python", "Java", "JavaScript", "PHP"],
  answer: "Java",
  category: "BCA",
  level: "beginner"
},
{
  question: "Which of these is not a valid data type in Java?",
  options: ["int", "float", "real", "char"],
  answer: "real",
  category: "BCA",
  level: "beginner"
},
{
  question: "Which layer of the OSI model handles routing?",
  options: ["Data Link", "Session", "Network", "Transport"],
  answer: "Network",
  category: "BCA",
  level: "intermediate"
},
{
  question: "Which algorithm is used for shortest path in graphs?",
  options: ["Prim's", "Dijkstra's", "Kruskal's", "Floyd's"],
  answer: "Dijkstra's",
  category: "BCA",
  level: "expert"
},
{
  question: "In C, what is the size of an int on a 64-bit system?",
  options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
  answer: "4 bytes",
  category: "BCA",
  level: "expert"
},

// Remaining BBA Questions
{
  question: "What is the primary goal of financial management?",
  options: ["Minimize cost", "Increase market share", "Maximize shareholder wealth", "Reduce taxes"],
  answer: "Maximize shareholder wealth",
  category: "BBA",
  level: "beginner"
},
{
  question: "Which type of planning is long-term?",
  options: ["Strategic", "Tactical", "Operational", "Contingency"],
  answer: "Strategic",
  category: "BBA",
  level: "beginner"
},
{
  question: "Which theory is associated with X and Y management styles?",
  options: ["Maslow", "Herzberg", "McGregor", "Taylor"],
  answer: "McGregor",
  category: "BBA",
  level: "intermediate"
},
{
  question: "The Ansoff Matrix is used for what purpose?",
  options: ["Financial analysis", "Risk assessment", "Growth strategy planning", "HR planning"],
  answer: "Growth strategy planning",
  category: "BBA",
  level: "expert"
},
{
  question: "Which act regulates competition in India?",
  options: ["Companies Act", "Contract Act", "Competition Act", "Consumer Protection Act"],
  answer: "Competition Act",
  category: "BBA",
  level: "expert"
},

// Remaining B.Com Questions
{
  question: "What type of account is Capital Account?",
  options: ["Real", "Nominal", "Personal", "None of these"],
  answer: "Personal",
  category: "B.Com",
  level: "beginner"
},
{
  question: "What is the basic accounting equation?",
  options: ["Assets = Liabilities - Capital", "Assets = Liabilities + Capital", "Liabilities = Assets + Capital", "Capital = Assets - Liabilities"],
  answer: "Assets = Liabilities + Capital",
  category: "B.Com",
  level: "beginner"
},
{
  question: "What is a contra entry?",
  options: ["Adjustment entry", "Entry involving two cash/bank accounts", "Correction entry", "Reverse entry"],
  answer: "Entry involving two cash/bank accounts",
  category: "B.Com",
  level: "intermediate"
},
{
  question: "Which of these is used for internal auditing?",
  options: ["Ledger", "Journal", "Trial Balance", "Vouching"],
  answer: "Vouching",
  category: "B.Com",
  level: "intermediate"
},
{
  question: "What is the purpose of the prudence concept in accounting?",
  options: ["To overestimate profits", "To delay losses", "To avoid understatement", "To anticipate losses, not gains"],
  answer: "To anticipate losses, not gains",
  category: "B.Com",
  level: "expert"
}
]
