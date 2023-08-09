interface TimeLineItem {
  year: string;
  month: string | undefined;
  title: string;
  subtitle: string | undefined;
  content: string;
}

function TimelineItem({ year, title, subtitle, content }: TimeLineItem) {
  return (
    <li className='mb-7 ml-4'>
      <div className='absolute -left-[0.6rem] h-4 w-4 rounded-full border-4 border-primary-500 bg-white'></div>
      <p className='absolute -left-[3.5rem] m-0 p-0 font-bold'>{year}</p>
      <p className='mb-2 text-2xl font-bold'>{title}</p>
      <p className='mb-2 text-sm font-bold'>{subtitle}</p>
      <p>{content}</p>
    </li>
  );
}

export default TimelineItem;
