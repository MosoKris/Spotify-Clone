import React from 'react'
import "./Sidebar.css";
import { useDataLayerValue } from './DataLayer';
import SidebarOption from './SidebarOption';
import { LibraryMusic } from '@mui/icons-material';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
        <img
         className='sidebar_logo'
         src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg'
         alt='spotify logo'/>

         <SidebarOption title= "Home" Icon={HomeIcon}/>
         <SidebarOption title= "Search" Icon={SearchIcon}/>
         <SidebarOption title= "Your Library" Icon={LibraryMusic}/>
         <br/>
         <strong className='sidebar_title'>PLAYLISTS</strong>
         <hr/>
         {playlists?.item?.map((playlist) => (
            <SidebarOption title={playlist.name}/>
         ))}

    </div>
  )
}

export default Sidebar
