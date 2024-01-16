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
  return (
    <div className={scss.wrapper} onClick={handleNavigate}>
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