import './contenticon.css'
import ProfileInfo from './profileInfo'

function Contenticon(props) {
    const profileInfo = props.profileInfo
    return (
        <>
            <div className='content-icon'>
                <ProfileInfo profileInfo={profileInfo} />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M16.6 7.95834L11.1667 13.3917C10.525 14.0333 9.47503 14.0333 8.83336 13.3917L3.40002 7.95834" stroke="#5B5D67" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </>
    )
}
export default Contenticon 