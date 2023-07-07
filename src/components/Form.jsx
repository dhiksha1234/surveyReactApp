import { Navbar , Image } from 'react-bootstrap';
 
 
const surveyQuestions = [
  {
    "surveyQuestion":"I am confident that I will successfully complete this course",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"You are a fast learner",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"You are a interested in Maths",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"You are a interested in Science",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"You are a interested in Social",
    "type":"radioButton"
  }
 ]

 const questionOptions = ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree']

 


function Form() {
    return(
        <>
             <div className='image-wrapper'>
             <Image src="./group_study.jpg" className=''   width="100%"
              height="400" style={{ objectFit:'cover'}}/>
            </div>
            <Navbar className='d-flex justify-content-between navBar' data-bs-theme="dark">
              <Navbar.Brand href="#home" >Page 1 of 3</Navbar.Brand>
              <Navbar.Brand href="#home" > 4% completed</Navbar.Brand>
            </Navbar>
            <div className='question mt-5 mx-5'>
               
             { surveyQuestions.map((question,index)=>{
            return (
              <>
              <h3 className='textColor fw-bold mt-4' key={index}>{question.surveyQuestion}</h3>
              {
                questionOptions.map((questionOption,index) =>{
                   return(
                   <div className='form-check radioBtn'>
                    <input className='form-check-input mx-3' type="radio" name={questionOption} key={index} id={index} onClick={(event)=>{console.log('click',event.target.name,event,question.index)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      {questionOption}
                    </label>
                  </div>
                  )
                })
              }
        </>
        )
      })}

            </div>

            <hr/>
            <div className='pageFooter d-flex justify-content-end'> 
              
             <button type="button" className = "btn mt-2 mx-5 saveLaterBtn mb-2"> Save for later</button>
             <button type="button" className = "btn mt-2 mx-3 startedBtn mb-2"> Next </button>

            </div>

         </>
    )
}

export default Form;