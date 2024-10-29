import React, { useContext } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { LiaCompass } from "react-icons/lia";
import { PiLightbulb } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import { MdOutlineMicNone } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import { Context } from '../context/Context';
import gemini_logo from '../assets/gemini_logo.png';
 
const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData, setInput,input} = useContext(Context);

  return (
    <div className='text-white relative min-h-[100vh] pb-[15px] flex-1'>

        {/* navbar */}
        <div className='text-white flex items-center justify-between p-5 text-xl '>
            <p>Gemini</p>
            <div>
              <FaCircleUser size={30}/>
            </div>
        </div>

        {/* main container */}
        <div className='max-w-[900px] m-auto'>

         {!showResult
         ? <>
            {/* Greet */}
            <div className='my-[50px] mx-0 text-[56px] text-[#777877] font-semibold '>
                <p><span>Hello, Friend.</span></p>
                <p>How can I help you today?</p>
            </div>
            {/* cards */}
            <div id='cards' className=' ' >
                <div className='h-[200px] p-[15px] relative bg-[#383838] rounded-[10px] cursor-pointer hover:bg-[#282A2C]'>
                   <p>Suggest beautiful places to see on an upcoming road trip</p>
                   <div className='absolute bottom-[10px] right-[10px]'><LiaCompass size={30}/></div>
                   
                </div>
                <div className='h-[200px] p-[15px] relative bg-[#383838] rounded-[10px] cursor-pointer hover:bg-[#282A2C]'>
                   <p>Briefly summarize this concept: urban planning</p>
                   <div className='absolute bottom-[10px] right-[10px]'><PiLightbulb size={20} /></div>
                </div>
                <div className='h-[200px] p-[15px] relative bg-[#383838] rounded-[10px] cursor-pointer hover:bg-[#282A2C]'>
                   <p>Brainstorm team bonding activities for our work retreat</p>
                   <div className='absolute bottom-[10px] right-[10px]'><FaRegMessage size={20} /></div>
                </div>
                <div className='h-[200px] p-[15px] relative bg-[#383838] rounded-[10px] cursor-pointer hover:bg-[#282A2C]'>
                   <p>Tell me about React js and React native</p>
                   <div className='absolute bottom-[10px] right-[10px]'><FaCode size={20} /></div>
                </div>
            </div>
            </>
            : <div id='resultScroll' className='py-0 px-[5%] max-h-[70vh] overflow-y-scroll'>
                {/* result title */}
                <div className='my-[40px] mx-0 flex items-center gap-5 '>
                    <FaCircleUser size={30} />
                    <p>{recentPrompt}</p>
                </div>
                <div className='flex items-start gap-5 '>
                    <img src={gemini_logo} className='h-9' />
                    {loading
                    ? <div id='loader' className='w-[100%] flex flex-col gap-[10px] '>
                        <hr className='rounded-[4px] border-none bg-[#1E1F20]   bg-[length:800px_50px] h-[20px]' />
                        <hr className='rounded-[4px] border-none bg-[#1E1F20]   bg-[length:800px_50px] h-[20px]'/>
                        <hr className='rounded-[4px] border-none bg-[#1E1F20]   bg-[length:800px_50px] h-[20px]'/>
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}} className='text-[17px] font-[300] leading-[1.8]'></p> }
                    
                </div>
            </div>
        }

            

            {/* bottom prompt bar */}
            <div className='absolute bottom-0 w-[100%] max-w-[900px] py-0 px-5 m-auto'>
                {/* search box */}
                <div className='flex items-center justify-between bg-[#1E1F20] rounded-[50px]'>
                    <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Ask Gemini' className='flex-1 bg-transparent border-none outline-none p-5 text-[18px] ' />
                       <div className='flex p-5 gap-5'>
                        <LuImagePlus size={25} className='cursor-pointer hover:bg-[#2F3030] rounded-full '/>
                        <MdOutlineMicNone size={25} className='cursor-pointer hover:bg-[#2F3030] rounded-full ' />
                     <BiSend onClick={() => onSent()} size={25} className='cursor-pointer hover:bg-[#2F3030] rounded-full ' />
                       </div>
                </div>
                <div  className='text-center p-3 text-xs'>
                    <p>Gemini can make mistakes, so double-check it</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main