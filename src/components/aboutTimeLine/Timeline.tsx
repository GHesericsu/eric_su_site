import TimelineItem from '@/components/aboutTimeLine/TimelineItem';
import timelineText from '@/components/aboutTimeLine/TimelineText';

function Timeline() {
  return (
    <div className='layout z-0 ml-10 flex items-center justify-center py-5 relative'>
      <div className='mx-auto mr-2 max-w-screen-sm pl-5'>
        <ol className='relative border-l-4 border-primary-600 leading-loose'>
          {timelineText.map((item) => {
            return (
              <TimelineItem
                key={item.year + item.title}
                year={item.year}
                month={item.month}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
