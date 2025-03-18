const employee = [
    {
      "id": 1,
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
        }
      ]
    },
    {
      "id": 2,
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
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": []
    },
    {
      "id": 4,
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
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": []
    }
  ];
  
  const admin = [
    {
      "id": 1,
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