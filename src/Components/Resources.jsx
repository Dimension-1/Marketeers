import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoFilter } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import { CiSearch } from "react-icons/ci";
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import { MdCancel } from "react-icons/md";
import './Resources.css';
import resourceIcon from "../assets/Resources.svg";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import blog2 from "../assets/blog-image2.png"
import blog3 from "../assets/blog3.png";
import image from "../assets/DesktopBlue.svg";
// ... other imports


export default function Resources() {
  const navigate = useNavigate();
  const location = useLocation();
  const { filter: initialFilter } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

    const data=[{imgsrc:'https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/653fbff5cabfba49d46f0767_Rectangle%20486.jpg',type:'Blog',Publishedon:'October 23, 2023',name:`Startup Market Sizing: Founder's Guide to TAM`,filter:'Online Reputation Management'},
    {imgsrc: blog2 ,type:'Blog',Publishedon:'September 7, 2023',name:`7 Simple Steps to Ace Your Startup Market Research`,filter:'Pay-Per-Click Advertising (PPC)'},
    {imgsrc:blog3,type:'Blog',Publishedon:'November 18, 2023',name:`Research and Planning for a New Business in 4 Steps`,filter:'Email and SMS Marketing'},
    {imgsrc:'https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/653fbff5cabfba49d46f0767_Rectangle%20486.jpg',type:'Case Study',Publishedon:'October 2, 2023',name:`Startup Market Sizing: Founder's Guide to TAM`,filter:'Analytics and Data Analysis'},
    {imgsrc: blog2,type:'Case Study',Publishedon:'November 30, 2023',name:`7 Simple Steps to Ace Your Startup Market Research`,filter:'Email and SMS Marketing'},
    {imgsrc:blog3,type:'Case Study',Publishedon:'September 20, 2023',name:`Research and Planning for a New Business in 4 Steps`,filter:'Conversion Rate Optimization (CRO)'},
]
    const categories=['Pay-Per-Click Advertising (PPC)', 'Email and SMS Marketing','Influencer Marketing','Conversion Rate Optimization (CRO)','Online Reputation Management',
    'Customer Experience (CX) Strategy','Marketing Consultation and Strategy','Analytics and Data Analysis']
    const [filter, setFilter] = useState('all');
    const [filteredData, setFilteredData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleFilterChange = (newFilter) => {
      // If the new filter is different from the current filter, update the state
      if (newFilter !== filter) {
        setFilter(newFilter);
    
        if (newFilter === 'all') {
          setSearchQuery('');
          setSelectedCategories([]);
        }
    
        // Update the URL with the new filter
        navigate(`/resources/${newFilter}`);
      }
    };
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
    const addCategory = (category) => {
        if(!selectedCategories.includes(category)){
            setSelectedCategories(prev => ([...prev, category]))
        }     
      }

     
      
    
    const removeCategory = (category) => {
        if(selectedCategories.includes(category)){
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
      }
    const handlereset=()=>{
        setFilter('all');
        setSearchQuery('');
        setSelectedCategories([]);
    }
  
    useEffect(() => {
      console.log('location.state:', location.state);
      const isFromCaseStudyButton = initialFilter === 'CaseStudy';
      const filterToUse = isFromCaseStudyButton ? 'Case Study' : initialFilter || 'all';
      console.log('isFromCaseStudyButton:', isFromCaseStudyButton);
      console.log('initialFilter:', initialFilter);
    
      // Set the filter state based on the initialFilter value
      setFilter(filterToUse);
    
      const filteredBySearchAndCategory = data.filter((item) => {
        const searchRegex = new RegExp(searchQuery, 'i');
        const matchesSearch =
          searchRegex.test(item.type) ||
          searchRegex.test(item.name) ||
          searchRegex.test(item.filter);
    
        const matchesCategory =
          selectedCategories.length === 0 || selectedCategories.includes(item.filter);
    
        return matchesSearch && matchesCategory;
      });
    
      let filteredDataToShow = filteredBySearchAndCategory;
    
      if (filterToUse !== 'all') {
        filteredDataToShow = filteredBySearchAndCategory.filter(
          (item) => item.type === filterToUse
        );
      }
    
      setFilteredData(filteredDataToShow);
    }, [location.state, searchQuery, selectedCategories, data, initialFilter]);
    
    
  return (
    <div className='overflow-x-hidden' style={{ background: 'var(--bg-color)'}} >
         <div className="img-overlay-7 position-absolute z-0">
      <img src={image} alt="" className="" />
    </div>
    <Box sx={{ backgroundColor: 'var(--bg-color)',padding:'94px 10px 10px'}}>
   
      <Box sx={{backgroundColor:'rgba(27, 26, 31, 0.8)',borderRadius:'15px',paddingTop: "2rem", position: 'relative'}}>
      <img src={resourceIcon} alt="resourceIcon" className=""  style={{ 
          position: "absolute",
          zIndex: 999,
          left: '11%',
          top: '0px',
      
 }}/>
     
        <Box sx={{display:'flex',flexDirection:'column',marginTop:'110px',marginLeft:'150px'}} className="resources-text">
            <Typography sx={{color:'var(--secondary-bg)',fontWeight:'500',fontSize:'4.5em',lineHeight:'0'}}><span style={{color:'var(--main-text-color)'}}>Transform Your Strategy  </span> with Proven</Typography>
            <Typography sx={{color:'var(--secondary-bg)', fontWeight:'500',fontSize:'4.5em',lineHeight:'2.5'}}>Marketing Success Stories</Typography>
        </Box>
        <Box sx={{marginTop:'15px',marginLeft:'150px',}} className="resources-navbar">
           <Box style={{display:'flex',flexDirection:'row',border:'2px solid rgba(220,239,216,.07)',boxSizing:'border-box',borderRadius:'35px',width:'fit-content',cursor:'pointer',padding:'1px'}}className="resources-navbar-content">
              <button style={{padding:'20px 30px',color: filter==='all' ? '#262d29':'rgba(220,239,216,.7)',backgroundColor: filter === 'all' ? 'var(--main-text-color)' : 'transparent',borderRadius:'35px',outline:'none',border:'none', fontSize:'17px',cursor:'pointer'}} onClick={() => handleFilterChange('all')}>All</button>
              <button style={{padding:' 20px 30px',color: filter==='Blog' ? '#262d29':'rgba(220,239,216,.7)',backgroundColor: filter === 'Blog' ? 'var(--main-text-color)' : 'transparent',borderRadius:'35px',outline:'none',border:'none', fontSize:'17px',cursor:'pointer'}} onClick={() => handleFilterChange('Blog')}>Blog</button>
              <button style={{padding:'20px 30px',color: filter==='Case Study' ? '#262d29':'rgba(220,239,216,.7)',backgroundColor: filter === 'Case Study' ? 'var(--main-text-color)' : 'transparent',borderRadius:'35px',outline:'none',border:'none', fontSize:'17px',cursor:'pointer'}} onClick={() => handleFilterChange('Case Study')}>Case Study</button>
              <button style={{padding:' 20px 30px',color: filter==='Download' ? '#262d29':'rgba(220,239,216,.7)',backgroundColor: filter === 'Download' ? 'var(--main-text-color)' : 'transparent',borderRadius:'35px',outline:'none',border:'none', fontSize:'17px',cursor:'pointer'}} onClick={() => handleFilterChange('Download')}>Download</button>
           </Box>
        </Box>
        <Box sx={{borderRadius:'0px'}}>
        <Accordion sx={{backgroundColor:'rgba(27, 26, 31, 0.8)',marginBottom:'0',borderRadius:'0', justifyContent: "flex-end" }}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{margin:'0', justifyContent: "flex-end"}}
                
                
                >
                <Typography sx={{
                    backgroundColor: '#fff',
                    padding:'12px 30px',
                    borderTopLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                    color:'rgba(67,85,75,.8)',
                    marginRight:'20px',
                }}>
                    {<IoFilter style={{marginRight:'10px'}}/>}Filter
                </Typography>
                </AccordionSummary  >
                    <AccordionDetails style={{backgroundColor:'#fff',margin:'0',borderBottom:'transparent',padding:'30px 150px',}} className='resources-filter'>
                        <Box >
                            <TextField
                                id="input-with-icon-textfield"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <CiSearch style={{fontSize:'20px'}} />
                                    </InputAdornment>
                                ),
                                }}
                                variant="standard"
                                placeholder='Search ...'
                                sx={{
                                    width:'100%'
                                }}
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <Typography sx={{ marginTop: '10px', color: '#43554b', fontSize: '1rem',textAlign:'right' }}>
                                    Showing <span style={{ fontWeight: 'bold' }}>{filteredData.length}</span> items
                            </Typography>
                        </Box>
    
                        <Box sx={{ display: 'flex', flexDirection:'column'}}>
                                    <Typography sx={{color:'#43554b',opacity:'0.4'}}>
                                        Filter by category:
                                    </Typography>
                                    <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'10px',marginTop:'15px'}}>
                                        {categories.map((category) => (
                                            <>
                                            <Chip
                                            className='filters-category'
                                            key={category}
                                            onClick={() => {
                                                if (selectedCategories.includes(category)) {
                                                removeCategory(category);
                                                } else {
                                                addCategory(category);
                                                }
                                            }}
                                            label={category.split('-').join(' ')}
                                            sx={{
                                                minWidth: 'fit-content',
                                                height: 8,
                                                px: 2.2,
                                                py: 3,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textTransform: 'uppercase',
                                                border: '1px solid #dee8e3',
                                                borderRadius: '1000px',
                                                cursor: 'pointer',
                                                transition: 'all .2s',
                                                color:'#43554b',
                                                position:'relative',
                                                opacity:'0.7',
                                                ':hover': {
                                                    borderColor: selectedCategories.includes(category) ? '#43554B' : '#000',
                                                    backgroundColor: selectedCategories.includes(category) ? '#43554B' : 'transparent',
                                                    color: selectedCategories.includes(category) ? '#DCEFD8' : '#43554b',
                                                  },
                                                ...(selectedCategories.includes(category)
                                                ? {
                                                    border: '2px solid #43554B',
                                                    backgroundColor: '#43554B',
                                                    color: '#DCEFD8',
                                                    opacity:1
                                                    }
                                                : {
                                                    borderColor: '#dee8e3',
                                                    backgroundColor: 'transparent',
                                                    color:'#43554b',
                                                    }),
                                            }}
                                            >
                                           
                                            </Chip>
                                            {selectedCategories.includes(category) && (
                                                <MdCancel
                                                style={{
                                                  zIndex: '500',
                                                  color: '#dcefd8',
                                                  backgroundColor: '#43554b',
                                                  borderRadius: '1000px',
                                                  fontSize: '20px',
                                                  cursor: 'pointer',
                                                  marginLeft: '-26px',
                                                  transition: 'transform 0.2s', 
                                                  ':hover': {
                                                    transform: 'scale(6.5)',
                                                  },
                                                }}
                                                onClick={() => removeCategory(category)}
                                              />
                                            )}
                                            </>
                                        ))}
                                    </Box>
                            </Box>
                    </AccordionDetails>
            </Accordion>

            <Box sx={{padding :'85px 150px 85px',display: 'grid',gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',backgroundColor:'#fff',borderRadius:'15px',gap:'15px',gridRowGap:'28px'}} className="cards-container">
            {filteredData.length === 0 ? (
                <Box sx={{backgroundColor:'rgba(228,236,227,.7)',gridColumn: '1 / -1',borderRadius:'15px',padding:'42px 5px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                    <Typography sx={{ color: '#43554b', fontSize: '1.5rem', fontWeight: 500,}}>
                        No results found.
                    </Typography>
                    <Typography sx={{color:'rgba(67,85,75,.6)',marginTop:'10px',textAlign:'center'}}>
                         Try different keywords or <button style={{background:'transparent',outline:'none',border:'none',borderBottom:'1px solid #43554b',color:'#43554b',cursor:'pointer'}} onClick={() => handlereset()}>reset all filters.</button>
                    </Typography>
                </Box>
                
            ) : (filteredData.map((content, index) => (
                    <React.Fragment key={index}>
                      
                        <Box sx={{ backgroundColor: '#fff',  width: '360px', overflow: 'hidden',cursor:'pointer'}} className="blogCard d-flex justify-content-between flex-column ">
<Box>
                        <img src={content.imgsrc} alt="Blog" style={{ borderRadius: '15px', width: '100%', height: 'auto' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '12px' }}>
                            <Typography sx={{ color: '#43554b', opacity: '0.4' }}>{content.type}</Typography>
                            <Typography sx={{ color: '#43554b', opacity: '0.4' }}>{content.Publishedon}</Typography>
                        </Box>
                        <Box sx={{ padding: '12px',display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Typography sx={{ color: '#43554b', fontSize: '1.75rem', fontWeight: 500,lineHeight:'1' }}>
                            {content.name}
                            </Typography>
                        </Box>
                        </Box>
                        <Box><ul style={{ listStyleType: 'none', paddingInlineStart: '0',}}>
                            <li style={{ color: '#43554b',listStyleType: 'none',backgroundColor:'rgba(228,236,227,.45)',borderRadius:'1000px',width:'fit-content',padding:'6px 10px'}}>{content.filter}</li>
                            </ul></Box>
                    </Box>
                    </React.Fragment>
                )))}
            </Box>
        
        </Box>
    </Box>
    </Box>

    </div>
  );
}
