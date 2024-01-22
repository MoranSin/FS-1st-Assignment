const {
    createReport,
    getAllReports,
    getSpecificReport,
    updateReport,
    removeReport,
} = require("./Controller");

const fs = require("fs");
const path = require("path");

const router = (req,res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/")
    {
        const indexPath = path.join(__dirname, './index.html');
        fs.readFile(indexPath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (method === 'GET' && url.startsWith('/scripts/script.js')) {
        const scriptPath = path.join(__dirname, './scripts/script.js');
        fs.readFile(scriptPath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/javascript');
                res.end(data);
            }
        });
    } else if (method === 'GET' && url.startsWith('/style.css')) {
        const stylePath = path.join(__dirname, './style.css');
        fs.readFile(stylePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/css');
                res.end(data);
            }
        });
    } else if (method === "GET" && url === "/reports"){
        // Read operation - get all reports
        getAllReports(req,res);
    } else if ( method === "GET" && url.startsWith("/reports/")){
        // Read operation - get a specific report
        getSpecificReport(req,res);
    } else if ( method === "POST" && url === "/reports"){
        // Create operation - a new report
        createReport(req,res);
    } else if ( method === "PUT" && url.startsWith("/reports/")){
        // Update operation - update report
        updateReport(req,res);
    } else if ( method ==="DELETE" && url.startsWith("/reports/")){
        // Delete operation - delete report
        removeReport(req,res);
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type","text/plain");
        res.end("Invalid route");
    }
};

module.exports = { router };