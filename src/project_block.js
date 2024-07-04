import {useState, useEffect} from 'react'
import './project_block.css'

export default function ProjectTile({name, desc, siteLink, linkText, gitLink, gitText, IMGtile}) {
    

        const [isMobile, setIsMobile] = useState(window.innerWidth < 600)
    
    useEffect(()=>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth <900);
        };

        window.addEventListener('resize', handleResize)

    
    },[])

    return(
        <div className = 'projectTile'>
            <div className='title'>
                {name}
            </div>
            <div className='information'>
                { !isMobile && <div className='col1'>
                    <div className='imageHolder'>
                        <img className="imageCSS" src={IMGtile}></img>
                    </div>
                    
                </div>}
                <div className='col2'>
                    
                    <div className='linksOuter'>
                    <div className='linksInner'>
                        <a href={siteLink} target="_blank">{linkText}</a>
                    </div>
                    <div className='linksInner'>
                        <a href= {gitLink} target="_blank">{gitText}</a>
                    </div>
                    </div>
                    <div className='desc'>
                        {desc}
                    </div>
                </div>
            </div>
        </div>
    )
}