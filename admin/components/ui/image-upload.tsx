

"use client"

import { useEffect, useState } from "react";

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string)=>void;
    onRemove: (value: string)=>void;
    value: string[];
}

const ImageUpload:React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value,
}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    const onUPload = (result: any) =>{
        onChange(result.info.secure_url);
        
    }

    return (
        <>
        <div className="flex flex-wrap">
            {value.map((url, index)=>(
                <div key={index} className="relative w-32 h-32 mr-2 mb-2">
                    <img src={url} className="w-full h-full object-cover" />
                    <div className="absolute top-0 right-0">
                        <button onClick={()=>onRemove(url)} className="bg-red-500 text-white px-2 py-1 rounded-full">
                           
                        </button>
                    </div>
                </div>
            ))}
            <div className="relative w-32 h-32 mr-2 mb-2">
                
               
                    
                    </div>

            </div>

        
        </>
    )
}