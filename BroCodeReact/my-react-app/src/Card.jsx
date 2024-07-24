import pictureProfile from './assets/blackFoxProfile.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={pictureProfile} alt="profile picture"></img>
            <h2 className='card-title'>NA_BLackFox</h2>
            <p className='card-text'>I am SE student</p>
        </div>
    );
}

export default Card;