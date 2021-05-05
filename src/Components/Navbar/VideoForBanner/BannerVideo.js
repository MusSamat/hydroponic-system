import React from "react";
import './BannerVideo.css'

const BannerVideo = () => {
    return (
        <div className='video-div'>
            <div className='banner_title'>
                <div className="banner_slog">
                    Кубаттуу жана {<br/>} тез өсүү
                </div>

                <button className='main_button'>
                    Кызматташуу
                </button>


            </div>
            <button className='left_side'>
                Kyrgyz Republic
            </button>
            {/*<span className="left_side_text">*/}
            {/*        Бул сайт гидропоника боюнча Кыргызстандагы алгачкы сайт*/}
            {/*    </span>*/}
            <video autoPlay muted loop className='playVideo'>
                <source src="https://edge.generalhydroponics.com/www/uploads/20210206014844/home-v3-1k-trim.webm"
                        type='video/webm'/>
                <source src="https://edge.generalhydroponics.com/www/uploads/20210206014907/home-v3-1k-trim.mp4"
                        type='video/mp4'/>
            </video>
        </div>
    )
}

export default BannerVideo