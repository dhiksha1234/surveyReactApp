import Row from "react-bootstrap/Row";
import axios from 'axios';
import { useEffect, useState } from "react";

const Complete = () => {

  const [ response, setResponse]= useState([]);

    useEffect(() => {
      
      axios.get(`http://localhost:8000/api/v1/response`)
      .then(res => {
         setResponse(res.data)
      })
    }, [response]);

   
  return (
    <>
      <Row>
        <div>
          <img
            src="./group_study.jpg"
            alt="university_img"
            className="studyImage"
          />
        </div>
      </Row>
      <div className="container-fluid">
        <div className="pt-3">
          <h1>Results</h1>
           {response.map((response) => {
            const questionOption = response.Question_Option;
            const surveyQuestion = questionOption.Question.surveyQuestion;
            const surveyOption = questionOption.Option.surveyOptions;

            return (
              <> 
                <center>
                <p>Question - {surveyQuestion} </p>        
                <p>Option - {surveyOption}</p>
                </center>
              </>
            )
          })}
          <p>Congratulations Test!</p>
          <p>
            ParagraphParagraphs are the group of sentences combined together,
            about a certain topic. It is a very important form of writing as we
            write almost everything in paragraphs, be it an answer, essay,
            story, emails, etc. We can say that a well-structured paragraph is
            the essence of good writing. The purposes of the paragraph are to
            give information, to explain something, to tell a story, and to
            convince someone that our idea is right.
          </p>
          <p>
            Before you can begin to determine what the composition of a
            particular paragraph will be, you must first decide on an argument
            and a working thesis statement for your paper. What is the most
            important idea that you are trying to convey to your reader? The
            information in each paragraph must be related to that idea. In other
            words, your paragraphs should remind your reader that there is a
            recurrent relationship between your thesis and the information in
            each paragraph. A working thesis functions like a seed from which
            your paper, and your ideas, will grow. The whole process is an
            organic one—a natural progression from a seed to a full-blown paper
            where there are direct, familial relationships between all of the
            ideas in the paper. The decision about what to put into your
            paragraphs begins with the germination of a seed of ideas; this
            “germination process” is better known as brainstorming. There are
            many techniques for brainstorming; whichever one you choose, this
            stage of paragraph development cannot be skipped. Building
            paragraphs can be like building a skyscraper: there must be a
            well-planned foundation that supports what you are building. Any
            cracks, inconsistencies, or other corruptions of the foundation can
            cause your whole paper to crumble.
          </p>
        </div>
      </div>
    </>
  );
};

export default Complete;
