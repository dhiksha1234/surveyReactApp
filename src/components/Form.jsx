import { Navbar , Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AlertModal from './alertModal';
import ReactPaginate from 'react-paginate';
  
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
  const [ allAnsweredPerPage, setAllAnsweredPerPage] = useState(false);

  const perPage = 5;
  const totalPageCount = Math.ceil(surveyQuestions.length / perPage);
 
  const handleOnChange = (index,question,e) =>{
    console.log(e.target.value,e.target.name)
    setSelectedRadioBtn(index);
    console.log(selectedRadioBtn)
    setAnsweredQuestion({...answeredQuestion, 
      [e.target.name] : e.target.value})
    }

  const handleNextPage = () =>{
     setPageNumber((pageNumber) => pageNumber+1 )
   
  }
 
  const lastIndex = firstIndex+perPage;

  const PreviousBtn = () => {
    return(
      <button type="button" className = "btn mt-2 saveLaterBtn mb-2" onClick={()=>{handlePreviousPage()}}> Previous</button>
    )
   }
   const NextBtn = () => {
    return(
      <button type="button" className = "btn mt-2 startedBtn mb-2" onClick={()=>{handleNextPage()}}> Next </button>
     )
   }
   const SubmitBtn = () =>{
    return(
      <button type="button" className = "btn  mt-2 startedBtn mb-2" > Submit </button>
    )
   }
   const handlePreviousPage = () =>{
     setPageNumber(pageNumber-1)
  }

   const changePage = ({selected}) =>{
    const newFirst = (selected*perPage) %surveyQuestions.length
    setFirstIndex(newFirst);
   }

    return(
        <>
            {/* Image */}
            <div className='image-wrapper'>
             <Image src="./group_study.jpg" className=''   width="100%"
              height="400" style={{ objectFit:'cover'}}/>
            </div>
            {/* Navbar */}
            <Navbar className='d-flex justify-content-between navBar' data-bs-theme="dark">
              <Navbar.Brand >Page {pageNumber} of {totalPageCount}</Navbar.Brand>
              <Navbar.Brand > First Index {firstIndex} Last Index {lastIndex}</Navbar.Brand>
              <Navbar.Brand > {Math.floor(Object.keys(answeredQuestion).length*6.7)}% completed</Navbar.Brand>
             </Navbar>
             {/* Mapping the surveyQuestions */}
            <div className='question mt-5 mx-5'>
              { surveyQuestions.slice(firstIndex,lastIndex).map((question,parentIndex)=>{
                
                  return (
                    <>
                    <div className='question-wrapper' key={parentIndex}>
                    <h3 className='textColor fw-bold mt-4'>{question.surveyQuestion}</h3>
                      {/* Mapping the options */}
                    {
                      questionOptions.map((option,index,e) =>{
                        
                        return(
                            <div className ='radioBtn' > 
                            <input 
                            className='form-check-input mx-3' 
                            type="radio" name={question.surveyQuestion} 
                             
                            value={option}
                            id={`${question.surveyQuestion}_${option}`}
                            onChange={(e)=>{
                              handleOnChange(index,question.surveyQuestion,e)
                              }}
                              />
                            <label className="form-check-label" htmlFor={`${question.surveyQuestion}_${option}`}>
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
            <AlertModal allAnsweredPerPage={allAnsweredPerPage} setAllAnsweredPerPage={setAllAnsweredPerPage}/>
            <div className='pageFooter '>
            <ReactPaginate
              previousLabel={pageNumber===1?'':<PreviousBtn/>}
              nextLabel={totalPageCount === pageNumber ?<SubmitBtn/> : <NextBtn/>}
              pageCount={totalPageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"pre"}
              nextLinkClassName={"nextLink"}
              disabledClassName={"disable"}
              activeClassName={"paginationActive"}
            />
     
            
               
              </div>
             <button type="button" className = "btn mt-2 mx-5 saveLaterBtn mb-2 " > Save for later</button>
          
         </>
    )
}
export default Form;