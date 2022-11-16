export const Footer = () => {
  return (
    <footer className='z-9 min-h-50 fixed bottom-2 flex max-w-screen-sm justify-center'>
      <div className='self-auto bg-inherit dark:bg-primary-900 dark:text-primary-100'>
        <div>© {new Date().getFullYear()} By Eric Su</div>
      </div>
    </footer>
  );
};
