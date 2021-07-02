const Joi = require("@hapi/joi");

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

module.exports = validate;
