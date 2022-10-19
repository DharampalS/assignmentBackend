const Joi = require('joi')
const commonValidation =(request,schema)=>{
const {error,value} = schema.validate(request)
if(error){
    throw new Error(error.details ? error.details[0].message.replace(/['"]+/g, '') : error)
}
else return;
};

// Validator
exports.userValidation = (request)=>{
    const registerSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/)).required()
    });
    return commonValidation(request,registerSchema);
}