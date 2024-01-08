import { PlusIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    };


const Heading:React.FC<HeadingProps> = ({
    title,
    description
}) => {
  return (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-sm font-medium text-gray-500">{description}</p>
        </div>
        <div>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none">
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                New
            </button>
        </div>
    </div>
  )
}

export default Heading