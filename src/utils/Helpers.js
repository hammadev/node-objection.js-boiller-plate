export const sendSuccessResponse = (res, message = '', data = {}) => {
    res.json({ status: 1, message, data });
};

export const sendErrorResponse = (res, statusCode = 500, message = '', data = {}) => {
    res.status(statusCode).json({ status: 0, message, data });
};
