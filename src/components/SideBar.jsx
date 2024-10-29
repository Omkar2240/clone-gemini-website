import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { BiHelpCircle } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { Context } from "../context/Context";

const SideBar = () => {
    const [extend, setextend] = useState(false)
    const {onSent, prevPrompt, setRecentPrompt,newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt)
    }
    

  return (
    <div className="md:max-w-[600px]  text-white min-h-[100vh] items-center inline-flex flex-col justify-between bg-[#1E1F20] px-[15px] py-[25px] ">

      {/* top part */}
      <div className="cursor-pointer">
        <FiMenu size="1.5em" onClick={()=>setextend(prev=>!prev)} />
        <div onClick={()=>newChat()} className="mt-[50px] inline-flex items-center gap-[10px] px-[10px] py-[15px] bg-[#282A2C] rounded-[50px] text-[14px] cursor-pointer">
          <FaPlus size="1.25em" />
         {extend?<p>NewChat</p>:null}
        </div>
        {extend?<div className="flex flex-col">
          <p className="mt-[30px] mb-[20px]">Recent</p>
          {prevPrompt.map((item,index)=>{
              return (
                <div onClick={()=> loadPrompt(item)} className="hover:bg-[#282A2C] flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] ">
                <LuMessageSquare />
                <p>{item.slice(0,18)} ...</p>
              </div>
              )
          })}
         
        </div>:null}
      </div>

      {/* bottom part */}
      <div className=" flex flex-col ">
        <div className="hover:bg-[#282A2C] flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer">
          <BiHelpCircle size="1.5em" />
          {extend?<p>Help</p>:null}
        </div>
        <div className="hover:bg-[#282A2C] flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer">
          <LuHistory size="1.5em" />
          {extend?<p>Activity</p>:null}
        </div>
        <div className="hover:bg-[#282A2C] flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer">
          <LuSettings size="1.5em" />
          {extend?<p>Settings</p>:null}
        </div>
      </div>
      
    </div>
  );
};

export default SideBar;
