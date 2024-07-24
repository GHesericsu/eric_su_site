function DevBio() {
  return (
    <div className='flex-col'>
      <div className='mx-2 mt-4 mb-5'>
        <h1 className='mb-3'>Web3 Dev</h1>
        <div className='image-box-shadow rounded-3xl border-black p-5 text-left dark:bg-dark-bg-2'>
          <p>
            {`Hi, I'm `}
            <a href='https://ericsu.xyz'>Eric Su</a>
            {`. I'm a fullstack
            developer(frontend-focused) with a background in finance, sales, and
            payments.`}
          </p>
          <br />
          <p>
            {`Day to day, I use Typescript, React, Node.js, Next.js, and
            Tailwind.css.`}
          </p>
          <br />
          <p>
            {`I enjoy building Decentralized Applications and contributing to open
            source projects on Solana. Open to build on other blockchains or
            other crypto/web3 related tools and infrastructures.`}
          </p>
          <br />
          <p>
            {`For databases, I'm familiar with MySQL like Postgres and NoSQL like
            MongoDB.`}
          </p>
        </div>
      </div>

      <div className='mx-2 mb-5'>
        <h1 className='mb-3'>Current Projects 2023</h1>
        <div className='image-box-shadow rounded-3xl border-black p-5 dark:bg-dark-bg-2'>
          <ul className='mb-1 list-outside list-disc px-3 text-left marker:text-primary-600'>
            <li className='mb-3 px-2'>Something exciting</li>
          </ul>
        </div>
      </div>

      <div className='mx-2 mb-5'>
        <h1 className='mb-3'>Past Projects</h1>
        <div className='image-box-shadow rounded-3xl border-black p-5 dark:bg-dark-bg-2'>
          <ul className='mb-1 list-outside list-disc px-3 text-left marker:text-primary-600'>
            <li className='mb-3 px-2'>
              I built the
              <a
                href='https://github.com/deep-ink-ventures/multiclique-frontend'
                target='_blank'
                className='text-blue-500'
                rel='noreferrer'>{` frontend for MultiClique`}</a>
              , a multi-signature tool on Stellar using Soroban.
            </li>
            <li className='mb-3 px-2'>
              I built the
              <a
                href='https://github.com/deep-ink-ventures/elio-dao-frontend'
                target='_blank'
                className='text-blue-500'
                rel='noreferrer'>{` frontend for ElioDAO`}</a>
              , a DAO creation platform on Stellar using Soroban.
            </li>
            <li className='mb-3 px-2'>
              I built the entire
              <a
                href='https://github.com/deep-ink-ventures/genesis-dao-frontend'
                target='_blank'
                className='text-blue-500'
                rel='noreferrer'>{` frontend for GenesisDao `}</a>{' '}
              on Polkadot in 2023
            </li>
            <li className='mb-3 px-2'>
              {`I worked on `}
              <a
                href='https://github.com/jet-lab'
                target='_blank'
                className='text-blue-500'
                rel='noreferrer'>{`Jet Protocol's frontend and SDK `}</a>
              {`for a year from 2021-2022. At peak,
              we had $50M total value locked. It's 100% open source.`}
            </li>
            <li className='mb-3 px-2'>
              {`I built an application where we display curated electronic music
              events in NYC. I used Next.js and Sanity.io as the headless CMS.`}
            </li>
            <li className='mb-3 px-2'>
              I designed and implemented the UI of a users reviews microservice.
            </li>
            <li className='mb-2 px-2'>
              {`I redesigned the APIs of a photo gallery microservice to
              accommodate 100MM primary records.`}
            </li>
            <li className='mb-3 px-2'>
              {`I built a RTMP server in Node and transcoded streams into HLS
              using FFmpeg to display live streams to viewers`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevBio;
