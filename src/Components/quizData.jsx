export const quizData = [
  {
    subject: "JavaScript",
    color: "bg-yellow-400/25",
    questions: [
      {
        id: 1,
        question: "What is closure in JavaScript?",
        options: [
          "A function with access to its outer scope",
          "A loop structure",
          "A type of variable",
          "An event handler"
        ],
        correctAnswer: 0,
        explanation: "A closure allows a function to access variables from its outer (parent) scope even after the parent function has executed."
      },
      {
        id: 2,
        question: "Which keyword declares a constant?",
        options: ["let", "var", "const", "static"],
        correctAnswer: 2,
        explanation: "'const' is used to declare variables whose values cannot be reassigned."
      },
      {
        id: 3,
        question: "What does '===' mean?",
        options: ["Assignment", "Loose equality", "Strict equality", "Negation"],
        correctAnswer: 2,
        explanation: "'===' checks for both value and type equality, unlike '==' which only checks value."
      },
      {
        id: 4,
        question: "What is typeof null?",
        options: ["null", "object", "undefined", "number"],
        correctAnswer: 1,
        explanation: "This is a known JavaScript bug — 'typeof null' returns 'object'."
      },
      {
        id: 5,
        question: "Which method converts JSON to object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        correctAnswer: 0,
        explanation: "JSON.parse() converts a JSON string into a JavaScript object."
      },
      {
        id: 6,
        question: "Which is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correctAnswer: 2,
        explanation: "JavaScript does not have a 'Float' type — numbers are all of type 'number'."
      },
      {
        id: 7,
        question: "What does NaN stand for?",
        options: ["No assigned number", "Not a Number", "Negative and Null", "Null and None"],
        correctAnswer: 1,
        explanation: "NaN means 'Not a Number' and represents invalid numeric operations."
      },
      {
        id: 8,
        question: "Which array method adds item to end?",
        options: ["push()", "pop()", "shift()", "concat()"],
        correctAnswer: 0,
        explanation: "push() adds one or more elements to the end of an array."
      },
      {
        id: 9,
        question: "Which loop runs at least once?",
        options: ["for", "while", "do...while", "foreach"],
        correctAnswer: 2,
        explanation: "do...while executes the code block first before checking the condition."
      },
      {
        id: 10,
        question: "Which keyword stops a loop?",
        options: ["exit", "stop", "break", "return"],
        correctAnswer: 2,
        explanation: "The 'break' statement immediately exits a loop."
      }
    ]
  },
  {
    subject: "React",
    color: "bg-blue-400/25",
    questions: [
      {
        id: 1,
        question: "React is mainly used for?",
        options: ["Backend", "UI", "Database", "AI"],
        correctAnswer: 1,
        explanation: "React is a frontend library used for building user interfaces."
      },
      {
        id: 2,
        question: "Hook for state?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        correctAnswer: 1,
        explanation: "useState allows functional components to manage state."
      },
      {
        id: 3,
        question: "JSX stands for?",
        options: ["JS XML", "Java Syntax Extension", "JSON XML", "JavaScript XML"],
        correctAnswer: 3,
        explanation: "JSX stands for JavaScript XML — it lets you write HTML inside JavaScript."
      },
      {
        id: 4,
        question: "Props are?",
        options: ["Internal data", "External data", "Hooks", "Events"],
        correctAnswer: 1,
        explanation: "Props are used to pass data from parent to child components."
      },
      {
        id: 5,
        question: "Which hook handles side effects?",
        options: ["useState", "useEffect", "useMemo", "useCallback"],
        correctAnswer: 1,
        explanation: "useEffect is used for side effects like API calls or DOM updates."
      },
      {
        id: 6,
        question: "React uses what DOM?",
        options: ["Real DOM", "Shadow DOM", "Virtual DOM", "Native DOM"],
        correctAnswer: 2,
        explanation: "React uses a Virtual DOM to improve performance by minimizing direct DOM manipulation."
      },
      {
        id: 7,
        question: "Key prop is used for?",
        options: ["Styling", "Identifying list items", "State", "Routing"],
        correctAnswer: 1,
        explanation: "Keys help React identify which items have changed in a list."
      },
      {
        id: 8,
        question: "Which hook references DOM?",
        options: ["useState", "useRef", "useEffect", "useMemo"],
        correctAnswer: 1,
        explanation: "useRef is used to access DOM elements directly."
      },
      {
        id: 9,
        question: "State updates are?",
        options: ["Synchronous", "Asynchronous", "Immediate", "Blocking"],
        correctAnswer: 1,
        explanation: "State updates in React are asynchronous for performance optimization."
      },
      {
        id: 10,
        question: "Component must return?",
        options: ["String", "JSX", "Number", "Boolean"],
        correctAnswer: 1,
        explanation: "A React component must return JSX to render UI."
      }
    ]
  },
   {
    subject: "Node.js",
    color: "bg-green-400/25",
    questions: [
      {
        id: 1,
        question: "What is Node.js?",
        options: [
          "A frontend framework",
          "A runtime for JavaScript",
          "A database",
          "A browser"
        ],
        correctAnswer: 1,
        explanation: "Node.js is a JavaScript runtime that allows you to run JS outside the browser."
      },
      {
        id: 2,
        question: "Which module is used to create a server?",
        options: ["fs", "http", "url", "path"],
        correctAnswer: 1,
        explanation: "The 'http' module is used to create web servers in Node.js."
      },
      {
        id: 3,
        question: "What does npm stand for?",
        options: [
          "Node Package Manager",
          "New Project Module",
          "Node Process Manager",
          "Next Programming Mode"
        ],
        correctAnswer: 0,
        explanation: "npm is the default package manager for Node.js."
      },
      {
        id: 4,
        question: "Which keyword exports a module?",
        options: ["export", "module.exports", "require", "define"],
        correctAnswer: 1,
        explanation: "module.exports is used to export functions or objects in Node.js."
      },
      {
        id: 5,
        question: "Which function imports a module?",
        options: ["import()", "require()", "use()", "include()"],
        correctAnswer: 1,
        explanation: "require() is used to import modules in Node.js."
      },
      {
        id: 6,
        question: "Which module handles file system?",
        options: ["fs", "file", "system", "os"],
        correctAnswer: 0,
        explanation: "The 'fs' module is used for file operations."
      },
      {
        id: 7,
        question: "Node.js is single-threaded?",
        options: ["Yes", "No", "Sometimes", "Only in dev"],
        correctAnswer: 0,
        explanation: "Node.js uses a single-threaded event loop for handling requests."
      },
      {
        id: 8,
        question: "Which is used for async operations?",
        options: ["Callbacks", "Promises", "Async/Await", "All of the above"],
        correctAnswer: 3,
        explanation: "Node.js supports callbacks, promises, and async/await."
      },
      {
        id: 9,
        question: "What does __dirname return?",
        options: ["File name", "Directory path", "Server URL", "Port"],
        correctAnswer: 1,
        explanation: "__dirname returns the current directory path."
      },
      {
        id: 10,
        question: "Which command runs a Node file?",
        options: ["run file.js", "node file.js", "start file.js", "npm file.js"],
        correctAnswer: 1,
        explanation: "Use 'node file.js' to execute a Node.js file."
      }
    ]
  },
  {
    subject: "Git",
    color: "bg-orange-800/25",
    questions: [
      {
        id: 1,
        question: "What is Git?",
        options: [
          "A programming language",
          "A version control system",
          "A database",
          "A framework"
        ],
        correctAnswer: 1,
        explanation: "Git is used to track changes in code over time."
      },
      {
        id: 2,
        question: "Which command initializes a repo?",
        options: ["git start", "git init", "git create", "git new"],
        correctAnswer: 1,
        explanation: "git init creates a new repository."
      },
      {
        id: 3,
        question: "Which command adds files?",
        options: ["git push", "git add", "git commit", "git stage"],
        correctAnswer: 1,
        explanation: "git add stages files for commit."
      },
      {
        id: 4,
        question: "Which command commits changes?",
        options: ["git save", "git commit", "git push", "git store"],
        correctAnswer: 1,
        explanation: "git commit saves changes to the repository."
      },
      {
        id: 5,
        question: "Which command uploads to remote?",
        options: ["git send", "git push", "git upload", "git sync"],
        correctAnswer: 1,
        explanation: "git push sends commits to a remote repository."
      },
      {
        id: 6,
        question: "Which command downloads repo?",
        options: ["git pull", "git clone", "git fetch", "All"],
        correctAnswer: 3,
        explanation: "clone, pull, and fetch can all retrieve data in different ways."
      },
      {
        id: 7,
        question: "Branching is used for?",
        options: ["Deleting code", "Parallel development", "Styling", "Testing only"],
        correctAnswer: 1,
        explanation: "Branches allow working on features independently."
      },
      {
        id: 8,
        question: "Default branch name?",
        options: ["master", "main", "root", "base"],
        correctAnswer: 1,
        explanation: "Modern Git uses 'main' as the default branch."
      },
      {
        id: 9,
        question: "Merge does?",
        options: ["Deletes code", "Combines branches", "Pushes code", "Commits"],
        correctAnswer: 1,
        explanation: "Merging combines changes from different branches."
      },
      {
        id: 10,
        question: "git status shows?",
        options: ["History", "Current state", "Remote repo", "Branches"],
        correctAnswer: 1,
        explanation: "git status shows the working directory state."
      }
    ]
  },
  {
    subject: "Web Fundamentals",
    color: "bg-purple-600/25",
    questions: [
      {
        id: 1,
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Transfer Text Protocol",
          "Hyper Tool Transfer Protocol",
          "Home Transfer Protocol"
        ],
        correctAnswer: 0,
        explanation: "HTTP is the protocol used for web communication."
      },
      {
        id: 2,
        question: "What is a URL?",
        options: [
          "A database",
          "Web address",
          "A server",
          "A browser"
        ],
        correctAnswer: 1,
        explanation: "A URL is the address used to access resources online."
      },
      {
        id: 3,
        question: "Frontend runs where?",
        options: ["Server", "Browser", "Database", "Cloud"],
        correctAnswer: 1,
        explanation: "Frontend code runs in the browser."
      },
      {
        id: 4,
        question: "Backend runs where?",
        options: ["Browser", "Server", "Client", "UI"],
        correctAnswer: 1,
        explanation: "Backend code runs on the server."
      },
      {
        id: 5,
        question: "API stands for?",
        options: [
          "Application Programming Interface",
          "Advanced Program Input",
          "App Process Integration",
          "Applied Programming Internet"
        ],
        correctAnswer: 0,
        explanation: "API allows communication between software systems."
      },
      {
        id: 6,
        question: "What is JSON?",
        options: [
          "Data format",
          "Database",
          "Language",
          "Framework"
        ],
        correctAnswer: 0,
        explanation: "JSON is a lightweight data format for exchanging data."
      },
      {
        id: 7,
        question: "HTTPS is?",
        options: ["Secure HTTP", "Fast HTTP", "Local HTTP", "Private HTTP"],
        correctAnswer: 0,
        explanation: "HTTPS is HTTP with encryption (SSL/TLS)."
      },
      {
        id: 8,
        question: "Client sends request to?",
        options: ["Database", "Server", "UI", "Browser"],
        correctAnswer: 1,
        explanation: "The client sends requests to a server."
      },
      {
        id: 9,
        question: "Server returns?",
        options: ["Request", "Response", "Query", "Command"],
        correctAnswer: 1,
        explanation: "The server sends back a response."
      },
      {
        id: 10,
        question: "What is a browser?",
        options: [
          "A server",
          "Software to access web",
          "Database",
          "API"
        ],
        correctAnswer: 1,
        explanation: "Browsers like Chrome allow users to access websites."
      }
    ]
  }
];