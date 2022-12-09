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
      <div className='min-w-[80%] flex-col p-3'>
        <div className='mb-5'>
          <h1>Contact Me</h1>
        </div>
        <div>
          <form
            className='w-full rounded-xl border border-primary-500 bg-dark-bg-2'
            onSubmit={handleSubmit(
              (data, e) => {
                sendEmail(data, e);
              },
              (err) => console.log(err)
            )}
          >
            <div className='my-4'>
              <div>
                <label htmlFor='name' className='mr-3'>
                  Your Name:
                </label>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Name'
                  {...register('name', {})}
                  className='text-black'
                ></input>
              </div>
            </div>
            <div className='my-4'>
              <div>
                <label htmlFor='email' className='mr-3'>
                  Your Email:
                </label>
              </div>
              <div>
                <input
                  type='email'
                  placeholder='Email Address'
                  {...register('email', {})}
                  className='text-black'
                ></input>
              </div>
            </div>
            <div className='my-4'>
              <div>
                <label htmlFor='message' className='mr-3'>
                  Your Message:{' '}
                </label>
              </div>
              <div>
                <textarea
                  placeholder='Message'
                  {...register('message', {})}
                  className='text-black'
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
          <div className='my-4'>
            {show ? 'Message has been sent. Thank you for the message!' : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
