import { Loader } from "lucide-react";
import { Spinner } from "../ui/spinner";

export default function LoaderCustom() {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
            {/* <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
            <Loader className="w-12 h-12  rounded-full animate-spin" />
        </div>
    );
}