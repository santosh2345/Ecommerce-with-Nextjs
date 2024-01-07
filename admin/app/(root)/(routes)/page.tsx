"use client"

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";


const  SetupPage=()=> {

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  },[isOpen, onOpen])


  return (
    <div className='p-5'>
     Root Page
        
    </div>
  )
}

export default SetupPage;