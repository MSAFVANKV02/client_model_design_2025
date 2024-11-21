import SettingsLayout from '../layout'
import ChatBot from './ChatBot'


export default function ChatPage() {
  return (
    <SettingsLayout>
        <div>
          <span>Chat Page</span>
          <div className="mx-h-[70vh] overflow-y-auto bg-white rounded-lg shadow-lg md:flex">
            <div className="md:flex-1">
            <ChatBot/>       
            </div>
           <img src="/public/chat/Frame 2899.png" alt="" className='xl:block hidden' />
          </div>
       
        </div>
  
    </SettingsLayout>
  )
}