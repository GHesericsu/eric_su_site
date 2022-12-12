import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Layout from '@/components/Layout';

type MessageData = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit, reset } = useForm<MessageData>();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [show, setShow] = useState(false);

  const sendEmail = (data: Record<string, unknown>, event: any) => {
    if (event) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          data,
          process.env.NEXT_PUBLIC_EMAILJS_API_PUBKEY
        )
        .then((res) => {
          // eslint-disable-next-line
          console.log('EMAILJS SUCCESSFUL RESPONSE', res);
          setIsSubmitted(true);
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log('EMAILJS ERROR', err);
        });
    } else {
      console.log('EmailJS failed');
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
    reset({
      name: '',
      email: '',
      message: '',
    });
  }, [isSubmitted]);

  return (
    <Layout>
      <div className='flex-col p-3 md:min-w-[80%]'>
        <div className='mb-5'>
          <h1>Contact Me</h1>
        </div>
        <div className='flex justify-center'>
          <div className='m-auto px-6'>
            <form
              className=''
              onSubmit={handleSubmit(
                (data, e) => {
                  sendEmail(data, e);
                },
                (err) => console.log(err)
              )}
            >
              <div className='my-1 flex justify-between px-2'>
                <div>
                  <label htmlFor='name' className='mr-3'>
                    Name:
                  </label>
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='Name'
                    {...register('name', {})}
                    className='rounded-lg text-black focus:ring md:min-w-[24rem]'
                  ></input>
                </div>
              </div>
              <div className='my-1 flex justify-between px-2'>
                <div>
                  <label htmlFor='email' className='mr-3'>
                    Email:
                  </label>
                </div>
                <div>
                  <input
                    type='email'
                    placeholder='Email Address'
                    {...register('email', {})}
                    className='rounded-lg text-black focus:ring md:min-w-[24rem]'
                  ></input>
                </div>
              </div>
              <div className='my-1 flex justify-between px-2'>
                <div>
                  <label htmlFor='message' className='mr-3'>
                    Message:{' '}
                  </label>
                </div>
                <div className=''>
                  <textarea
                    placeholder='Example: Hi Eric, I would like to have a quick chat about a web3 dev opportunity next Wednesday.'
                    {...register('message', {})}
                    className='min-h-[10rem] rounded-lg text-black focus:ring md:min-w-[24rem]'
                  ></textarea>
                </div>
              </div>
              <div>
                <Button
                  className='mb-4 inline-block w-[7rem] text-center'
                  type='submit'
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
          <div className='my-4'>
            {show ? 'Message has been sent. Thank you for the message!' : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
