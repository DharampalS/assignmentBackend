// Success response
exports.successResponse = (res, message) => {
  const response = {};
  response.status = 200;
  response.message = message;
  res.json(response);
};

// Error response
exports.errorResponse = (res, message) => {
  const response = {};
  response.status = 400;
  response.message = message;
  res.json(response);
};
