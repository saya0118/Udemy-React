import React from 'react';
import {connect} from 'react-redux';



// props.song
const SongDetail = ({song})=> {

    if(!song) {
        return <div>Select a song</div>
    }
    return (
    <div>
        <h3>Details for:</h3>
        <p>
            Title: {song.title}
            <br />
            Duration: {song.duration}
        </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    //ここで言うstateはReducersのなかのcombineReducersのなかみ
    return {song: state.selectedSong}
}

//connectで必要なものを取ってきて渡す
export default connect(mapStateToProps)(SongDetail)