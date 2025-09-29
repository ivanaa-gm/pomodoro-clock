const History = () => {
return (
    <div className="h-full flex flex-col items-center bg-amber-300 gap-4 overflow-y-scroll">
        <h1 className="font-semibold text-xl">Previous runs:</h1>
        <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
                <img src="tomatoes.png" className="h-9"/>
                <p>learning biology..</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <img src="tomatoes.png" className="h-9"/>
                <p>learning maths..</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <img src="tomatoes.png" className="h-9"/>
                <p>learning geography..</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <img src="tomatoes.png" className="h-9"/>
                <p>learning biology..</p>
            </div><div className="flex flex-row items-center gap-2">
                <img src="tomatoes.png" className="h-9"/>
                <p>learning biology..</p>
            </div><div className="flex flex-row items-center gap-2">
                <img src="tomatoes.png" className="h-9"/>
                <p>learning biology..</p>
            </div>
        </div>
    </div>
)
}

export default History;