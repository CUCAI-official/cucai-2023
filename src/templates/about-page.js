import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";


import Layout from "../components/Layout";
import PersonCard from "../components/PersonCard";

import media from "../styles/media";
import theme from "../styles/theme";

const StyledAboutPage = styled.div`
  margin: 0 auto;
  /* max-width: 80%; */
  padding-top: 10vh;
  background: rgb(255, 255, 255);

  ${media.phone`
    padding-top: 10vh;
    /* max-width: 95%; */
  `}
`;

const StyledTextSection = styled.section`
  background: rgb(255, 255, 255);
  border-radius: 10px;

  padding: 2em;
  padding-bottom: 0;
  margin-bottom: 2em;
`;

const StyledOurTeam = styled.section`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;

  ${media.phone`
    flex-direction: column;
  `}
`;

const Header = styled.section`
  background-image: url("/img/speaker-bg.svg");
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  width: 100vw;
  margin: 30px 0;
  height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.IBMPlexSansMedium};

  & * {
    max-width: 90%;
  }

  & > h1 {
    font-size: 2.5rem;
  }

  & > h2 {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

const OurTeam = ({ data }) => {
  const ourTeam = [
    {
      first: "Chris",
      last: "Gauthier",
      title: "Co-Chair",
      work: "Computer Engineering ‘23 @ Queens",
      image: data.chris.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/chrisgauthier9/",
        },
      ],
    },
    {
      first: "Cooper",
      last: "Lloyd",
      title: "Co-Chair",
      work: "Computing '23 @ Queens",
      image: data.cooper.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/cooper-lloyd/",
        },
      ],
    },
    {
      first: "Lauren",
      last: "Lidhar",
      title: "Logistics Coordinator",
      work: "Computing '23 @ Queens",
      image: data.lauren.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/lauren-lidhar/",
        },
      ],
    },
    {
      first: "Tung",
      last: "Pham",
      title: "Logistics Coordinator",
      work: "Computing '23 @ Queens",
      image: data.tung.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/tung-pham-1b01571b7/",
        },
      ],
    },
    {
      first: "Jordan",
      last: "Belinsky",
      title: "Web Development Coordinator",
      work: "Computing '24 @ Queens",
      image: data.jordan.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jordanbelinsky/",
        },
      ],
    },
    {
      first: "Adriana",
      last: "Valencia",
      title: "Product Designer",
      work: "Fine Arts '21 @ Ryerson Arts",
      image: data.adriana.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/adriavalencia/",
        },
      ],
    },
    {
      first: "Claire",
      last: "Cunningham",
      title: "Marketing Coordinator",
      work: "Commerce '23 @ Queens",
      image: data.claire.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/claire-cunningham2/",
        },
      ],
    },
    {
      first: "Alwin",
      last: "Raymundo",
      title: "Content Designer",
      work: "Interaction Design '23 @ Sheridan College",
      image: data.alwin.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/alwin-raymundo/",
        },
      ],
    },
    {
      first: "Lejla",
      last: "Sain",
      title: "Content Designer",
      work: "Business Administration '24 @ Sheridan College",
      image: data.leijla.childImageSharp.fluid,
      socials: [
      ],
    },
    {
      first: "Robbie",
      last: "Huang",
      title: "Web Developper",
      work: "Interaction Design '23 @ Sheridan College",
      image: data.robbie.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/robbie-huang-/",
        },
      ],
    },
    {
      first: "Marcelo",
      last: "Chaman Mallqui",
      title: "Sponsorship Coordinator",
      work: "Commerce & Computing '27 @ Queen's University",
      image: data.marcelo.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/alwin-raymundo/",
        },
      ],
    },
    {
      first: "Jonah",
      last: "Deutsch",
      title: "Sponsorship Coordinator",
      work: "Commerce '25 @ Queen's University",
      image: data.jonah.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jonahdeutsch/",
        },
      ],
    },
    {
      first: "Adi",
      last: "Groumoutis",
      title: "Delegates Coordinator",
      work: "Commerce '25 @ Queen's University",
      image: data.adi.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/alwin-raymundo/",
        },
      ],
    },
    {
      first: "Jarett",
      last: "Dewbury",
      title: "Speakers Coordinator",
      work: "Biomedical Engineering '26 @ Waterloo University",
      image: data.jarett.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jarett-dewbury/",
        },
      ],
    },
  ];

  return (
    <StyledOurTeam>
      <Header>
        <h1>Our Team</h1>
        <h2>Meet our hard-working team!</h2>
      </Header>
      {ourTeam.map((member) => (
        <PersonCard person={member} />
      ))}
    </StyledOurTeam>
  );
};

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Helmet title="About" />
      <StyledAboutPage>
        <StyledTextSection>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </StyledTextSection>
        <OurTeam data={data} />
      </StyledAboutPage>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        slogan
      }
    }
    adi: file(relativePath: { eq: "team/adi-groumoutis.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    adriana: file(relativePath: { eq: "team/adriana-valencia.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alwin: file(relativePath: { eq: "team/alwain-raymundo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chris: file(relativePath: { eq: "team/chris-gauthier.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    claire: file(relativePath: { eq: "team/claire-cunningham.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cooper: file(relativePath: { eq: "team/cooper-lloyd.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jarett: file(relativePath: { eq: "team/jarett-dewbury.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jonah: file(relativePath: { eq: "team/jonah-deutsch.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jordan: file(relativePath: { eq: "team/jordan-belensky.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lauren: file(relativePath: { eq: "team/lauren-lidhar.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leijla: file(relativePath: { eq: "team/lejla-sain.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marcelo: file(relativePath: { eq: "team/marcelo-chaman-mallqui.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robbie: file(relativePath: { eq: "team/robbie-huang.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tung: file(relativePath: { eq: "team/tung-pham.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
