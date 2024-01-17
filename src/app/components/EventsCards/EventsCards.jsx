'use client'
import { useState } from 'react';
import scss from './EventsCards.module.scss'
import { useRouter } from 'next/navigation';

function EventsCards({image, desc, title, date, id}) {
  const router = useRouter()
    const maxLength = 249;

    const [text, setText] = useState(desc);
  
    const truncatedText = text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    const handleNavigate = () => {
      router.push( `/press/${id}`,)
    }

    const handleKeyPress = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleNavigate();
      }
    };
  return (
    <div 
      role="button"
      tabIndex={0}
      className={scss.wrapper} 
      onClick={handleNavigate}
      onKeyDown={handleKeyPress}
    >
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <i>{date}</i>
            <p>{title}</p>
            <span>{truncatedText}</span>
        </div>
    </div>
  )
}

export default EventsCards