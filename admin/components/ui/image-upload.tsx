

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
            {value.map((item, index)=>(
                <div key={index} className="w-1/2 p-2">
                    <div className="relative">
                        <img src={item} className="w-full" />
                        <div className="absolute top-0 right-0">
                            <button className="p-2 bg-red-500 text-white" onClick={()=>onRemove(item)}>X</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-1/2 p-2">
                <ImagePicker
                    disabled={disabled}
                    onUpload={onUPload}
                />
            </div>
        
        </>
    )
}