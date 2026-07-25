

const VideoTitle = ( {title , overview} ) => {
    
    return(
        <div className='z-0 absolute text-white bg-linear-to-r from-black/50 to-transparent aspect-video md:content-end h-full w-full '>
            <div className="md:m-5 p-5 md:mb-45 md:ml-20 mt-20 md:mt-0">
            <h1 className="font-bold text-2xl md:text-5xl  md:mb-2 md:mb-8">{title}</h1>
            <p className="hidden md:inline-block w-100 text-lg my-3">{overview}</p>
            <div className="flex">
            <div className="flex border my-2 mr-5 p-1 cursor-pointer md:w-25 bg-white text-black text-center rounded-lg">
                <img src="https://img.icons8.com/m_sharp/1200/play--v1.jpg" className="w-5 md:w-10 "/>
                <button className="md:text-lg font-bold ml-1 ">  Play</button>
               
            </div>
            <div className="hidden md:flex border my-2 mr-2 p-2 cursor-pointer w-35 bg-white text-black text-center rounded-lg">
                <img src="https://img.icons8.com/ios7/1200/info.jpg" className="w-7 "/>
                <button className="text-lg font-bold ml-2">  More info</button>  
            </div>
            </div>
            </div>
        </div>
    )
}

export default VideoTitle;

