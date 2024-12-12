import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward=()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
    

    




  return (
    <div className='testimonials'>
        <img src ={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src ={back_icon} alt="" className='back-btn'  onClick={slideBackward}/>
        <div className="slider">
            <ul ref ={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Girma Teferi</h3>
                                <span>Wolkite University, Ethiopia</span>
                            </div>
                        </div>
                        <p>Studying at Wolkite University has been a transformative experience that 
                            exceeded all my expectations. The university's dedicated faculty members not 
                            only imparted knowledge but also fostered critical thinking and a deep passion for 
                            learning. The diverse student community provided a rich cultural exchange that broadened
                             my perspectives. The state-of-the-art facilities and resources offered by Wolkite University 
                             supported my academic journey and research endeavors. I am grateful for the invaluable skills 
                             and lifelong friendships I have gained during my time at Wolkite University. It truly is a place
                              where academic excellence meets personal growth."</p>
                    </div>
                </li>
                 <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Abera Asfaw</h3>
                                <span>Wolkite University, Ethiopia</span>
                            </div>
                        </div>
                        <p>Studying at Wolkite University has been a transformative experience that 
                            exceeded all my expectations. The university's dedicated faculty members not 
                            only imparted knowledge but also fostered critical thinking and a deep passion for 
                            learning. The diverse student community provided a rich cultural exchange that broadened
                             my perspectives. The state-of-the-art facilities and resources offered by Wolkite University 
                             supported my academic journey and research endeavors. I am grateful for the invaluable skills 
                             and lifelong friendships I have gained during my time at Wolkite University. It truly is a place
                              where academic excellence meets personal growth."</p>
                    </div>
                </li>
                 <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>UMIN</h3>
                                <span>Wolkite University, Ethiopia</span>
                            </div>
                        </div>
                        <p>Studying at Wolkite University has been a transformative experience that 
                            exceeded all my expectations. The university's dedicated faculty members not 
                            only imparted knowledge but also fostered critical thinking and a deep passion for 
                            learning. The diverse student community provided a rich cultural exchange that broadened
                             my perspectives. The state-of-the-art facilities and resources offered by Wolkite University 
                             supported my academic journey and research endeavors. I am grateful for the invaluable skills 
                             and lifelong friendships I have gained during my time at Wolkite University. It truly is a place
                              where academic excellence meets personal growth."</p>
                    </div>
                </li>
                 <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Omina Bini</h3>
                                <span>Wolkite University, Ethiopia</span>
                            </div>
                        </div>
                        <p>Studying at Wolkite University has been a transformative experience that 
                            exceeded all my expectations. The university's dedicated faculty members not 
                            only imparted knowledge but also fostered critical thinking and a deep passion for 
                            learning. The diverse student community provided a rich cultural exchange that broadened
                             my perspectives. The state-of-the-art facilities and resources offered by Wolkite University 
                             supported my academic journey and research endeavors. I am grateful for the invaluable skills 
                             and lifelong friendships I have gained during my time at Wolkite University. It truly is a place
                              where academic excellence meets personal growth."</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
