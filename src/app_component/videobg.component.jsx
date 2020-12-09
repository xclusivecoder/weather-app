import  React from 'react';



const  BackgroundVideo=()=> {
    const  videoSource="https://youtu.be/EuOlYPSEzSc";
    return (
        <div>

            
               <video  autoPlay="autoplay"  loop="loop"  muted >

                     <source  src={videoSource}  type="video/mp4"/>
    
    

               </video>
               No video playing



        
        
        
        </div>
    )
}

export default BackgroundVideo;