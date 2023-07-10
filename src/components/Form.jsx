import { Navbar , Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
 

  
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
  const [ pageNumber, setPageNumber] = useState(1);
  const [ selectedRadioBtn, setSelectedRadioBtn] = useState(0);
  const [ answeredQuestion, setAnsweredQuestion] = useState({});
 
  const handleOnChange = (index,question,e) =>{
    setSelectedRadioBtn(index);
    setAnsweredQuestion({...answeredQuestion, 
      [e.target.name] : e.target.value})
      console.log(answeredQuestion);
   }

  useEffect(()=>{
    console.log("useEffect");
    console.log('Q and A',answeredQuestion);

    console.log("effect - selectedRadioBtn",selectedRadioBtn);
   }, [selectedRadioBtn,answeredQuestion])//what to execute, when

    return(
        <>
             <div className='image-wrapper'>
             <Image src="./group_study.jpg" className=''   width="100%"
              height="400" style={{ objectFit:'cover'}}/>
            </div>
            <Navbar className='d-flex justify-content-between navBar' data-bs-theme="dark">
              <Navbar.Brand >Page {pageNumber} of 3</Navbar.Brand>
              <Navbar.Brand > {Object.keys(answeredQuestion).length*7}% completed</Navbar.Brand>
            </Navbar>
            <div className='question mt-5 mx-5'>
               
             { surveyQuestions.map((question,parentIndex)=>{
               
            return (
               <>
              <div className='question-wrapper' key={parentIndex}>
              <h3 className='textColor fw-bold mt-4'>{question.surveyQuestion}</h3>
               {
                 questionOptions.map((option,index) =>{
                  return(
                      
                   <div className ='form-check radioBtn '> 
                    <input 
                    className='form-check-input mx-3' 
                    type="radio" name={question.surveyQuestion} 
                    value={option}
                    onChange={handleOnChange}
                     />
                      <label className="form-check-label" htmlFor={option.question}>
                        {option}
                      </label>
                  </div>
                  )
                })
              }
              </div>
        </>
        )
      })}

            </div>

            <hr/>
            <div className='pageFooter d-flex justify-content-end'> 
              
             <button type="button" className = "btn mt-2 mx-5 saveLaterBtn mb-2"> Save for later</button>
             <button type="button" className = "btn mt-2 mx-3 startedBtn mb-2" onClick={()=>{ setPageNumber(pageNumber+1)}}> Next </button>

            </div>

         </>
    )
}

export default Form;