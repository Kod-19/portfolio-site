import React from 'react'
import Title from './Title'
import linkedInIcon from '../assets/linkedIn_icon.png';
import githubIcon from '../assets/github_icon.png';
import snapchatIcon from '../assets/snapchat_icon.png';
import whatsappIcon from '../assets/whatsapp_icon.png';
import 'react-hot-toast';

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88eec560-64b0-4d12-9c75-26e6f360bdbd");

    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thank you for your submission!')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div>
        <Title title='Contact Me' />
        <div className='grid grid-cols-2'>
            <div className='pt-10'>
                <p className='text-(--title-color) text-3xl font-bold'>Let's Connect</p>
                <p className='text-(--text-color) text-lg font-medium pt-10'>Feel free to reach out for collaborations, project ideas, or just to say hello. I’m always open to discussing new opportunities.</p>
                <p className='uppercase text-(--primary-color) pt-10'>Active on all various social media platforms</p>
                <div className='flex gap-9 pt-10 transition-all'>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/kwameofeidawson?utm_source=share_via&utm_content=profile&utm_medium=member_ios"><img className='w-9 h-9' src={linkedInIcon} alt="LinkedIn" /></a>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://github.com/Kod-19"><img className='w-9 h-9' src={githubIcon} alt="GitHub" /></a>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://snapchat.com/t/UFDTyOJG"><img className='w-9 h-9' src={snapchatIcon} alt="Snapchat" /></a>
                    <a className='hover:scale-105 duration-150' target='_blank' rel='noopener noreferrer' href="https://wa.me/0505734529"><img className='w-9 h-9' src={whatsappIcon} alt="WhatsApp" /></a>
                </div>
            </div>

            <div className='pt-10'>
                <p className='text-3xl font-bold text-(--title-color)'>Send a Message</p>

                <div className='bg-(--card-bg) rounded-md p-6 mt-10 w-5/6'>
                    <form action="" className=''>
                        <input
                            type="text"
                            id='name' 
                            className='bg-gray-900 w-full py-2 border-none outline-none px-4'
                            placeholder='First Name'
                        />
                        <input
                            type="text"
                            id='name' 
                            className='bg-gray-900 w-full py-2 border-none outline-none px-4 mt-10'
                            placeholder='Other Names'
                        />
                        <input
                            type="email"
                            id='name' 
                            className='bg-gray-900 w-full py-2 border-none outline-none px-4 mt-10'
                            placeholder='Your Email'
                        />
                        <textarea 
                            name="" 
                            id='' 
                            placeholder='Write Your Message'
                            className='w-full pt-2 pb-10 px-4 bg-gray-900 mt-10 outline-none border-none'
                        />
                        <button onClick={onSubmit} className='text-(--title-color) bg-(--tertiary-color) px-4 w-2/6 py-2 mt-10 rounded-lg cursor-pointer hover:scale-105 duration-100'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact