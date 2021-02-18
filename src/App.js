import axios from 'axios';
import { useEffect, useState } from 'react';
import GlobalStyle from './components/styles/globalStyle';
import Landing from './components/landing-page';
import Jobs from './components/jobs';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';

export default function App() {
  //updates when sorted or filtered 
  const [jobs, setJobs] = useState('');
  //stores all jobs fetched
  const [ allJobs, setAllJobs] = useState('')

  const getJobs = async() => {

    await axios.get('/jobs')
    .then( res => {
      const data = res.data;
      setJobs(data);
      setAllJobs(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const filterJobs = (searchTerm) => {
      const formattedTerm = searchTerm.toLowerCase().replace(/\s+/g, "");

      //returns all jobs when all location is selected
      const displayAllJobs = searchTerm.includes("All");
        console.log(displayAllJobs)
      if(displayAllJobs) {
        return setJobs(allJobs);
      };
      
      //filters based on search term
     const filteredJobs = allJobs.filter( job => {
         //lower case and removing any white space to make sure formatting does not affect comparison. 
         const type = job.type.toLowerCase().replace(/\s+/g, "");
         const location = job.location.toLowerCase().replace(/\s+/g, "");
         if( type.includes(formattedTerm) ||
             location.includes(formattedTerm)
          ) {
             return true 
         } else {
             return false 
         } 
      }
      );
      return setJobs(filteredJobs) 
  }
  

  //sort jobs 
  const sortJobs = (searchOrder) => {
      const formattedOrder = searchOrder.toLowerCase().replace(/\s+/g, "");
      //sorts filtered jobs
      const sortedJobs = allJobs.slice().sort((a, b) => 
      formattedOrder === 'newest'.toLowerCase().replace(/\s+/g, "") ? 
          a.created_at < b.created_at? 1: -1
      :formattedOrder === 'oldest'.toLowerCase().replace(/\s+/g, "") ? 
          a.created_at > b.create_at? 1: -1
      :a.id < b.id ?
          1 : -1   
      )
      return setJobs(sortedJobs);
  }

  useEffect(() => {
    //Call API 
    getJobs();
  }, [])

  return (
    <Router>
      <GlobalStyle/>
        <Navbar/>
        <Route exact path="/" component={Landing} /> 
        <Route path="/jobs" exact>
          <Jobs allJobs={jobs} filter={filterJobs} sort={sortJobs} />
       </Route>
    </Router>
  );
}
