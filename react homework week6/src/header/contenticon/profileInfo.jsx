import './contenticon.css'
function ProfileInfo(props){
    const profileInfo = props.profileInfo
return(
    <>
    <img src={profileInfo.profileimg} alt="" />
            <div className="profile-info">
                <h5 className="nickname">
                    {profileInfo.nickname}
                </h5>
                <p className='username'>
                    {profileInfo.username}
                </p>
            </div>
    </>
)
}
export default ProfileInfo