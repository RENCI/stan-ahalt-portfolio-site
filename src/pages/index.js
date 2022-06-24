import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Columns, Column } from '../components/Columns'
import { EmailLink, PhoneLink } from '../components/Links'
import { IconWrapper, EmailIcon, PhoneIcon } from '../components/Icons'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProfileImage = {
    borderRadius: "1rem",
    margin: "0 auto",
    marginBottom: "2rem",
    filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.2))",
    zIndex: "0",
    transition: "max-width 250ms",
    maxWidth: "60%",
    // @media (min-width: 600px) {
    //     maxWidth: "60%"
    // }

}


const ContactBlock = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    white-space: nowrap;
    & svg {
        transition: opacity 250ms;
        opacity: 0.33;
    }
    &:hover svg {
        opacity: 0.66;
    }
    &.text {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: '1rem',
    }
`

const IndexView = props => {
    const image = getImage(props.data.imageSharp)
    return (
        <article>
            <GatsbyImage
                image={ image }
                alt="Stan Ahalt sitting at his desk in his office in front of large windows"
                style={ProfileImage}
            />
            <Columns width="80%" center break={ 480 }>
                <Column center as={ ContactBlock }>
                    <IconWrapper pad="0.5rem">
                        <EmailIcon pad="1rem"/>
                    </IconWrapper>
                    <div className="text">
                        <EmailLink address="ahalt@renci.org" />
                        <EmailLink address="ahalt@cs.unc.edu" />
                    </div>
                </Column>
                <Column center as={ ContactBlock }>
                    <IconWrapper pad="0.5rem">
                        <PhoneIcon pad="1rem" />
                    </IconWrapper>
                    <div className="text">
                        <PhoneLink number="(919) 445-9642" tag="(0)" />
                        <PhoneLink number="(919) 360-6131" tag="(C)" />
                    </div>
                </Column>
            </Columns>

            <Columns center break={ 680 }>
                <Column center as={ ContactBlock }>
                    <strong>Renaissance Computing Institute</strong>
                    100 Europa Drive, Suite 540 <br/>
                    Campus Box #7583 <br/>
                    Chapel Hill, NC 27517 <br/>
                </Column>
                <Column center as={ ContactBlock }>
                    <strong>Department of Computer Science</strong>
                    University of North Carolina at Chapel Hill <br/>
                    Campus Box #3175 <br/>
                    239 Sitterson Hall <br/>
                    Chapel Hill, NC 27599 <br/>
                </Column>
            </Columns>

        </article>
    );
}

export default IndexView

export const imageQuery = graphql`{
  imageSharp: file(relativePath: {eq: "stan.jpg"}) {
    id
    childImageSharp {
      gatsbyImageData(width: 900, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
}
`
