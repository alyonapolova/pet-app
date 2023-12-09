const HttpError = require("../../modules/common/HttpError");

const validate = (schema) => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    console.log(value);
  } catch (err) {
    const httpError = new HttpError(422, "Validation error", err.details);
    next(httpError);
  }
};

module.exports = validate;
