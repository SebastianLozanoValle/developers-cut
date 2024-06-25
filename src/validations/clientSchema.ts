// import {z} from 'zod'

// const services = ['desarrollo web', 'ecommerce'] as const

// export const clientSchema = z.object({
//     name: z.string().min(3, {
//         message: 'Este campo debe tener por lo menos 3 caracteres'
//     }).max(50, {
//         message: 'Exte campo debe tener menos de 50 caracteres'
//     }),
//     // service: z.enum(services, {
//     //     errorMap: () => ({message: 'Por favor elija una opcion valida'})
//     // })
// })
import { number, z } from "zod";

const services = ['desarrollo web', 'ecommerce'] as const;

export const clientSchema = z.object({
    name: z.string().min(3, {
        message: 'Este campo debe tener por lo menos 3 caracteres'
    }).max(50, {
        message: 'Este campo debe tener menos de 50 caracteres'
    }),
    country: z.string().min(3, {
        message: 'Este campo debe tener por lo menos 3 caracteres'
    }).max(50, {
        message: 'Este campo debe tener menos de 50 caracteres'
    }),
    phone: z.string().refine((phone) => !isNaN(parseFloat(phone)), {
        message: "Debe dijitar un numero valido",
    }),
    email: z.string().email({
        message: 'Debe ingresar un correo valido'
    }),
    message: z.string().min(1, {
        message: 'Este campo es requerido'
    })
    // service: z.enum(services, {
    //     errorMap: () => ({ message: 'Por favor elija una opción válida' })
    // })
});

export type ClientSchemaType = z.infer<typeof clientSchema>;