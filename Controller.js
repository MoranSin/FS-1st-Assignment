const {
    getReports,
    getReport,
    postReport,
    putReport,
    deleteReport,
} = require("./Repository");

// Defining methods

const createReport = (req,res) => {
    // Logic for new report
    const report = req.body;
    const response = postReport(report);
    res.statusCode = 201;
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(response));
};

const getAllReports = (req,res) => {
    // Logic to get all reports
    const response = getReports();
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(response));
};

const getSpecificReport = (req,res) => {
    // Logic to get a specific report
    const urlParts = req.url.split('/');
    const reportID = parseInt(urlParts[2],10);
    const response = getReport(reportID);
    if (response){
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(response));

    } else if (typeof reportID !== "number")
    {
        res.statusCode = 500;
        res.setHeader("Content-Type","text/plain");
        res.end("Unexpected data sent in! GET not accepted. Please send a valid data next time!");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type","text/plain");
        res.end("404 Not Found");
    }
};

const updateReport = (req,res) => {
    // Logic to update a report
    const urlParts = req.url.split('/');
    const reportID = parseInt(urlParts[2],10);
    const user = req.body;
    const response = putReport(reportID, user);
    if (response){
        res.statusCode = 201;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(response));
    } else if (typeof reportID !== "number") {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Unexpected data sent in! GET not accepted. Please send a valid data next time!");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type","text/plain");
        res.end("404 Not Found");
    }
};

const removeReport = (req,res) => {
    // Logic to delete a repost
    const urlParts = req.url.split('/');
    const reportID = parseInt(urlParts[2],10);
    const user = req.body;
    const response = deleteReport(reportID,user);
    if (response){
        res.statusCode = 204;
        res.setHeader("Content-Type","text/plain");
        res.end("The report has been deleted successfully!");

    } else if (typeof response === "undefined")
    {
        res.statusCode = 500;
        res.setHeader("Content-Type","text/plain");
        res.end("Unexpected data sent in! GET not accepted. Please send a valid data next time!");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type","text/plain");
        res.end("404 Not Found");
    }
};

module.exports = { createReport , getAllReports ,getSpecificReport, updateReport, removeReport };