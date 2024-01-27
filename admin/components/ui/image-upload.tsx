"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImagePlus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onUPload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px]  rounded-md overflow-hidden"
          >
            <div className="z-10  absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image fill src={url} className="object-cover" alt="Image" />
          </div>
        ))}
      </div>
      <CldUploadWidget
      onUpload={onUPload}
      uploadPreset="ra7eoxse"
        >
            {
                ({open})=>{
                    const onClick = () => {
                        open()
                    }
                    return (
                    <Button
                    type="button"
                    disabled={disabled}
                    variant = "secondary"
                    onClick={onClick}
                    >
                        <ImagePlus className="h-4 w-4 mr-2" />

                    </Button>
                      
                    )

                }
            }

      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
