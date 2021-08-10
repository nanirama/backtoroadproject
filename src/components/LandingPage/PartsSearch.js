import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import arrowMore from '../../assets/images/landing/arrow-more.png'
import arrowLess from '../../assets/images/landing/arrow-less.png'


const PartsSearch =()=>{
    const collapseBtn = useRef(null);
    const collapseSec = useRef(null);
    const [value, setValue] = useState(false);
    const changeCollapseHandler=()=>{
        setValue(!value)
        if(!value)
        {
            collapseSec.current.classList.remove('collapsed')
            collapseBtn.current.style.backgroundImage = `url(${arrowLess})`;
            collapseSec.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
              });
        }
        else
        {
            collapseSec.current.classList.add('collapsed') 
            collapseBtn.current.style.backgroundImage = `url(${arrowMore})`;
            collapseSec.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
              });
        }        
    }
    const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
          setWidth(window.innerWidth);
        });
        return () => {
          window.removeEventListener("resize", () => {});
        };
      }, []);
      const { PartsList } = useStaticQuery(
        graphql`
          query {
            PartsList : allPartslistJson(sort: {fields: title, order: ASC})  {
                totalCount
                edges {
                  node {
                    title
                    slug
                  }
                }
              }      
          }
        `
      )
    const numberPer = width < 768 ? 10 : 30;
    const [items, setItems] = useState(PartsList.edges);
    const [filteritems, setFilteritems] = useState(items); 
    const [list, setList] = useState(filteritems.slice(0, numberPer));
    const onsubmitEventHandler=(event)=>{        
        event.preventDefault();
    }
    const inputOnchange = (e)=>{
        if(e.target.value==='')
        {
            setFilteritems(items)  
            setList(items.slice(0, numberPer))   
        }
        else
        {            
            let newitems = items.filter(({node}) => node.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setFilteritems(newitems)
            setList(newitems.slice(0, numberPer))    
        }
    }
    return(
        <div class="search_blk w-100 bg-white">
            <div className="container">
                <div className="src_box w-100 float-left">
                <div className="row">
                    <div className="col-md-7 col-xs-12">
                    <h2>Search by Part Type</h2>
                    </div>
                    <div className="col-md-5 col-xs-12">
                    <form
                        className="search-form w-100 float-left"
                        onSubmit={onsubmitEventHandler}                        
                    >
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={e => inputOnchange(e)}                        
                    />
                        <button className="border-0 src_btn"><svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg></button>
                    </form>
                    </div>
                </div>
                </div>
                <div class="src-list list2 w-100 float-left">
                <div className="row">
                <ul className="w-100 float-left d-flex flex-wrap flex-row justify-content-start align-items-stretch">
                        {list && list.map(({node}, index) => {
                            return(
                                <li key={index} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 align-self-stretch">
                                    <a target="_blank" rel="noreferrer noopener" href={ `https://backtoroadautoparts.com/${node.slug}` }
                                    className="d-flex flex-wrap flex-row justify-content-between align-items-start"
                                    >
                                        <span>{node.title}</span> <svg class="icon icon-arrow_forward" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
                                    </a>
                                </li>
                            )
                        })}   
                    </ul>
                    {filteritems.length > numberPer && (
                        <> 
                        <div class="more-section-make collapsed" ref={collapseSec}>
                        <ul className="w-100 float-left d-flex flex-wrap flex-row justify-content-start align-items-stretch">
                                    {filteritems.slice(numberPer, items.length).map(({node}, index) => {
                                        return(
                                            <li key={index} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 align-self-stretch">
                                                <a target="_blank" rel="noreferrer noopener" href={ `https://backtoroadautoparts.com/${node.slug}` }
                                                className="d-flex flex-wrap flex-row justify-content-between align-items-start"
                                                >
                                                    <span>{node.title}</span> <svg class="icon icon-arrow_forward" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
                                                </a>
                                            </li>
                                        )
                                    })}   
                            </ul>
                        </div>
                        <div className="btn_outer w-100 float-left text-center">
                            <Button img={arrowMore} className="btn1" ref={collapseBtn}  onClick={changeCollapseHandler}>{value ? 'View Less' : 'View More'}</Button>
                        </div>
                        </>   
                    )}
                    
                </div>
  
                </div>
            </div>
        </div>
    )
}
const Button = styled.button`
    background-image: url(${props => props.img});
`;
export default PartsSearch