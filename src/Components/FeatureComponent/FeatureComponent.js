import React from "react";
import './FeatureComponent.css'

const FeatureComponent = () => {
    return (
        <div className='container'>

            <div className='feature_main'>
                <div className='feature_img'>
                    <img src="images/svg/feature.svg" alt="гидропоника"/>
                </div>
                <div className='feature_desc'>
                    <div className='feature_title'>
                        Автоматташтырылган гидропоника {<br/>}системасы

                        {<br/>}
                        <span>Заманбап технологиялардын жардамы бул системанын артыкчылыктары</span>
                    </div>
                    <div className='voice_div'>
                        <div className='voice'>
                            <div>
                                <img src="images/svg/voice.svg" alt="voice"/>
                            </div>
                            <div>Аралыктан башкаруу мүмкүнчүлүгү</div>
                        </div>
                        <div className='voice'>
                            <div>
                                <img src="images/svg/voice.svg" alt="voice"/>
                            </div>
                            <div>Убакытты үнөмдөө</div>
                        </div>
                        <div className='voice'>
                            <div>
                                <img src="images/svg/voice.svg" alt="voice"/>
                            </div>
                            <div>Экологиялык таза продукт</div>
                        </div>
                        <div className='voice'>
                            <div>
                                <img src="images/svg/voice.svg" alt="voice"/>
                            </div>
                            <div>Чыгымдарды азайтуу</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FeatureComponent