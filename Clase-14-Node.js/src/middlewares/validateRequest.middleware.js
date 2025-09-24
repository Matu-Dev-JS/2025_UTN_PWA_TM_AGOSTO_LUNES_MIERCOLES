
import Joi from 'joi';

export const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { 
            abortEarly: false,
            stripUnknown: true 
        });
        
        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            return res.status(400).json({
                ok: false,
                message: errorMessages.join(', '),
                status: 400
            });
        }

        
        req.body = value;
        next();
    };
};