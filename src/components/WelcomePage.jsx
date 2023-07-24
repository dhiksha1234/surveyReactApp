import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import { Link } from 'react-router-dom' ;
import '../styles/styles.css';
 

function WelcomePage(){
    return(
        <>
          <Row>
             <div>
             <img src="./group_study.jpg"  alt="" width="100%"
              height="400" style={{ objectFit:'cover'}}/>
            </div>
          </Row>
          <Row mt='4'>
            <div className='display-3 text-center mt-4 textColor'>
            Welcome to your Personal Learning Profile
            </div>
             
            <Col className='mt-4 mx-4'>
            Welcome All
          
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          
            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
             
            <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
            <p>We look forward to provide your learning profile</p>

            </Col>
           </Row>
                    
             <div>
            <Link to="/form"><button type="button" className = "btn btn-warning btn-sm btn-rounded mt-2 mx-5 startedBtn"> Lets get Started </button></Link>
            </div>

            <hr/>
            <Row className='mx-4'>
            <h1 className="textColor"> Our support team</h1>

            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.  </p>

            <ul className='mx-5'>
              <li>Latin professor at Hampden-Sydney College</li>
              <li>Apply below for those interested. Sections 1.</li>
              <li>Sydney College in Virginia, looked up </li>
               
            </ul>


            <p>Email: student.success@rmit.edu.co</p>
            <p>Call: 987654321</p>
            </Row>
        
         </>
    )
}

export default WelcomePage;