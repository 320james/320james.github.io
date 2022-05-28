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
                        text={'Graduated Magna Cum Laude in Computer Science from Virginia Tech with a cumulative GPA of 3.68/4.00. Part of Alpha Tau Omega America\'s Leadership Development Fraternity\'s Computer Science mentorship program and a member of Web Development Club.'} />

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
                        year={'August 2022 - Current'}
                        title={'Software Engineer'}
                        subTitle={'WillowTree Inc. | Charlottesville, VA'}
                        text={'Loading...'} />
                    <ResumeItem
                        year={'June 2021 - Aug 2021'}
                        title={'Software Engineering Intern'}
                        subTitle={'Verizon (Remote) | Basking Ridge, NJ'}
                        text={'Programmed front-end UI/UX features on the recommended accessory item cards alongside the Digital Sales team for smartphone device purchase flow on Verizon’s digital platform to help accelerate the digital growth of generating an increase in revenue of accessories from $150M to $395M in 2021. Utilized React.js, media queries, Node.js, Agile, Git, and Jira to enhance the display of product description and dynamic color sku options for accessory product item cards to enhance the digital customer journey.'} />
                    <ResumeItem
                        year={'Jun 2020 - Aug 2020'}
                        title={'Software Engineering Intern'}
                        subTitle={'Verizon (Remote) | Ashburn, VA'}
                        text={'Designed and implemented a full-stack application from scratch that dynamically communicates the availability of Verizon’s conference room services by displaying a static page on multiple channels to promote employee safety during COVID-19. Took ownership of a sophisticated web application leveraging Spring Boot, JPA, MySQL, REST Services, Git, and Agile.'} />
                    <ResumeItem
                        year={'May 2019 - Aug 2019'}
                        title={'Field Specialist'}
                        subTitle={'Hoppy Design & Build | Fairfax, VA'}
                        text={'Built modern decks, kitchens, additions, and provided other home upgrades for homeowners while mastering cost analysis, materials handling, professionalism, and different tool handling.'} />
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