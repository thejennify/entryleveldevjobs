import React, { useState } from 'react';
import { Container, DropdownWrapper, DropdownHeader,DropdownList, DropdownOptions, Icon, Item } from './styles/filter';

export default function Filter({getTerms, getOrder, filter, sort}) {
    const [ location , setLocation ] = useState('Location');
    const [ type, setType ] = useState('Type');
    const [ sortBy, setSort ] = useState('Sort by...');
    

    const closeMenus = (text, item) => {
        //lift the search term up
        if(item === "location") {
            //pass value to location 
            setLocation(text);
        }else if (item === "type") {
            setType(text);
        }else if (item === "sort") {
            setSort(text);
        }
        
    }

    const filterJobs = (e , item) => {
        const text = e.currentTarget.textContent;
        //pass the term to the App component
        closeMenus(text, item);
        filter(text)
    }

    const sortJobs =  (e, item) => {
        const text = e.currentTarget.textContent;
        closeMenus(text, item);
        sort(text);
    
    }
    //options to display when Menus is clicked
    const locationOptions = ["Remote", "Canada", "USA", "All Locations"]
    const typeOptions = ["Full Time", "Contract", "Part Time", "All Types"];
    const sortOptions = ["Newest", "Oldest"];


    return (
        <Container>
            <DropdownWrapper>
                <DropdownHeader > <Icon src="/assets/location.svg"/> {location} 
            </DropdownHeader>
            <DropdownList>
                <DropdownOptions>
                    {locationOptions.map( (location, index) =>
                    <Item key={index} onClick={(e) => filterJobs(e, "location")}> {location} </Item>)}
                </DropdownOptions>
            </DropdownList>
            </DropdownWrapper>
            <DropdownWrapper>
                <DropdownHeader > <Icon src="/assets/work.svg"/> {type} </DropdownHeader>
                <DropdownList>
                    <DropdownOptions>
                        {typeOptions.map((type, index) =>
                        <Item key={index} onClick={(e) => filterJobs(e, "type")}> {type} </Item>)}
                    </DropdownOptions>
                </DropdownList>
            </DropdownWrapper>
            <DropdownWrapper>
                <DropdownHeader > <Icon src="/assets/filter.svg" />  {sortBy} </DropdownHeader>
                <DropdownList>
                    <DropdownOptions>
                        {sortOptions.map((sort, index) =>
                        <Item key={index} onClick={(e) => sortJobs(e, "sort")}>  {sort} </Item>)}
                    </DropdownOptions>
                </DropdownList>
            </DropdownWrapper>
        </Container>
    )
}
