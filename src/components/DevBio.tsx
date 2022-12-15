function DevBio() {
  return (
    <div className='flex-col'>
      <div className='mt-4 mb-5 mx-2'>
        <h1 className='mb-3'>Web3 Dev</h1>
        <div className='image-box-shadow rounded-3xl border-black p-5 dark:bg-dark-bg-2 text-left'>
          <p>
            Hi, I'm <a href='https://ericsu.xyz'>Eric Su  </a>. I'm a fullstack developer(frontend-focused) with a background in
            finance, sales, and payments.
          </p>
          <br />
          <p>
            Day to day, I use Typescript, React, Node.js, Next.js, and
            Tailwind.css.
          </p>
          <br />
          <p>
            I enjoy building Decentralized Applications and contributing to open source projects on Solana. Open to build
            on other blockchains or other crypto/web3 related tools and
            infrastructures. 
          </p>
          <br/>
          <p>
          For databases, I'm familiar with MySQL like
            Postgres and NoSQL like MongoDB.
          </p>
        </div>
      </div>

      <div className='mb-5 mx-2'>
        <h1 className='mb-3'>Current Projects</h1>
        <div className='image-box-shadow rounded-3xl border-black p-5 dark:bg-dark-bg-2'>
          <ul className='mb-1 list-outside list-disc px-3 text-left marker:text-primary-600'>
            <li className='mb-3 px-2'>
              Payment dapp on Solana focused on real usage and good UX - will be open-sourced once it's finished
            </li>
          </ul>
        </div>
      </div>

      <div className='mb-5 mx-2'>
        <h1 className='mb-3'>Past Projects</h1>
        <div className='image-box-shadow rounded-3xl border-black p-5 dark:bg-dark-bg-2'>
          <ul className='mb-1 list-outside list-disc px-3 text-left marker:text-primary-600'>
            <li className='mb-3 px-2 hover:ring active:ring-4 hover:rounded-xl hover:image-box-shadow hover:border-primary-500 cursor-pointer'>
              I worked on Jet Protocol's frontend and SDK for a year. At peak,
              we had $50M total value locked. It's 100% open source so you can
              see all the code here
            </li>
            <li className='mb-3 px-2'>
              I built an application where we display curated electronic music
              events in NYC. I used Next.js and Sanity.io as the headless CMS.
            </li>
            <li className='mb-3 px-2'>
              I designed and implemented the UI of a users reviews microservice.
            </li>
            <li className='mb-2 px-2'>
              I redesigned the APIs of a photo gallery microservice to
              accommodate 100MM primary records.
            </li>
            <li className='mb-3 px-2'>
              I built a RTMP server in Node and transcoded streams into HLS
              using FFmpeg to display live streams to viewers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevBio;
