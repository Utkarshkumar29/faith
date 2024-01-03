import custom from '../../styles/page.module.css'
import fs from 'fs';
import ImageView from '@/app/views/imageView';
import Link from 'next/link';
import CoursePage from '@/app/components/courseBox/page';
import faith from '../../assets/Untitled.jpg'
import user from '../../assets/user.jpg'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeftLong, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  let data = [];

  try {
    const file = fs.readFileSync(process.cwd() + '/public/data.json', 'utf8');
    data = JSON.parse(file);
  } catch (error) {
    console.error(error);
  }


  return (
    <div className={custom.container}>
      <div className={custom.wrapper}>
        
        <ImageView data={data}/>

        <div className={custom.link}>
            <Link href='/pages/about'>
            <p className={custom.line}>About</p></Link>
            <p>Insturctor</p>
            <p>Reviews</p>
        </div>

        <CoursePage/>

        <div className={custom.textcontainer}>
          <p className={custom.textheading}>About the course</p>
          <p className={custom.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis, repellendus ipsa suscipit dolore beatae eius molestias velit perspiciatis dicta itaque ad ratione. Nemo sunt accusamus beatae? Molestias, quis quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quasi harum, quis consectetur eligendi alias!</p>
          <p className={custom.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis, repellendus ipsa suscipit dolore beatae eius molestias velit perspiciatis dicta itaque ad ratione. Nemo sunt accusamus beatae? Molestias, quis quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quasi harum, quis consectetur eligendi alias!</p>
          <p className={custom.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis, repellendus ipsa suscipit dolore beatae eius molestias velit perspiciatis dicta itaque ad ratione. Nemo sunt accusamus beatae? Molestias, quis quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quasi harum, quis consectetur eligendi alias!</p>
        </div>

        <div className={custom.textcontainer}>
          <p className={custom.textheading}>What to expect from the course</p>
          <div dangerouslySetInnerHTML={{ __html: data.course.what_to_expect.html_content }}/>
        </div>

        <div className={custom.textcontainer}>
          <p className={custom.textheading}>Key topics covered</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis, repellendus ipsa suscipit dolore beatae eius molestias velit perspiciatis dicta itaque ad ratione. Nemo sunt accusamus beatae? Molestias, quis quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quasi harum, quis consectetur eligendi alias!</p>
          <div dangerouslySetInnerHTML={{ __html: data.course.key_topics.html_content }}/>
        </div>

        <div className={custom.aboutcontainer}>
          <p className={custom.textheading}>About the Instructor</p>
          <div className={custom.textwrapper}>
          <Image src={faith} alt='Error' width={150} height={100} style={{borderRadius:"100%"}}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis, repellendus ipsa suscipit dolore beatae eius molestias velit perspiciatis dicta itaque ad ratione. Nemo sunt accusamus beatae? Molestias, quis quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quasi harum, quis consectetur eligendi alias!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis, repellendus ipsa suscipit dolore beatae eius molestias velit perspiciatis dicta itaque ad ratione. Nemo sunt accusamus beatae? Molestias, quis quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quasi harum, quis consectetur eligendi alias!</p>
          </div>
        </div>

        <div className={custom.iconcontainer}>
          <p className={custom.icons}><FontAwesomeIcon icon={faFacebook} width={20}/>Facebook</p>
          <p className={custom.icons}><FontAwesomeIcon icon={faYoutube} width={20}/>Youtube</p>
          <p className={custom.icons}><FontAwesomeIcon icon={faTwitter} width={20}/>twitter</p>
          <p className={custom.icons}><FontAwesomeIcon icon={faInstagram} width={20}/>Instagram</p>
        </div>

        <div className={custom.slidercontainer}>
          <FontAwesomeIcon icon={faArrowLeftLong} width={40}/>
          <div className={custom.slidertextwrapper}>
            <p className={custom.testimonial}>"{data.testimonial.text}"</p>
            
            <div className={custom.userinfo}>
              <Image src={user} alt='Erro' width={40} style={{borderRadius:"50%"}}/>
              <div>
                <p>Name of the reviewer</p>
                <p>Designation of the reviewer</p>
              </div>
            </div>
          </div>
          <FontAwesomeIcon icon={faArrowRight} width={40}/>
        </div>

      </div>
    </div>
  );
}
