import React, { useState } from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import media from "../../styles/media";

import upArrow from "../../img/up-arrow.svg";

const questions = [
  {
    q: "When is the conference taking place?",
    a: `<p>CUCAI 2023 will be taking place on the weekend of March 4th and 5th. Events will run from 9:00 am to 7:00 pm on Saturday, and 10:00 am to 4:00 pm Sunday.</p>`,
  },
  {
    q: "Where is the conference taking place?",
    a: `<p>This year, we are proud to be hosting CUCAI at it's birthplace on Queen's Campus in Kingston, Ontario.</p>`,
  },
  {
    q: "What is included with a ticket?",
    a: `<p>The purchace of a ticket includes access to all conference events, as well as meals on both Saturday and Sunday during the conference hours, including a Gala Dinner Saturday evening, followed by a social. Tickets for non-Kingston residents will be available for discounted hotel accomodations. </p>`,
  },
  {
    q: "When do conference applications open?",
    a: `<p>Applications to attend CUCAI 2023 will open in the new year. Students accepted to the conference will soonafter be able to purchase tickets to the conference. </p>`,
  },
  {
    q: "Will there be transportation available from my school?",
    a: `<p>We will be offering transportation from our student partner schools to and from Queen's. Please contact your student organizaiton for more information. </p>`,
  },
  {
    q: "How do I present my AI project at CUCAI 2023?",
    a: `<p>If you are a part of one of our Student Partner Groups, you will be included in the Design Team Showcase through them. If you are not a part of a Student Organization and wish to present, please contact us at <a href="mailto:chair@cucai.ca">chair@cucai.ca</a>. </p>`,
  },
];

const IdHrefAnchor = styled.a`
  display: block;
  position: relative;
  top: -60px; // height of navbar
  visibility: hidden;
`;

const Section = styled.section`
  width: 100vw;
  padding: 80px 0;
  background-color: #f4f4f4;

  a {
    color: ${theme.colors.cucaiBlue};
  }
`;

const Content = styled.div`
  max-width: 80%;
  margin: 0 auto;

  ${media.phone`
    max-width: 95%;
  `}
`;

const Header = styled.h1`
  font-family: ${theme.fonts.IBMPlexSansMedium};
  font-size: 3rem;

  ${media.phone`
    font-size: 2rem;
  `}
`;

const Questions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  ${media.tablet`
    flex-direction: column;
  `}
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  ${media.tablet`
    width: 100%;
    margin: 0;
  `}
`;

const StyledAccordion = styled.li`
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: #cccccc;
  overflow: hidden;
  background-color: white;
  transition: ${theme.transition};

  margin: 5px 0;
  width: 100%;

  &.open {
    border-color: ${theme.colors.cucaiBlue};
  }

  &.closed {
    border-color: #cccccc;
  }

  .topBar {
    cursor: pointer;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    transition: ${theme.transition};

    & img {
      display: inline;
      transition: ${theme.transition};
    }

    &.open {
      font-weight: bold;

      & img {
        transform: rotate(0);
      }
    }

    &.closed {
      font-weight: normal;

      & img {
        transform: rotate(180deg);
      }
    }
  }

  .topBar:hover {
    background-color: #f4f4f4;
  }

  .answerArea {
    background-color: white;
    transition: height 0.25s ease;

    &.open {
      height: 200px;

      & p {
        display: block;
        margin: 10px 20px;
      }
    }

    &.closed {
      height: 0;

      & p {
        display: none;
      }
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

const Accordion = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledAccordion className={`answerArea ${isOpen ? "open" : "closed"}`}>
      <div
        className={`topBar ${isOpen ? "open" : "closed"}`}
        onClick={handleClick}
      >
        <p className="question">{question.q}</p>
        <img src={upArrow} className="arrow"></img>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: question.a }}
        className={`answerArea ${isOpen ? "open" : "closed"}`}
      ></div>
    </StyledAccordion>
  );
};

const FAQ = () => {
  return (
    <>
      <IdHrefAnchor id="faq" />

      <Section>
        <Content>
          <Header>Frequently Asked Questions</Header>
          <p>
            If you have any further questions feel free to reach us at{" "}
            <a href="mailto:chair@cucai.ca">chair@cucai.ca</a>
          </p>
          <Questions>
            <QuestionList>
              {questions
                .slice(0, Math.floor(questions.length / 2))
                .map((question) => (
                  <Accordion key={question.q} question={question} />
                ))}
            </QuestionList>
            <QuestionList>
              {questions
                .slice(Math.floor(questions.length / 2))
                .map((question) => (
                  <Accordion key={question.q} question={question} />
                ))}
            </QuestionList>
          </Questions>
        </Content>
      </Section>
    </>
  );
};

export default FAQ;
