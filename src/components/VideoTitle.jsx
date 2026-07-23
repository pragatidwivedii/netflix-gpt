

const VideoTitle = ( {title , overview} ) => {
    
    return(
        <div className='z-0 absolute text-white bg-linear-to-r from-black/50 to-transparent aspect-video content-end'>
            <div className="m=5 p-5 mb-[22%] ml-[5%]">
            <h1 className="font-bold text-5xl mb-8">{title}</h1>
            <p className="w-1/3 text-lg my-3">{overview}</p>
            <div className="flex">
            <div className="flex border my-2 mr-5 p-1 cursor-pointer w-25 bg-white text-black text-center rounded-lg">
                <img src="https://img.icons8.com/m_sharp/1200/play--v1.jpg" className="w-10 "/>
                <button className="text-lg font-bold ml-1 ">  Play</button>
               
            </div>
            <div className="flex border my-2 mr-2 p-2 cursor-pointer w-35 bg-white text-black text-center rounded-lg">
                <img src="https://img.icons8.com/ios7/1200/info.jpg" className="w-7 "/>
                <button className="text-lg font-bold ml-2">  More info</button>
               
            </div>
            </div>
            </div>
        </div>
    )
}

export default VideoTitle;

