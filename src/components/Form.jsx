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
  },
  {
    "surveyQuestion":"You are a logical thinker",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"You are a spiritual person",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Do you complete assignment within time",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Do you spend more time in mobile",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Do you need guidance from tutor",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Are you a social person",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Do you like Algebra",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Do you know Newton's second law",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Do you know the symbol of copper",
    "type":"radioButton"
  },
  {
    "surveyQuestion":"Do you know the symbol of gold",
    "type":"radioButton"
  }
 ]

 const questionOptions = ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree']

  

function Form() {
  const [ pageNumber, setPageNumber] = useState(1);
  const [ selectedRadioBtn, setSelectedRadioBtn] = useState(0);
  const [ answeredQuestion, setAnsweredQuestion] = useState({});
  const [ firstIndex, setFirstIndex] = useState(0);
  const [ lastIndex, setLastIndex] = useState(5);
  const [ backButtonEnable, setBackButtonEnable] = useState(false);
  const [ question, setQuestion] = useState(surveyQuestions.slice(0,5));
  const [ reachedEnd, setReachedEnd]= useState(false);
  const perPage = 5;
  const totalPageCount = Math.ceil(surveyQuestions.length / perPage);

 
  const handleOnChange = (index,question,e) =>{
    setSelectedRadioBtn(index);
    setAnsweredQuestion({...answeredQuestion, 
      [e.target.name] : e.target.value})
    }

   const handleNextPage = () =>{
    if(totalPageCount === pageNumber){
      console.log("end")
      setReachedEnd(true)
    }
    console.log("Next button before setting -- firstIndex",firstIndex,"lastIndex",lastIndex,"pageNumber",pageNumber)
    setBackButtonEnable(true)
    setPageNumber(pageNumber+1)
    setLastIndex(5*pageNumber)

    setFirstIndex(lastIndex)
    setQuestion(surveyQuestions.slice(firstIndex,lastIndex))
    
    console.log("Next button after -- firstIndex",firstIndex,"lastIndex",lastIndex,"pageNumber",pageNumber)
    console.log("question", question);
 
  }

 

   const handlePreviousPage = () =>{
    console.log("Previous button after -- firstIndex",firstIndex,"lastIndex",lastIndex,"pageNumber",pageNumber)

    setPageNumber(pageNumber-1)
    setLastIndex(5*pageNumber)
    setFirstIndex(lastIndex-5)
    setQuestion(surveyQuestions.slice(firstIndex,lastIndex))

    console.log("Previous button after -- firstIndex",firstIndex,"lastIndex",lastIndex,"pageNumber",pageNumber)
  
   }

  useEffect(()=>{
    // console.log('Q and A',answeredQuestion);
    // setQuestion(surveyQuestions.slice(firstIndex,lastIndex))
    // console.log("firstIndex", firstIndex)
    // console.log("lastIndex",lastIndex)
    // console.log("pageNo",pageNumber)
    // setFirstIndex(lastIndex)
      // setFirstIndex(lastIndex-5)
      // setLastIndex(5*pageNumber)
      // setQuestion(surveyQuestions.slice(firstIndex,lastIndex))
     // console.log("effect - selectedRadioBtn",selectedRadioBtn);
   }, [selectedRadioBtn, answeredQuestion,firstIndex,lastIndex,pageNumber])//what to execute, when

    return(
        <>
             <div className='image-wrapper'>
             <Image src="./group_study.jpg" className=''   width="100%"
              height="400" style={{ objectFit:'cover'}}/>
            </div>
            <Navbar className='d-flex justify-content-between navBar' data-bs-theme="dark">
              <Navbar.Brand >Page {pageNumber} of {totalPageCount}</Navbar.Brand>
              <Navbar.Brand > First Index {firstIndex} Last Index {lastIndex}</Navbar.Brand>
              <Navbar.Brand > {Math.floor(Object.keys(answeredQuestion).length*6.7)}% completed</Navbar.Brand>
             </Navbar>

             {/* Mapping the surveyQuestions */}
            <div className='question mt-5 mx-5'>
              { question.map((question,parentIndex)=>{
               
            return (
               <>
              <div className='question-wrapper' key={parentIndex}>
              <h3 className='textColor fw-bold mt-4'>{question.surveyQuestion}</h3>
                {/* Mapping the options */}
               {
                 questionOptions.map((option,index) =>{
                  return(
                      <div className ='radioBtn' > 
                      <input 
                      className='form-check-input mx-3' 
                      type="radio" name={question.surveyQuestion} 
                      value={option}
                      onChange={(e)=>{
                        handleOnChange(index,question.surveyQuestion,e)
                        }}
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
              {backButtonEnable && <button type="button" className = "btn mt-2 mx-5 saveLaterBtn mb-2" onClick={()=>{handlePreviousPage()}}> Previous</button>}
              
              <button type="button" className = "btn mt-2 mx-5 saveLaterBtn mb-2 " > Save for later</button>
              {reachedEnd || <button type="button" className = "btn mt-2 mx-3 startedBtn mb-2" onClick={()=>{handleNextPage()}}> Next </button>}
              {reachedEnd && <button type="button" className = "btn mt-2 mx-3 startedBtn mb-2" > Submit </button>}
            </div>

         </>
    )
}

export default Form;
