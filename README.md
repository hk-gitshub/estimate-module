# Estimate Module Project

This repository contains a frontend (React) and a backend (Node.js) for the Estimate Module. Follow the instructions below to set up and run the project after cloning the repository.

## Project Structure

```
project-root/
├── backend/              # Node.js backend
│   ├── server.js         # Main server file
│   ├── details.json      # json data for the estimate
│   ├── package.json      
│   ├── package-lock.json             
├── frontend/             # React frontend
│   ├── public/           # Static files (e.g., index.html)
│   ├── src/              # React components and logic
│   ├── package.json
│   ├── package-lock.json  
│   ├── postcss.config.js   
│   └── tailwind.config.js # Tailwind CSS config file
└── README.md             # Project README
```


### Prerequisites

    Node.js (v16 or later)
    React.js and Tailwind CSS
    npm or yarn
    Git

### Clone the Repository

```bash
git clone https://github.com/your-username/estimate-module.git
cd estimate-module
```

### Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash 
    node server.js
    ```

The server will run at ```http://localhost:8000```

### Frontend setup

1. Navigate to the frontend folder:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash 
    node start
    ```

## Test the Application

1. Open your browser and visit: ```http://localhost:3000```

2. The frontend will fetch data from the backend
(```http://localhost:8000/details```) and display it.
