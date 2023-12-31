import { Navbar, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
 

function Form() {

  const [formList, setFormList] = useState([]);
  const [postData, setPostData] = useState([]);
  const [userId, setUserId] = useState([]);

  const perPage = 5;
  const totalPageCount = Math.ceil(formList.length / perPage);

  useEffect(() => {
     
    axios.get(`http://localhost:8000/api/v1/form`)
    .then(res => {
      setFormList(res.data);
    })   
    setUserId(Math.floor((Math.random() * 10)));
   }, []);
 
  const handleOnChange = (questionId,optionId) => {

    const questionData = formList?.find((f) => f.questionId === questionId);
    questionData.selectedOption = optionId;
    questionData.userId = userId;


       setPostData((prev)=>({
        ...prev,
        [questionId]: optionId
      }))
  };
    
  const handleSubmitBtn = () => {
  
      //post the response
      axios.post("http://localhost:8000/api/v1/form", formList)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      }); 
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
        <div className = 'd-flex justify-content-end'>
          <button
            type="button"
            className="btn startedBtn mb-2 me-5"
             disabled={Object.values(postData).length === 5? false : true}
             onClick={() => {
               openPopup();
              }}
          >
            Complete
          </button>
        </div>
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
          alt="university_img"
          className="studyImage"
        />
      </div>
      {/* Navbar */}
      <Navbar
        className="d-flex justify-content-between navBar"
        data-bs-theme="dark"
      >
        <Navbar.Brand>
          Page 1 of {totalPageCount}
        </Navbar.Brand>
        <Navbar.Brand>
           {Math.floor(Object.keys(postData).length * 20)}% completed
        </Navbar.Brand>
      </Navbar>
      {/* Mapping the surveyQuestions */}
      <div className="question mt-5 mx-5">
        {formList
          .map((surveyQuestion, parentIndex) => {
            return (
              <>
                <div className="question-wrapper" key={parentIndex}>
                  <h3 className="textColor fw-bold mt-4">
                    {surveyQuestion.surveyQuestion}
                  </h3>
                  {/* Mapping the options */}
                  {surveyQuestion.Options.map((option, index, e) => {
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
                          onClick={() => {
                            handleOnChange(surveyQuestion.questionId, option.optionId);
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
 
      <div className="pageFooter ">
      </div>
   
      <SubmitBtn/>
      <div id="overLay" className="over-lay"></div>
    </>
  );
}
export default Form;
