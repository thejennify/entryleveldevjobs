import React from 'react';
import { Container, Wrapper, Title } from './styles/jobs';
import Filter from '../filter';
import Job from '../job';
import Loading from '../loading';

export default function Jobs({allJobs, filter, sort}) {

    return (    
        <Container>
            { allJobs ? 
            <Container>
                <Filter filter={filter} sort={sort}/>
                <Wrapper>
                    <Title> 
                        {`Showing ${allJobs.length} Jobs`} 
                    </Title>
                    <Job jobs={allJobs} />
                </Wrapper>
            </Container>
            : <Loading/>  }
        </Container>
                       
    )
}

