import React from 'react';
import "./Body.css";
import SongRow from "./SongRow";
import Header from "./Header";
import { useDataLayerValue } from './DataLayer';
import { PlayCircleFilled, Favorite, MoreHoriz } from '@mui/icons-material';

function Body({ Spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header Spotify={Spotify} />
      <div className='body_info'>
        <img src={discover_weekly?.images[0]?.url} alt='' />
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilled className='body_shuffle' />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
