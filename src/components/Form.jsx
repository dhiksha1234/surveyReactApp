import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function Form() {
    return(
        <>
        <h1> Form </h1>
        <Row>
             <div>
             <Image src="./group_study.jpg" className=''   width="100%"
              height="400" style={{ objectFit:'cover'}}/>
            </div>
          </Row>
        </>
    )
}

export default Form;