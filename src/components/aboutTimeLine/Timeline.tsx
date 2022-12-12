import TimelineItem from '@/components/aboutTimeLine/TimelineItem';
import timelineText from '@/components/aboutTimeLine/TimelineText';

function Timeline() {
  return (
    <div className='layout z-0 flex items-center justify-center py-5'>
      <div className='mx-auto max-w-screen-sm px-5'>
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
