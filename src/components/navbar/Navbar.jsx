import "./navbar.scss" 
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ListIcon from '@mui/icons-material/List'
import {useState, useEffect, useContext} from 'react'
import { DarkModeContext } from "../../context/darkModeContext"
const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext)
	const [mylist, mylistSet] = useState([[<LanguageIcon className="icon"/>, "EN"], [<DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>], [<FullscreenExitIcon className="icon"/>], [<NotificationsIcon className="icon"/>, "notif"], [<ChatBubbleOutlineIcon className="icon"/>,"notif"], [<ListIcon className="icon"/>]]);
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchIcon />
				</div>
				
				<div className="items">
					<>
					{
						mylist.map(x => 
							<div className="item">
								{x[0]}
								{x[1] == "notif"
									?<div className="counter">1</div>
									:<span>{x[1]}</span>
								}
							</div>
						)
					}
					</>
					<div className="item">
						<img
							src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png"
							alt=""
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
