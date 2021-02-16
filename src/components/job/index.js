import React, {useState} from 'react';
import {Container, Wrapper, Logo, Details, Title, Tags, Tag, Icon, PublishedDate} from './styles/job';
import * as moment from 'moment';
import parse from 'html-react-parser';
import { PrimaryBtn, InvisibleBtn } from '../styles/buttons';
import Modal from '../modal';
import { Header, Description, ContentWrapper, CompanyInfo, JobTitle, Name} from '../modal/styles/modal';

export default function Job({jobs}) {
    const [ modal, setModal ] = useState('');
    const [ selectedJob, setSelectedJob ] = useState('');

    const openModal = (job) => {
        setSelectedJob(job)
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <Container>
            { 
                 jobs.map((job, index) => (
                    <Wrapper key={`${job.id}-${index}`} onClick={() => openModal(job)}>
                    <Details>
                        <Logo src={job.company_logo}/>
                        <PublishedDate>{moment(job.created_at).fromNow()}</PublishedDate>
                    </Details>
                    <Title>{job.title}</Title>
                    <Tags>
                        <Tag>
                            <Icon src="/assets/work.svg" alt="briefcase"/>
                            {job.type}
                        </Tag>
                        <Tag>
                            <Icon src="/assets/location.svg" alt="location"/>
                            {job.location}
                        </Tag>
                        </Tags>
                        <PrimaryBtn primary> Learn more </PrimaryBtn>
                        </Wrapper>
                    ))
                }
                {   modal ?
                        <Modal>
                            <Header>
                            <ContentWrapper>
                                    <Logo src={selectedJob.company_logo}/>
                                <CompanyInfo>
                                    <JobTitle> {selectedJob.title}</JobTitle>
                                    <Name> <a href={selectedJob.company_url}> {selectedJob.company.substr(1, 20)} </a></Name>
                                </CompanyInfo>
                            </ContentWrapper>
                            <InvisibleBtn>
                                <Icon src={"/assets/close.svg"} alt="close" onClick={closeModal}/> 
                            </InvisibleBtn>
                        </Header>
                        <Description> 
                            <Tags>
                                <Tag>
                                    <Icon src="/assets/work.svg" alt="briefcase"/>
                                    {selectedJob.type}
                                </Tag>
                                <Tag>
                                    <Icon src="/assets/location.svg" alt="location"/>
                                    {selectedJob.location}
                                </Tag>
                                <PublishedDate>{moment(selectedJob.created_at).fromNow()}</PublishedDate>
                            </Tags>
                            {parse(selectedJob.description)} 
                        </Description>
                     </Modal>
                : null}
        </Container>
    )
}
