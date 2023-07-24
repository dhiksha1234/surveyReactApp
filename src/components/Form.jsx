import { Navbar, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import AlertModal from "./alertModal";
import axios from 'axios';
import { Link } from "react-router-dom";
 

function Form() {
  const [pageNumber, setPageNumber] = useState(1);
  const [answeredQuestion, setAnsweredQuestion] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [allAnsweredPerPage, setAllAnsweredPerPage] = useState(false);
  const [postData, setPostData] = useState([]);

  const [disable, isDisabled] = useState(true);
  const perPage = 5;
  const totalPageCount = Math.ceil(questionList.length / perPage);

  useEffect(() => {
     
    axios.get(`http://localhost:8000/api/v1/question`)
    .then(res => {
      setQuestionList(res.data);
    })

    axios.get(`http://localhost:8000/api/v1/option`)
    .then(res => {
      setOptionList(res.data);
    })

    
  }, []);
 
  const handleOnChange = (index, value, e,questionId,optionId) => {
    setAnsweredQuestion({
      ...answeredQuestion,
      [e.target.name]: e.target.value,
    });
    console.log("surveyQuestion.questionId",questionId)
    console.log("option",optionId)
  

    axios.get(`http://localhost:8000/api/v1/question/option/${questionId}/${optionId}`)
    .then( res => {
      const questionOptionID = res.data[0].Options[0].Question_Option.questionOptionId;
      console.log("questionOptionID",questionOptionID)
      setPostData((prev)=>({
        ...prev,
        [questionId]: questionOptionID
      }))

    })
    isDisabled(false);
    
   };
   console.log(postData)
 
   
   const handleSubmitBtn = () => {

      const userId = 1;

      const responsesArray = Object.values(postData).map((questionOptionId) => {
         return {
          userId,
          questionOptionId,
        };
      });
      console.log("array",responsesArray)

      //post the response
      axios.post("http://localhost:8000/api/v1/response", responsesArray)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
      // display the response
      axios.get(`http://localhost:8000/api/v1/response`)
      .then(res => {
        console.log(res.data);
      })
   }

 
  const openPopup = () => {
    let select = document.getElementById("popup");
    select.classList.add("set-popup");
    document.getElementById("overLay").style.display = "block";
   };

  const closePop = () => {
    let select = document.getElementById("popup");
    select.classList.remove("set-popup");
    document.getElementById("overLay").style.display = "none";
  };

  const SubmitBtn = () => {
    return (
      <>
        <button
          type="button"
          className="btn  mt-2 startedBtn mb-2"
          disabled={disable}
          onClick={() => {
            openPopup();
           }}
        >
          {" "}
          Complete{" "}
        </button>
        <div className="popup" id="popup">
          <h4 className="nav-text">
            Are you sure you're happy with your answer?
          </h4>
          <p className="text">
            Once you completed your profile you won't be able to edit it
          </p>
          <button
            className="back-btn"
            onClick={() => {
              closePop();
            }}
          >
            Go back
          </button>
          <Link to="/summary">
            <button className="complete-prof" onClick={handleSubmitBtn}>Complete profile</button>
          </Link>
        </div>
      </>
    );
  };


  return (
    <>
      {/* Image */}
      <div className="image-wrapper">
        <Image
          src="./group_study.jpg"
          className=""
          width="100%"
          height="400"
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Navbar */}
      <Navbar
        className="d-flex justify-content-between navBar"
        data-bs-theme="dark"
      >
        <Navbar.Brand>
          Page {pageNumber} of {totalPageCount}
        </Navbar.Brand>
        <Navbar.Brand>
          {" "}
          {Math.floor(Object.keys(answeredQuestion).length * 20)}% completed
        </Navbar.Brand>
      </Navbar>
      {/* Mapping the surveyQuestions */}
      <div className="question mt-5 mx-5">
        {questionList
          .map((surveyQuestion, parentIndex) => {
            return (
              <>
                <div className="question-wrapper" key={parentIndex}>
                  <h3 className="textColor fw-bold mt-4">
                    {surveyQuestion.surveyQuestion}
                  </h3>
                  {/* Mapping the options */}
                  {optionList.map((option, index, e) => {
                    return (
                      <div
                        className={"radioBtn"}
                        key={`${parentIndex}${index}`}
                      >
                        <input
                          className={"form-check-input"}
                          type="radio"
                          name={surveyQuestion.surveyQuestion}
                          value={option}
                          id={`${parentIndex}${index}`}
                          onClick={(e) => {
                            handleOnChange(index, surveyQuestion.surveyQuestion, e,surveyQuestion.questionId, option.optionId);
                          }}
                        />
                        <label
                          className="form-check-label label-radio-btn"
                          htmlFor={`${parentIndex}${index}`}
                        >
                          
                          {option.surveyOptions}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
      </div>
      <hr />
      {/* Alert modal when all questions are not filled */}
      <AlertModal
        allAnsweredPerPage={allAnsweredPerPage}
        setAllAnsweredPerPage={setAllAnsweredPerPage}
      />
      <div className="pageFooter ">
      </div>
   
      <SubmitBtn/>
      <div id="overLay" className="over-lay"></div>
    </>
  );
}
export default Form;
