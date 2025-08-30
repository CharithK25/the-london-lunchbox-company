"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Centralized error handler
const errorHandling = (err, req, res, next) => {
    console.error(err.stack); // full error trace for debugging
    res.status(500).json({
        status: 500,
        message: "Something went wrong!",
        error: err.message, // short error message
    });
};
exports.default = errorHandling;
