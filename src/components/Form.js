import React,{useState,useEffect} from 'react'

const Form = () => {
    useEffect(()=>{
        console.log('useEffect hook ran on mount');
    },[]);
    
    const [songs,setSongs] = useState([]);
    useEffect(()=>{
        console.log('Songs been updated');
    },[songs]);

    
    const handleDelete = (songName) =>{
        setSongs(songs.filter(sg => sg.songName !== songName));
    }
    
    const songList = (songs.length === 0) ? (<li>No Songs yet</li>) : (
        songs.map(sg =>{
            return(
                <li key={Math.random()}>
                    {sg.songName}
                    <button onClick={e => handleDelete(sg.songName)}>Delete</button>
                </li>
            )
        })
    );
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        const songName = e.target.song.value;
        songName.length !== 0 ? setSongs([...songs,{songName}]) : console.log('Song empty');
        e.target.song.value = "";
    }

    return (
        <div>
            <ul className="formContents">
                {songList}
            </ul>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="song">Add Song: </label>
                <input type="text" id="song" name="song" />
                <input type="submit" value="Add Song" />
            </form>
        </div>
    )
}

export default Form;

