import React, {useEffect} from 'react';
import { Container, Title } from './styles/jobs';
import Filter from '../filter';
import Job from '../job';
import Loading from '../loading';

export default function Jobs({getJobs, allJobs, filter, sort}) {

    useEffect(() => {
        //Call API 
        getJobs();
      }, [])

    return (    
        <div>
            { allJobs ? 
            <div>
                <Filter filter={filter} sort={sort}/>
                <Container>
                    <Title> 
                        {`Showing ${allJobs.length} Jobs`} 
                    </Title>
                    <Job jobs={allJobs} />
                </Container>
            </div>
            : <Loading/>  }
        </div>
                       
    )
}

