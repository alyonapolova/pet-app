const HttpError = require("../../modules/common/HttpError");

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(
      {
        query: req.query,
        body: req.body,
        params: req.params,
      },
      { abortEarly: false }
    );
    next();
  } catch (err) {
    const httpError = new HttpError(422, "Validation error", err.message);
    next(httpError);
  }
};

module.exports = validate;
