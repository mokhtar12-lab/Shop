import "./spinnerStyle.css"


export default function Spinner() {
    return (
        <div className="spinner" >
            <div className="flex-col gap-4 w-1 flex items-end justify-center">
                <div className="w-10 h-10 border-2 border-transparent text-blue-400 text-2xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                    <div className="w-10 h-10 border-2 border-transparent text-red-400 text-1xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
