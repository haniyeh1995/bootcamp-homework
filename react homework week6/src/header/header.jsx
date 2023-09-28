import './header.css'
import Searchbar from './searchbar/searchbar'
import Contenticon from './contenticon/contenticon'

function Header (props){
    const tabs = props.Tabs
    const profileInfo = props.content
    function selectView(event) {
        props.setSelectedView(event.target.value) 
    }
    return(
        <>
        <div className='header'>
            <div className='tabs-group'>
                {tabs.map((value,index) =>{
                    return(
                        <div className='tab-key' key={index} onClick={selectView} value={index} className= {index== props.selectedView ? "selected-view" : ""}>
                        {value.text}
                        </div>
                    )
                })
                }

            </div>
            <div className='search'>
                <Searchbar/>
            </div>
            <div className='content-info'>
                <Contenticon profileInfo={profileInfo}/>
            </div>
        </div>
        </>
    )
}
export default Header
