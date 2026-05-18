import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

import Title from './Title'
import linkedInIcon from '../assets/linkedIn_icon.png';
import githubIcon from '../assets/github_icon.png';
import snapchatIcon from '../assets/snapchat_icon.png';
import whatsappIcon from '../assets/whatsapp_icon.png';

const Contact = () => {

    const {register, reset, handleSubmit} = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState(null);

    const accessKey = "b73d5f9a-9d0e-4d03-9d0b-986ce5334729";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: "Acme Inc",
            subject: "New Contact Message from your Website",
            // ... other settings
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setResult(msg);
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setResult(msg);
        },
  });

  return (
    <div>
        <Title title='Contact Me' />
        <div  id='contact' className='grid grid-cols-1 lg:grid-cols-2 pb-20'>
            <div className='pt-10'>
                <p className='text-(--title-color) text-3xl font-bold'>Let's Connect</p>
                <p className='text-(--text-color) text-lg font-medium pt-10'>Feel free to reach out for collaborations, project ideas, or just to say hello. I’m always open to discussing new opportunities.</p>
                <p className='uppercase text-(--primary-color) pt-10'>Active on various social media platforms</p>
                <div className='flex gap-9 pt-10 transition-all'>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/kwameofeidawson?utm_source=share_via&utm_content=profile&utm_medium=member_ios"><img className='w-9 h-9' src={linkedInIcon} alt="LinkedIn" /></a>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://github.com/Kod-19"><img className='w-9 h-9' src={githubIcon} alt="GitHub" /></a>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://snapchat.com/t/UFDTyOJG"><img className='w-9 h-9' src={snapchatIcon} alt="Snapchat" /></a>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://wa.me/0505734529"><img className='w-9 h-9' src={whatsappIcon} alt="WhatsApp" /></a>
                </div>

                <p className='pt-10'>Call me: 050 573 4539</p>
                
            </div>

            <div className='pt-10'>
                <p className='text-3xl font-bold text-(--title-color)'>Send a Message</p>

                <div className='bg-(--card-bg) rounded-md p-6 mt-10 w-full max-w-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} action="" className=''>
                        <input
                            type="text"
                            id='first-name' 
                            className='bg-gray-900 w-full py-2 border-none outline-none px-4'
                            placeholder='First Name'
                            {...register("first-name", { required: true })}
                        />
                        <input
                            type="text"
                            id='other-names' 
                            className='bg-gray-900 w-full py-2 border-none outline-none px-4 mt-10'
                            placeholder='Other Names'
                            {...register("first-name", { required: true })}
                        />
                        <input
                            type="email"
                            id='email' 
                            className='bg-gray-900 w-full py-2 border-none outline-none px-4 mt-10'
                            placeholder='Your Email'
                            {...register("email", { required: true })}
                        />
                        <textarea 
                            name="" 
                            id='message' 
                            placeholder='Write Your Message'
                            className='w-full pt-2 pb-10 px-4 bg-gray-900 mt-10 outline-none border-none'
                            {...register("message", { required: true })}
                        />
                        <button type='submit' className='text-(--title-color) bg-(--tertiary-color) px-4 w-2/6 py-2 mt-10 rounded-lg cursor-pointer hover:scale-105 duration-100'>
                            Submit
                        </button>
                        <span className='pl-6'>{result}</span>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
