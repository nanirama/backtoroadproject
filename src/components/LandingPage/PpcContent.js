import React, {useRef} from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import Image from './image'

const PpcContent = (props) => {
    const containerRef13 = useRef() 
    const lockRef13 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef13)
    if (isIntersecting && !lockRef13.current) {
        lockRef13.current = true
    }
    const { content, image, title} = props
    return(
        <div ref={containerRef13}>
        {lockRef13.current && (
        <>
            <div className="parts_blk w-100 float-left position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 pr-4">
                            <h2 className="mb-4 pb-2">{title && title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content }} className="w-100 float-left overflow-hidden main-content" ></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="w-100 float-left">
                                {image && <Image img={image.localFile} imgalt="Summary"/>}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )}
        </div>
    )
}
export default PpcContent