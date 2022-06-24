import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Title } from '../components/Typography'
import { List, ListItem } from '../components/List'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BioImage = {
    width: '200px',
    height: '200px',
    minWidth: '250px',
    minHeight: '250px',
    borderRadius: '50%',
    filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.2))',
    shapeOutside: 'circle()',
    display: 'block',
    transition: 'min-width 250ms, min-height 250ms',
    float: 'right',
    margin: '0 0 1rem 1rem',
}

styled.picture`
    @media (min-width: 480px) {
        float: right;
        margin: 0 0 1rem 1rem;
    }
    @media (min-width: 600px) {
        min-width: 250px;
        min-height: 250px;
    }
`

const ContactView = props => {
    const image = getImage(props.data.imageSharp)

    return (
    <article>
        <section>
            <Title>Biography</Title>
            <GatsbyImage
                image={ image }
                alt="Stan Ahalt sitting at his desk in his office in front of large windows"
                style={BioImage}
            />

            <p>
                Dr. Stan Ahalt is the Director of the <a href="https://renci.org" target="_blank" rel="noopener noreferrer">Renaissance Computing Institute</a> (RENCI) at UNC-Chapel Hill. As director, he leads a team of research scientists, software and network engineers, data science specialists, and visualization experts who work closely with faculty research teams at UNC, Duke, and NC State as well as with partners across the country. RENCI’s role is to provide enabling cyberinfrastructure to these research collaborations, which entails working on the challenges of data management, sharing, integration, and security.
            </p>
            
            <p>
                Ahalt is also a professor in the UNC Computer Science Department and the Associate Director of Informatics and Data Science (IDSci) in the North Carolina Translational and Clinical Sciences Institute (NC TraCS) at UNC-Chapel Hill. Ahalt has a passion for applying data science through a team science approach to address the most pressing challenges affecting society, including COVID-19, weather and climate, the opioid and pain management crises, big data management, biomedical treatment discovery, and bias in the court system.
            </p>
            
            <p>
                In his early years as director of RENCI, Ahalt was instrumental in launching two major data science initiatives: The National Consortium for Data Science (NCDS), a public-private partnership to address big data challenges and opportunities in research and business, and iRODS, an effort to develop a branch of the popular integrated Rule-Oriented Data System as enterprise-quality software, complete with rigorous testing and a robust, feature-rich code base.
            </p>

            <p>
                Through $34.5 million in funding in the last five years, Ahalt has positioned RENCI and UNC-Chapel Hill as a national leader in the coordination of large, collaborative, and complex federal data science grants. Ahalt serves as PI for the NHLBI BioData Catalyst Coordinating Center, which manages and unifies the diverse teams working on the BioData Catalyst project, an effort to increase access to biomedical data and novel analytical tools. As co-PI for the NCATS Biomedical Data Translator project, Ahalt leads a team leveraging RENCI’s, TraCS’, and UNC’s resources and expertise to build architecture and test the feasibility of an interactive ecosystem of analytical tools and clinical data aiming to accelerate clinical discovery and improve patient outcomes. Ahalt is also PI of an NIH HEAL Initiative project that serves as a core resource to ensure that HEAL data is findable, accessible, interoperable, and reusable (FAIR). In addition, Ahalt serves as PI for an NSF Law & Social Science (LSS) Conference Award to bring together experts in law and data science to facilitate cross-education and actionable steps toward improving the judicial system. 
            </p>

            <p>
                Ahalt is passionate about mentorship and is invested in his students; he has graduated three doctoral students at UNC-Chapel Hill and currently advises two doctoral and two master’s students. He has also served on the PhD dissertation committee for four students. As a professor in the UNC Computer Science Department, Ahalt has pioneered the inclusion of data science in the course COMP 116: Introduction to Scientific Programming, which he has taught for seven semesters. In collaboration with Ashok Krishnamurthy, Ahalt has introduced hundreds of undergraduate students to the field of data science, many of whom have pursued internships and careers in the field. 
            </p>

            <p>
                More broadly, Ahalt has worked to advance data science educational efforts across UNC for many years, serving as a member of the early Data Science Initiative planning meetings and working on each planning iteration between those original meetings and the current UNC School of Data Science and Society (SDSS) Working Group. 
            </p>

            <p>
                Before coming to RENCI in 2009, Ahalt was executive director of the Ohio Supercomputer Center (OSC) from 2003-2009 and a professor in the Department of Electrical and Computer Engineering at The Ohio State University for 22 years. Ahalt launched several model programs at OSC, including Blue Collar Computing, a national program to bring high performance computing to a wide spectrum of industries and applications, and OSCnet, a leading high-speed research network for K-12 schools, higher education, and economic development.
            </p>
        </section>

        <Title>Education</Title>
        
        <section>
            <List>
                <ListItem>
                    Ph.D. in Electrical and Computer Engineering
                    Clemson University (1986)
                </ListItem>
                <ListItem>
                    M.S. in Electrical Engineering
                    Virginia Tech (1980)
                </ListItem>
                <ListItem>
                    B.S. in Electrical Engineering
                    Virginia Tech (1978)
                </ListItem>
            </List>
        </section>
    </article>
)
}
export default ContactView

export const imageQuery = graphql`{
  imageSharp: file(relativePath: {eq: "stan-close.jpg"}) {
    id
    childImageSharp {
      gatsbyImageData(width: 900, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
}
`
