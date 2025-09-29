import { Play, Pause, RotateCw, Power } from 'lucide-react';

const Controls = () => {

    return (
        <div className="grid grid-cols-2 gap-2 text-xl">
            <div className='flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer'>
                <Play/>
                START
            </div>
            <div className='flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer'>
                <Pause/>
                PAUSE
            </div>
            <div className='flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer'>
                <RotateCw/>
                RESTART LAP
            </div>
            <div className='flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer'>
                <Power/>
                RESTART
            </div>
        </div>
    )
}

export default Controls;