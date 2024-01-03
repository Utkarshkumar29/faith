import custom from '../../styles/page.module.css'
import faith from '../../assets/download.jpg'
import Image from 'next/image'

const ImageView=({data})=>{
    return(
        <div className={custom.imageWrapper}>
          <div className={custom.shadowOverlay}></div>
          <Image src={faith} alt='Error' priority objectFit='cover'/>
          <p className={custom.name}>{data.instructor.name}</p>
          <p className={custom.course}>{data.course.title}</p>
        </div>  
    )
}

export default ImageView