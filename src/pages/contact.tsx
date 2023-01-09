import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { MdContentCopy } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Layout from '@/components/Layout';

import { pgpFingerprint, pgpPubkey } from '../constant/pgp';
import Seo from '@/components/Seo';

type MessageData = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit, reset } = useForm<MessageData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  const [showPubkey, setShowPubkey] = useState(false);
  const [showFingerPrint, setShowFingerPrint] = useState(false);

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

  const handleShowPubkey = () => {
    setShowPubkey((state) => !state);
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
      <Seo title='Contact Eric Su'></Seo>
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
        <h3>Want to send me a secure message?</h3>
        <div className='flex-col'>
          <div className='m-3'>
            My <a href='https://keys.openpgp.org/'>GPG Fingerprint</a>:
            <div className='select-all rounded-lg border border-dark-bg-1 hover:cursor-pointer dark:border dark:border-light-bg-1'>
              <div>
                <IconContext.Provider value={{ className: 'm-1 absolute' }}>
                  <MdContentCopy />
                </IconContext.Provider>
              </div>
              {pgpFingerprint}
            </div>
          </div>
          <div
            className='m-auto mb-1 inline-block max-w-lg rounded-lg border border-dark-bg-1 p-2 text-center align-middle hover:cursor-pointer dark:border dark:border-light-bg-1'
            onClick={handleShowPubkey}
          >
            Show/Hide my PGP Public Key
          </div>
          {showPubkey && (
            <div className='m-auto max-w-lg select-all overflow-auto rounded-lg border border-dark-bg-1 p-2 text-xs hover:cursor-pointer dark:border dark:border-light-bg-1'>
              <div>
                <IconContext.Provider value={{ className: 'm-0.5 absolute' }}>
                  <MdContentCopy />
                </IconContext.Provider>
              </div>
              {pgpPubkey}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
