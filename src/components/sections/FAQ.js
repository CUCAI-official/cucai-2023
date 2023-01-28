import React, { useState } from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import media from "../../styles/media";

import upArrow from "../../img/up-arrow.svg";

const questions = [
  {
    q: "Who can attend CUCAI?",
    a: `<p>Any undergraduate student from a Canadian university or college can attend CUCAI, irregardless of year of study or discipline. CUCAI is proud to welcome anybody, technical or non-technical, interested in a future with artificial intelligence.</p>`,
  },
  {
    q: "Do I have to get accepted to attend?",
    a: `<p>Unfortunately, due to the limited venue capacity and high demand for tickets, we will be allocating spots to those most eager to attend.</p>`,
  },
  {
    q: "Do I need to have an AI design or research project?",
    a: `<p>You <b>do not</b> need to have an AI design or research project to attend CUCAI. We welcome anybody looking to gain exclusive insights and perspectives from the industries finest, or those looking for friends interested in the growing field of AI.</p>`,
  },
  {
    q: "What‘s included in the ticket?",
    a: `<p>Both the <b>Conference</b> and <b>Conference + Hotel</b> tickets include access to the conference and all speakers, workshops, lunches on Saturday & Sunday, design-team showcase, and our Gala dinner hosted at the Four Points by Sheraton. Delegates who have selected the hotel option will receive two night of stay On Friday and Saturday.</p>`,
  },
  {
    q: "What is the CUCAI code of conduct?",
    a: `<p>The CUCAI code of conduct is our policy to ensure the well-being of all delegates and that the conference remains a safe and welcoming place for all.</p>`,
  },
  {
    q: "Why should I attend?",
    a: `<p>You’ve heard of OpenAI, ChatGPT, Co:here, and Deepmind in the news quite frequently. It is the age of artificial intelligence and there is no better way to experience it, than with others passionate about the space. CUCAI is the perfect place for that.</p>`,
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
