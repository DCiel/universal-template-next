'use client'
import { TodoClient } from "@/common/core-axios/todo/client";
import Image from "next/image";
import { useEffect } from "react";

export const HomePage: React.FC = () => {

  useEffect(()=>{
    TodoClient.getTodo().then(res=>{
      console.log(res);
      res.forEach(e=>{
        console.log(e);
      })
    })
  },[]);

  return (
    <div className="">
      <Image
        src={'/logo.svg'}
        alt="Logo cat ecl"
        width={512}
        height={512}
        className=" w-64 h-64"
      />
      Home page
    </div>
  );
}
