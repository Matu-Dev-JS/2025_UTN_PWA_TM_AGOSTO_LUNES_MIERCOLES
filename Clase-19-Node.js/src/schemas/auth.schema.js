import Joi from 'joi';


export const registerSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'es'] } })
        .required()
        .messages({
            'string.email': 'Email no válido',
            'string.empty': 'El email es requerido',
            'any.required': 'El email es requerido'
        }),
    
    name: Joi.string()
        .min(4)
        .max(50)
        .required()
        .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
        .messages({
            'string.min': 'El nombre debe tener al menos 4 caracteres',
            'string.max': 'El nombre no puede tener más de 50 caracteres',
            'string.empty': 'El nombre es requerido',
            'any.required': 'El nombre es requerido',
            'string.pattern.base': 'El nombre solo puede contener letras y espacios'
        }),
    
    password: Joi.string()
        .min(6)
        .max(30)
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .messages({
            'string.min': 'La contraseña debe tener al menos 6 caracteres',
            'string.max': 'La contraseña no puede tener más de 30 caracteres',
            'string.empty': 'La contraseña es requerida',
            'any.required': 'La contraseña es requerida',
            'string.pattern.base': 'La contraseña debe contener al menos una mayúscula, una minúscula y un número'
        })
});


export const loginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'es'] } })
        .required()
        .messages({
            'string.email': 'Email no válido',
            'string.empty': 'El email es requerido',
            'any.required': 'El email es requerido'
        }),
    
    password: Joi.string()
        .min(6)
        .max(30)
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .messages({
            'string.min': 'La contraseña debe tener al menos 6 caracteres',
            'string.max': 'La contraseña no puede tener más de 30 caracteres',
            'string.empty': 'La contraseña es requerida',
            'any.required': 'La contraseña es requerida',
            'string.pattern.base': 'La contraseña debe contener al menos una mayúscula, una minúscula y un número'
        })
});