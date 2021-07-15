import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (

        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'Sept 2018 - May 2022'}
                        title={'B.S in Computer Science'}
                        subTitle={'Virginia Tech'}
                        text={'Current student at Virginia Tech pursuing bachelor\'s degree in Computer Science with a cumulative GPA of 3.68/4.00. Part of Alpha Tau Omega America\'s Leadership Development Fraternity\'s Computer Science mentorship program and a member of Web Development Club at Virginia Tech.'} />

                    <ResumeItem
                        year={'Sept 2014 - Jun 2018'}
                        title={'STEM'}
                        subTitle={'Lake Braddock Secondary School'}
                        text={'Graduated with 4.49/4.00 GPA. President and Co-Founder of Computer Science Honor Society - formed a new chapter of Code Virginia\'s CSHS of Secondary Schools. Participated in Varsity Basketball, Student Ambassador, National Honor Society, Math Honor Society, Junior ROTC, and Parent Teacher Student Association.'} />
                </div>


                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'June 2021 - Aug 2021'}
                        title={'Software Engineering Intern'}
                        subTitle={'Verizon - Basking Ridge, NJ'}
                        text={'Returning Software Engineering Inten at Verizon (In-Progress).'} />
                    <ResumeItem
                        year={'Jun 2020 - Aug 2020'}
                        title={'Software Engineering Intern'}
                        subTitle={'Verizon - Ashburn, VA'}
                        text={'Created a full-stack application that can dynamically communicate the availability of Verizon\'s conference room services to promote employee safety and increase social distancing during the COVID-19 pandemic using Spring Boot framework, JPA, REST Services, MySQL, JPA, and Agile Software Development. The application can flexibly retreive a configurable message using a database query and output the message as a static page on multiple channels.'} />
                    <ResumeItem
                        year={'May 2019 - Aug 2019'}
                        title={'Field Specialist'}
                        subTitle={'Hoppy Design & Build'}
                        text={'Assisted in building decks, kitchens, additions, and provided other home improvement services for homeowners. Learned various skills such as cost analysis, materials handling, inventory control, communications, professionalism, and machinery.'} />
                </div>
            </InnerLayout>
        </ResumeStyled >
    );
}

const ResumeStyled = styled.section`
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;