

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
        <div className="mb-4 flex items-center gap-4">
            {value.map((url)=>(
                <div key={url}>
                    
                    </div>

            ))}

                
           
           

            </div>

        
        </>
    )
}