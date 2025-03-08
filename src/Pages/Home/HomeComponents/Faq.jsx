import React from "react";

const Faq = () => {
  const data = [
    {
      questions: "Question 1 ?",
      answers:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, molestias.",
    },
    {
      questions: "Question 2 ?",
      answers:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, molestias.",
    },
    {
      questions: "Question 3 ?",
      answers:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, molestias.",
    },
    {
      questions: "Question 4 ?",
      answers:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, molestias.",
    },
  ];
  return (
    <div className="fff">
      <h1 className="heading">FAQs</h1>
      <section className="faq">
      {/* <h1 className="heading">FAQs</h1> */}
        <div className="item">
          {data.map((index) => {
            return (
              <div className="wraper" key={index.questions}>
                <div className="question" >
                  <h3>{index.questions}</h3>
                </div>
                <div className="answer" >
                  <p>{index.answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Faq;
