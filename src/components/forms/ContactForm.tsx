'use client'
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientSchema, ClientSchemaType } from '@/validations/clientSchema';
import { FormInput } from '../general/FormInput';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Asegúrate de importar los estilos CSS
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import { useIsOpenForm } from '@/store/ContactFormStore';

export const ContactForm = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm<ClientSchemaType>({
        resolver: zodResolver(clientSchema),
    });

    const { openCloseForm } = useIsOpenForm();
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            openCloseForm(false);
        }, 1000); // Duración de la animación
    };

    const onSubmit = async (data: ClientSchemaType) => {
        try {
            const response = await fetch('/api/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error en el envío del correo');
            }

            const result = await response.json();
            alert(result.message || 'Correo enviado exitosamente');
        } catch (error: any) {
            alert(error.message || 'Error al enviar el correo');
        }
    };

    return (
        <div className={`flex flex-col pt-20 items-center contact-form z-[9900] top-[92px] h-screen w-screen backdrop-blur-sm bg-gray-400/30 gap-4 ${closing ? 'hide-form' : ''}`}>
            <form
                className="relative flex flex-wrap w-auto justify-center bg-white p-[40px] gap-[20px] rounded-xl max-h-[60vh] overflow-y-scroll max-w-[80vw]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col items-center gap-[20px]'>
                    <span className='absolute top-[15px] right-[15px] text-xl'>
                        <button onClick={handleClose}>
                            <RxCross2 />
                        </button>
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#6c00e6]">
                        Contacto
                    </h2>
                    <FormInput
                        errors={errors}
                        label="Nombre"
                        name="name"
                        register={register}
                    />
                    <FormInput
                        errors={errors}
                        label="Correo"
                        name="email"
                        register={register}
                    />
                    <FormInput
                        errors={errors}
                        label="Pais"
                        name="country"
                        register={register}
                    />
                    <div className="flex flex-col items-start">
                        <label className="font-extrabold" htmlFor="phone">Numero de contacto</label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    placeholder="Numero de contacto *"
                                    defaultCountry="US"
                                    value={field.value}
                                    onChange={field.onChange}
                                    international
                                    countryCallingCodeEditable={false}
                                    className="border border-[#ccc] rounded-full px-4"
                                />
                            )}
                        />
                        {errors.phone && <p className="max-w-[220px] text-sm text-[#ccc] font-light">{errors.phone.message}</p>}
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label className="font-extrabold" htmlFor={"message"}>{"Mensaje"} *</label>
                        <textarea className="border border-[#ccc] w-full rounded-lg p-2 min-h-[100px]" id={"message"} {...register("message")} placeholder='Tienes alguna duda o quieres darnos detalles de tu idea, escribenos!' />
                        {errors.message && (
                            <p className="max-w-[220px] text-sm text-[#ccc] font-light">
                                {errors.message?.message as string}
                            </p>
                        )}
                    </div>
                    <div className='relative group'>
                        <div className='absolute z-[0] h-full w-full bg-[#6c00e6] right-0 group-hover:w-0 transition-all duration-500 ease-in-out'></div>
                        <button className='relative z-[1] text-white px-4 py-2 font-bold flex gap-2 items-center group-hover:text-black transition-all duration-500 ease-in-out' type="submit">Enviar</button>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-[20px] p-[20px] max-w-[300px]'>
                    <Image src="/logo.svg" alt="logo" width={150} height={100} />
                    <h3 className='capitalize text-center text-gray-500 font-light'>Creando experiencias digitales excepcionales para impulsar tu éxito empresarial.
                    </h3>
                    {/* <div className='flex gap-2'>
                        logos de contacto(redes sociales)
                    </div> */}
                    <div className='text-center flex flex-col'>
                        <a href='mailto: info@sledevelopment.com' className='text-[#6c00e6]'>info@sledevelopment.com</a>
                        {/* <p>numero de telefono de contacto</p> */}
                    </div>
                </div>
            </form>
        </div>
    );
};
