module.exports = (err, req, res, next) => {
  let error = { ...err };

  console.log(err.stack);

  return res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error !!!',
  });
};
