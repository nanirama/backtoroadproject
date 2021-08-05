import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FiSearch } from 'react-icons/fi';
import { BsArrowRightShort } from 'react-icons/bs';
import arrowMore from '../../assets/images/landing/arrow-more.png'
import arrowLess from '../../assets/images/landing/arrow-less.png'


const MakeSearch =()=>{
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
    const { MakesList } = useStaticQuery(
        graphql`
          query {
            MakesList: allMakeslistJson(sort: {fields: title, order: ASC}) {
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
    let iconStyles = { color: "white", fontSize: "1.3em", marginBottom: "3px" };
    const numberPer = width < 768 ? 20 : 40;
    console.log('Number of records, ', numberPer);
    const [items, setItems] = useState(MakesList.edges);
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
        <div className="search_blk w-100">
            <div className="container">
                <div className="src_box w-100 float-left">
                <div className="row">
                    <div className="col-md-7 col-xs-12">
                    <h2>Search by Car Make</h2>
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
                        <button className="border-0 src_btn"><FiSearch style={iconStyles}/></button>
                    </form>
                    </div>
                </div>
                </div>
                <div className="src-list w-100 float-left bg-white">
                <div className="row">
                    <ul className="w-100 float-left">
                        {list && list.map(({node}, index) => {
                            return(
                                <li key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 align-self-stretch">
                                    <a target="_blank" rel="noreferrer noopener" href={ `https://backtoroadautoparts.com/${node.slug}` }
                                    className="d-flex flex-wrap flex-row justify-content-between align-items-start"
                                    >
                                        <span>{node.title}</span> <BsArrowRightShort className="slist-icon"/>
                                    </a>
                        </li> 
                            )
                        })}   
                    </ul>
                    {filteritems.length > numberPer && (
                        <> 
                        <div class="more-section-make collapsed" ref={collapseSec}>
                            <ul className="w-100 float-left">
                                    {filteritems.slice(numberPer, items.length).map(({node}, index) => {
                                        return(
                                            <li key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 align-self-stretch">
                                                <a target="_blank" rel="noreferrer noopener" href={ `https://backtoroadautoparts.com/${node.slug}` }
                                                className="d-flex flex-wrap flex-row justify-content-between align-items-start"
                                                >
                                                    <span>{node.title}</span> <BsArrowRightShort className="slist-icon"/>
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
export default MakeSearch