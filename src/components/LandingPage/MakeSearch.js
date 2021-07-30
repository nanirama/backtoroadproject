import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { FiSearch } from 'react-icons/fi';
import { BsArrowRightShort } from 'react-icons/bs';
import arrowMore from '../../assets/images/landing/arrow-more.png'
import arrowLess from '../../assets/images/landing/arrow-less.png'

const MakeSearch =()=>{
    const { MakesList } = useStaticQuery(
        graphql`
          query {
            MakesList : allMakeslistJson {
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
    const [items, setItems] = useState(MakesList.edges);
    const [filteritems, setFilteritems] = useState(items); 
    const numberPer = 20
    const [mname, setMname] = React.useState("");
    let iconStyles = { color: "white", fontSize: "1.3em", marginBottom: "3px" };
    const onchangeEventHandler=(event)=>{        
        event.preventDefault();
        if(mname==='')
        {
            setFilteritems(items)  
            setList(items.slice(0, numberPer))   
        }
        else
        {            
            let newitems = items.filter(({node}) => node.title.toLowerCase().includes(mname.toLowerCase()));
            console.log('New Search Items ', newitems)
            setFilteritems(newitems)
            setList(newitems.slice(0, numberPer))    
        }
    }
    const inputOnchange = (e)=>{
        setMname(e.target.value)
        if(e.target.value===''){            
            setFilteritems(items) 
            setList(items.slice(0, numberPer))    
        }
    }
    // Load More Functionality Starting
    const [list, setList] = useState([...filteritems.slice(0, numberPer)])
    const [loadMore, setLoadMore] = useState(false)
    const [hasMore, setHasMore] = useState(filteritems.length > numberPer)
    const [loadLess, setLoadLess] = useState(false)
    const [hasLess, setHasLess] = useState(filteritems.length < numberPer)
    const handleLoadMore = () => {
        setLoadMore(true)
    }
    const handleLoadLess = () => {
        setLoadLess(true)
    }
    useEffect(() => {
       if (loadMore && hasMore) {
          console.log('Load More mvalue',loadMore)
          const currentLength = list.length
          console.log('current Length ', currentLength)
          console.log('List Length ',filteritems.length)
          const isMore = currentLength < filteritems.length
          console.log('Is More', isMore)
          const nextResults = isMore
            ? filteritems.slice(currentLength, currentLength + numberPer)
            : []
        
          setList([...list, ...nextResults])
          setLoadMore(false)
        }
      }, [loadMore, hasMore])


    useEffect(() => {
        const isMore = list.length < filteritems.length
        setHasMore(isMore)
    }, [list])

    useEffect(() => {
        if (loadLess) {
           const currentLength = Math.floor(filteritems.length/numberPer)*numberPer
           setList(filteritems.slice(0, currentLength)) 
           setLoadLess(false)
         }
       }, [loadLess, hasLess])
 
 
     useEffect(() => {
         const isLess = list.length > filteritems.length
         setHasLess(isLess)
     }, [list])
    // Load More functionality Ending
    return(
        <div className="search_blk w-100 float-left">
            <div className="container">
                <div className="src_box w-100 float-left">
                <div className="row">
                    <div className="col-md-7 col-xs-12">
                    <h2>Search by Car Make</h2>
                    </div>
                    <div className="col-md-5 col-xs-12">
                    <form
                        className="search-form w-100 float-left"
                        onSubmit={onchangeEventHandler}
                    >
                    <input
                        type="text"
                        value={mname}
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
                                <li
                                key={index}
                                className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <a target="_blank" href={ `https://backtoroadautoparts.com/${node.slug}` }>
                                    {node.title} <BsArrowRightShort className="slist-icon"/>
                                </a>
                                </li>
                            )
                        })}   
                    </ul>
                </div>
                
                    <div className="btn_outer w-100 float-left text-center">
                        {hasMore ? (
                            <Button img={arrowMore} onClick={handleLoadMore} className="btn1">View More</Button>
                            
                        ) : (
                            <Button img={arrowLess} onClick={handleLoadLess} className="btn1">View Less</Button>
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