import React from 'react'
import "./Footer.css";
import {
    PlayCircleOutline,
    SkipPrevious,
    SkipNext,
    PlaylistPlay,
    Shuffle,
    Repeat,
    VoulmeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core"
import { VolumeDown } from '@mui/icons-material';

function Footer() {
    return (
        <div className='footer'>
            <div className='"footer_left'>
                <img
                    src='https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg'
                    alt=''
                    className='"footer_albumLogo' />

                <div className='footer_songinfo'>
                    <h4>My fav Song</h4>
                    <p>Atharva</p>
                </div>
            </div>
            <div className='footer_center'>
                <Shuffle className='footer_green' />
                <SkipPrevious className='footer_icon' />
                <PlayCircleOutline fontSize='large' className='footer_icon' />
                <SkipNext className='footer_icon' />
                <Repeat className='footer_green' />
            </div>
            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>


    )
}

export default Footer
