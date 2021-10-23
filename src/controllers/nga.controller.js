const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { ngaService} = require('../services');

const addNga = catchAsync(async (req, res) => {
  const nga = await ngaService.addNga(req.body)
  res.status(httpStatus.CREATED).send(nga);
});



module.exports = {
  addNga,

};
