import { faComments, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fs from 'fs'
import course from '../../styles/course.module.css'

export default async function CoursePage() {
  let data = [];

  try {
    const file = fs.readFileSync(process.cwd() + '/public/data.json', 'utf8');
    data = JSON.parse(file);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className={course.container}>
        <p className={course.title}>Course fees</p>
        <p className={course.amount}>₹{data.course.fee.amount}</p>
        <p className={course.included}>What's included</p>
        <p className={course.icons}><FontAwesomeIcon icon={faTv} width={20}/>5 on demand videos</p>
        <p className={course.icons}><FontAwesomeIcon icon={faTv} width={20}/>2 livestream sessions</p>
        <p className={course.icons}><FontAwesomeIcon icon={faComments} width={20}/>Live Q&A sessions with Nityanand Charan Das</p>
        <p className={course.icons}><FontAwesomeIcon icon={faComments} width={20}/>An active Whatsapp community</p>
        <button className={course.btn}>Register Today</button>
    </div>
  );
}
