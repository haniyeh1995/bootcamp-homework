import './Story.css'

function Story(props) {
    function showStory(event) {
        const storyId = event.currentTarget.getAttribute('storyId');
        props.onClick(storyId)
    }
    const story= props.story

    return (
        <>
        <div className="story">
            <img src={props.profileURL} storyId={props.storyID} onClick={showStory}className= {props.seen == false ? "seen-story" : ""} />
            <p>{props.username}</p>
        </div>
        </>
    )
}
export default Story