
import React, { useEffect, useState } from 'react'
import Image from './Image'
import LiveMesenger from '../assets/livemassageicon/message.png'
import messenger from '../assets/livemassageicon/messenger.png'
import whatsapp from '../assets/livemassageicon/whatsapp.png'

const LiveMessage = () => {
  const [showMessages, setShowMessages] = useState(false)

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowMessages(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Messenger & WhatsApp */}
      <div
        className={`absolute bottom-22 right-10 flex flex-col gap-2.5
        transition-all duration-500 ease-out
        ${
          showMessages
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="https://www.messenger.com/e2ee/t/2361068511375007"
          target="_blank"
          rel="noreferrer"
        >
          <div className='w-16 h-16'>
            <Image
            src={messenger}
            alt="Messenger"
            className="w-full h-full cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          </div>
          
        </a>

        <a
          href="https://wa.me/8801602282313"
          target="_blank"
          rel="noreferrer"
        >
          <div className='w-16 h-16'>

            <Image
              src={whatsapp}
              alt="WhatsApp"
              className="w-full h-full cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        </a>
      </div>

      {/* Main Button */}
      <button
        type="button"
        onClick={() => setShowMessages(!showMessages)}
        aria-label="Toggle contact options"
        aria-expanded={showMessages}
      >
        <div className=' w-16 h-16 mr-10'>

          <Image
            src={LiveMesenger}
            alt="Live Message"
            className={`w-full h-full cursor-pointer transition-transform duration-350 ${
              showMessages ? 'rotate-180 scale-110' : ''
            }`}
          />
        </div>
      </button>

    </div>
  )
}

export default LiveMessage
