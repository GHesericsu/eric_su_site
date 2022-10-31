export const Footer = () => {
  return (
    <>
      <footer>
        <div className='absolute bottom-2 flex max-w-screen-sm justify-center bg-inherit dark:bg-primary-900 dark:text-primary-100'>
          <div>© {new Date().getFullYear()} By Eric Su</div>
        </div>
      </footer>
    </>
  );
};
