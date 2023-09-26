import './contenticon.css'
function Content(props){
    const content = props.content
return(
    <>
    <img src={content.profileimg} alt="" />
            <div className="profile-info">
                <h5 className="nickname">
                    {content.nickname}
                </h5>
                <p className='username'>
                    {content.username}
                </p>
            </div>
    </>
)
}
export default Content