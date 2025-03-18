const employee = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "faild": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Prepare the monthly sales report.",
        "taskDate": "2025-03-17",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "faild": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend meeting with client ABC Corp.",
        "taskDate": "2025-03-15",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "faild": true,
        "taskTitle": "Review Budget",
        "taskDescription": "Review quarterly budget report.",
        "taskDate": "2025-03-10",
        "category": "Finance"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "faild": 1
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "faild": false,
        "taskTitle": "System Update",
        "taskDescription": "Update system software to latest version.",
        "taskDate": "2025-03-18",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "faild": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Check and update inventory list.",
        "taskDate": "2025-03-16",
        "category": "Logistics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "faild": true,
        "taskTitle": "Compliance Training",
        "taskDescription": "Complete mandatory compliance training.",
        "taskDate": "2025-03-12",
        "category": "Training"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "faild": 1
    }
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "faild": false,
        "taskTitle": "Team Briefing",
        "taskDescription": "Conduct daily team briefing.",
        "taskDate": "2025-03-19",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "faild": false,
        "taskTitle": "Submit Timesheet",
        "taskDescription": "Submit last week's timesheet.",
        "taskDate": "2025-03-13",
        "category": "Admin"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "faild": true,
        "taskTitle": "Update Profile",
        "taskDescription": "Update personal profile information.",
        "taskDate": "2025-03-11",
        "category": "HR"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "faild": 1
    }
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "faild": true,
        "taskTitle": "Submit Audit",
        "taskDescription": "Submit internal audit documents.",
        "taskDate": "2025-03-10",
        "category": "Audit"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "faild": false,
        "taskTitle": "Policy Review",
        "taskDescription": "Review company policies.",
        "taskDate": "2025-03-18",
        "category": "Policy"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "faild": false,
        "taskTitle": "Attend Webinar",
        "taskDescription": "Attend cybersecurity webinar.",
        "taskDate": "2025-03-14",
        "category": "Training"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "faild": 1
    }
  },
  {
    "id": 5,
    "firstName": "Sanjay",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "faild": false,
        "taskTitle": "Market Research",
        "taskDescription": "Conduct market research survey.",
        "taskDate": "2025-03-20",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "faild": false,
        "taskTitle": "Product Demo",
        "taskDescription": "Give product demo to potential clients.",
        "taskDate": "2025-03-15",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "faild": true,
        "taskTitle": "Data Backup",
        "taskDescription": "Backup all project data.",
        "taskDate": "2025-03-12",
        "category": "IT"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "faild": 1
    }
  }
];


const admin = [
  {
    "id": 1,
    "firstName": "Vikram",
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem("employee" , JSON.stringify(employee));
    localStorage.setItem("admin" , JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return {employee,admin};
}