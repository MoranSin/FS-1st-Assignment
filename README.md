# FS 1st Assignment
 The 1st assignment in fullstack course

HTTP Server README
This README provides an overview and usage instructions for the provided HTTP server implemented in Node.js. The server utilizes a simple routing mechanism to handle various HTTP methods, and it includes a basic file-based data storage system for managing reports.

Features
Routing: The server supports basic routing for handling HTTP GET, POST, PUT, and DELETE requests.
Logging: Logging is implemented using Winston, with logs directed to files (error.log and combined.log) and the console during development.
Data Storage: Reports are stored in a JSON file (data.json), and the server provides CRUD operations for managing these reports.
Prerequisites

POSTMAN
https://documenter.getpostman.com/view/31989007/2s9YymH58D

Before running the server, ensure that you have the following dependencies installed:
Node.js: Download Node.js

To start the server, run the following command:
node index.js
By default, the server will be accessible at http://localhost:3000/.

Routes
The server has the following routes:

GET /reports: Get all reports.
GET /reports/{id}: Get a specific report by ID.
POST /reports: Create a new report.
PUT /reports/{id}: Update a report by ID.
DELETE /reports/{id}: Delete a report by ID.
Additionally, the root path ("/") serves an HTML page, and paths for JavaScript and CSS files are also handled.

Example Reports
The provided data.json file contains example reports. You can modify this file or add new reports through the API.

Logging
Logging is implemented using Winston, and logs are stored in error.log and combined.log files. During development, logs are also displayed in the console.

Development
If you're developing in a non-production environment, logs will be displayed in the console. In a production environment, logs will be written to files.

Note
The server is set to run on port 3000 by default. You can change the port by modifying the port variable in index.js.
Feel free to explore, modify, and extend this HTTP server to meet your specific requirements. If you encounter any issues or have suggestions for improvement, please don't hesitate to contribute or reach out to the repository owner.





