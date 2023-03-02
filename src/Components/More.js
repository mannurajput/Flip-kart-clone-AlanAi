import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import "./../StyleSheet/Tipy.css"
const More = () => {
    return (
        <div className='More'>
            <hr />
            <div className='notification'>
                <NotificationsActiveIcon />
                <p>Notification Prefrences</p>
            </div>
            <hr />
            <div className='customare'>
                <LiveHelpIcon />
                <p>24*7 customare Service</p>
            </div>
            <hr />
            <div className='Advertise'>
                <TrendingUpIcon />
                <p>Advertise</p>
            </div>

            <div className='Download'>
                <DownloadIcon />
                <p>Download App</p>
            </div>

        </div>
    )
}

export default More