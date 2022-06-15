import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertOutlinedIcon fontSize="small"/>
			</div>
			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">$500</p>
				<p className="desc">
				All transactions are done. Check it after.	
				</p>
				<div className="summary">
					<div className="item">
						<div className="itemTitle">Target</div>
						<div className="itemResult positive">
							<KeyboardArrowUpIcon fontSize="small"/>
							<div className="resultAmount">$0.8k</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Last Week</div>
						<div className="itemResult negative">
							<KeyboardArrowDownIcon fontSize="small"/>
							<div className="resultAmount">$0.2k</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Last Mounth</div>
						<div className="itemResult positive">
							<KeyboardArrowUpIcon fontSize="small"/>
							<div className="resultAmount">$15.3k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Featured
