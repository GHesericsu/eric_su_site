import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {IconContext } from 'react-icons'
import {MdContentCopy} from 'react-icons/md'

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
  const [showPubkey, setShowPubkey] = useState(false);
  const [showFingerPrint, setShowFingerPrint] = useState(false)

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
    setShowPubkey((state) => !state)
  }

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
        <h3>Want to send me a secure message?</h3>
        <div className='flex-col'>
          <div className='m-3'>
            My <a href='https://keys.openpgp.org/'>GPG Fingerprint</a>: 
            <div className ='rounded-lg select-all hover:cursor-pointer dark:border dark:border-light-bg-1 border border-dark-bg-1'>
              <div>
                <IconContext.Provider value={{ className: 'm-1 absolute' }}>
                  <MdContentCopy />
                </IconContext.Provider>
              </div>
              FA53 796E 6CAE F4D8 35D4  6EBF 515D 9F97 A1E7 FB6A
            </div>
          </div>
          <div className='dark:border dark:border-light-bg-1 border border-dark-bg-1 rounded-lg hover:cursor-pointer max-w-lg p-2 m-auto text-center align-middle inline-block mb-1' onClick={handleShowPubkey}>Show/Hide my PGP Public Key</div>
          {showPubkey && <div className='rounded-lg overflow-auto m-auto max-w-lg p-2 text-xs select-all hover:cursor-pointer dark:border dark:border-light-bg-1 border border-dark-bg-1'>
          <div>
                <IconContext.Provider value={{ className: 'm-0.5 absolute' }}>
                  <MdContentCopy />
                </IconContext.Provider>
              </div>
            {`-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGItEe4BEACYECRErrSOwAv+oEMS5gqCiWIuMpG/47GXREfBUhr8BmZi0UJB
8nNjahDoJ9NcvgvrVm2cQTZP3tDLYbTmKTX8zs1f3mjqLSIDTwq84NBj0oVXEehH
kmxYXtfNy6fG0UXB98zNsU8MiJlYxCaenJLdM/DQylNd234H9082eJEqs8FhdU2Z
MNI/GNzv0Nvk99gqVBzF0UCQhsK6fR0rtsmpbMQWmZAQPyHgJzUKreqI4fNDuLiN
MhDM7gOcxm15+El04p5qhUvb1BwkymTjGRK3S8x5MKj57YpzSUMzIGJNdfMnMQ/0
LRZ+uWK7lD4POSnBT2Fz9UBvrfcynBoXqbpVgBit/HaFRFrAnhmqBaleV8sFJNeK
IumWCLVZEKlQsYmf3wing6lsGOGOGSCcmFI7xBqMGD1KtKCJ9CwufHPVU0YfbLlH
lNP0iIDGZs764le8I4K354odk6zyth6Wb/Vlral/xsvR+Ca42ZQ0PTkVH3BL26sc
984PjoYbKLwBJG+w14xMiQVHtso3sdLMS7tKI2mm8xxDbqgL1lmIN3JPqAkKvJe/
pQm1C5tmi78qGC3HW21j53qce1Swmg2RYh+txC/DIxAtnS7YaO6jh9LZ9qjDi8Eg
BQDYW3FZaLA5rtzL4vNE7EulfAeW/lVrBN66bNxXIhKFswYnSMa7NwzRNwARAQAB
tBxFcmljIFN1IDxlc2VyaWNzdUBnbWFpbC5jb20+iQJUBBMBCAA+FiEE+lN5bmyu
9Ng11G6/UV2fl6Hn+2oFAmItEe4CGwMFCQeGH2cFCwkIBwIGFQoJCAsCBBYCAwEC
HgECF4AACgkQUV2fl6Hn+2qSGxAAjrNXhj8uKEJN9Xso8sYQkSzb0otoxq9nNbDN
/+fSSCqCl1et6v7RJPN52cK+Hy8MA1HOOBEWOBemfr3Jrlv3AvQR4pXKLh7gjtE3
jG9KXZaffi7yPYpW66L8On7smOpWrbthOTi/QXj0Mc6cx+YaHdgRgkdv9xr801TU
EI/Lc/o8CGBVGXCSw0cAArlT/VHil0kSc9Gi8zihlaxL2cfmPn2zu6wxP2crBcpa
o+RAfXha0vJ3aGzx9zLSAQy2uDNg+Q1ftkTQtIJEeAeWWraWUuyoTChcb2O3t/27
b+wz2fpOqa87oyEcCauJfusMXGKYyfLgTuoQVHWHM1peDVrRr7RsHlZAu0ECLUjP
d95s7qdb2EmsNXp11GwpKGNMqqu7qQb5uFx7e09m55/Vf4yHuDJCR8Zos4r8jneS
sOhw3QnZXtLX0xrQmNZ94hUegsLprhTwyC78CqmpN1Oere6P7sXYOBQK/ud/0wCV
RZxqFdl78tG1paqn1yFohs2rcOgHMNKCpp6UWk4FNdnsl3LIDYvOfv7Ta5sQ9dfR
0TTt1GHAx5RzSvxCyEm2ahff6Him2mDd1gYM0/pmoKUc04XkN29NCAJiNT3Lgsak
ZESKRnYU75VmQHypJe8Y+6X2+p7zG7B6NHl4efYwDT0JYF/RuL0thnA4kzPYU3pF
oZ9IdPK5Ag0EYi0R7gEQAMfqy9BjkbzybGjKe7+f/1zB9mzzLeENcVGr9maodU+R
HBroo0RroePNHprnufOyj3zK1oHt4zBra5SBiJmJsIb0FycdITRuBFMxTytZe5gO
8QPkv2o31ynzsPBl+mN7Ppvbbh6Zn0cfFFDQ7JJ9ARcabkTkf8s15NSkgfw7jr6G
jwlNhoM5wcoCXTbrOVRoYTGjVx0BP9wcXJBhD/58UKuWTK/p79TEZzZ4fICTq+cj
7crE8N0G78HgHePu84pyVeAlI1eQHKBtQP53LtSbghmukS8zUoA9hnuMRXwW2vmY
xB3VylC6pEEu4OBYimVmf3UF6SMnlVhi5LEe3EtLjrlVWh3OJephIRXZXMlVPXYd
C3B9yWoiQb66zJ0rWRrXbxjwHLTPQ9Ik2HVWrNEaVLSjT2t+5HM64Eav1yKXymBx
LdFOjbvVL4ecOAOJAEgmO0rDQYf8w+iFqP7gdbJnk96bpbZWncn+yGH76NH7TUHB
LgLrpaFOwkaPT4OQYq0z8o1YSf2mmKe6jcrx8FmvfOCGiAm+bqOgzixjbdjfh2ON
n1sfGGji4jq4hZIaMKo9G9Q10eAWMN9xGRSJXj8TZ0KjJXZhOPbyhPwQaZbm++Bl
GNPWwZQHuwG6AST5mH8KATpxoNvbjpiXXipcqRpXn1WpA1JNwuOOyTKUEDr1xTxz
ABEBAAGJAjwEGAEIACYWIQT6U3lubK702DXUbr9RXZ+Xoef7agUCYi0R7gIbDAUJ
B4YfZwAKCRBRXZ+Xoef7aluIEACIGJ5gnhhlmsRTWXl1Q5JmWeTPEM1SC/t2jeLM
4WqO+tCFYRxS6xnlHWuFZgA9KZWxuuYf/Hc3o6j+o2pABweeRug5fpLcawfR+kfJ
Kw9V/V75SPx1B8H3LoEbSe59+ZQnMNbaWTT1ePaZMDCE0LGSQh0rUzrCS7dHGwQ8
DoCJetdRv7oSaMjxhV91Muk0y4wE+OGi4aNPRKKYP0PVwL6TSJbZ6t4rdjKIfHtz
1hO1pGNS5eSh3biERBI7m/xCSZ1ahy0vG9+9CLMWPWHu6ObjSfX95EIC3nxtXKfR
lh/LFRdkR2irLGOeQEWoMG3S8ipHGRFArLZuIxF3DgM5LBoe/u6e+jg2sIdZT2nN
RKwfseGhgm5GuO43e2Ww7v9O+D8cnvNOy6u2xE9a6QfDtkxMY3tHfDTLr1A67B+F
da4Rmr+m/wfYVSa+2L5g721Z+irozN13i4Ej+tUTAGef/GxpZUeFNfqHO8mpVDZI
fz0O5PR5evTUYbZkEbY3IO79Fz7fQN1PX5XYviXAHncijJq5hsFXnWFbiPWwdXP7
HeSmBgKlgOdY6710uIUXz8037r+GNeAOCdTYUEf51k7irtvARgHG/xjeRB+6Gb9p
4ttXm1HDdXV/aQGCP35YcANAHRx7d7my6ZwxB7Iu/8+krUntGS3HtyvqpxzJfPEY
HwHSZA==
=Ji5T
-----END PGP PUBLIC KEY BLOCK-----
`}
          </div>}
          
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
