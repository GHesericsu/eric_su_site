
export const Footer = (props: any) => {
  return (
    <>
    <footer>
      <div className='bottom-2 flex justify-center bg-inherit dark:bg-primary-900 dark:text-primary-100 absolute max-w-screen-sm'>
          <div> 
          © {new Date().getFullYear()} By{' '}
              Eric Su
          </div>
      </div>
    </footer> 
    </>
  )
  
}