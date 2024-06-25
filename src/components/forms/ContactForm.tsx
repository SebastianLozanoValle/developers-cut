// 'use client'

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { clientSchema } from "@/validations/clientSchema"

// export const ContactForm = () => {

//     const { register, handleSubmit, formState: {errors} } = useForm({
//         resolver: zodResolver(clientSchema)
//     })

//     return (
//         <form onSubmit={handleSubmit(data => console.log(data))}>
//             <div>
//                 <label htmlFor="name">
//                     Nombre
//                 </label>
//                 <input type="text" id="name"
//                     {...register('name')}
//                 />
//                 {errors.name?.message && typeof errors.name.message === 'string' && (
//                     <p>{errors.name.message}</p>
//                 )}
//             </div>
//             <button type="submit" >enviar</button>
//         </form>
//     )
// }
'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema, ClientSchemaType } from "@/validations/clientSchema";
import { FormInput } from "../general/FormInput";

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ClientSchemaType>({
        resolver: zodResolver(clientSchema)
    });

    return (
        <div className="flex flex-col justify-center items-center fixed left-0 top-0 h-screen w-screen backdrop-blur-sm bg-gray-400/30 gap-4">
            <form className="flex flex-col justify-center items-center bg-white p-[20px] gap-[20px]" onSubmit={handleSubmit(data => console.log(data))}>
                <h2 className="text-3xl font-extrabold text-[#6c00e6]">
                    Contacto
                </h2>
                <FormInput
                    errors={errors}
                    label="Correo"
                    name="email"
                    register={register}
                />
                <FormInput
                    errors={errors}
                    label="Correo"
                    name="email"
                    register={register}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
