import { useForm } from 'react-hook-form';
import Button from '@/components/buttons/Button';
import Layout from '@/components/Layout';

interface MessageData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<MessageData>();
  const onSubmit = (data: MessageData) => console.log(data);
  console.log(errors);
  return (
    <Layout>
      <div className='flex-col min-w-[80%]'>
        <div className='mb-5'>
          <h1>Contact Me</h1>
        </div>
        <div>
          <form className='bg-dark-bg-2 rounded-xl border border-primary-500 w-full'>
            <div className='my-4'>
              <label className='mr-3'>Your Name:</label>
              <input type='text' placeholder="Name" {...register("name", {})}></input>
            </div>
            <div className='my-4 inline-block text-left'>
              <label className='mr-3'>Your Email:</label>
              <input type='email' placeholder="Email Address" {...register("email", {})}></input>
            </div>
            <div className='my-4'>
              <label className='mr-3 align-middle'>Your Message: </label>
              <textarea placeholder="Message" {...register("email", {})}></textarea>     
            </div>
            <div>
              <Button>Send</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
