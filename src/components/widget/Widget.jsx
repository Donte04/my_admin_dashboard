import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {
	//temporary:
	const amount = 100;
	const diff = 20;

	let data;

	switch(type) {
		default:
			break;
		case "user":
			data={
				title:"USER",
				isMoney: false,
				link: "See all users",
				icon: <PersonIcon 
					className="icon"
					style={
						{color:"crimson",
						backgroundColor: "rgba(255, 0, 0, 0.2)",
						}
					}
				/>,
			}
			break;
		case "order":
			data={
				title:"ORDERS",
				isMoney: false,
				link: "See all orders",
				icon: <ShoppingCartOutlinedIcon  
					className="icon" 
					style={
						{color:"goldenrod",
						backgroundColor: "rgba(218, 165, 32, 0.2)",
						}
					}
					/>,

			}
			break;
		case "earning":
			data={
				title:"EARNINGS",
				isMoney: true,
				link: "View net earning",
				icon: <MonetizationOnOutlinedIcon 
					className="icon" 
					style={
						{color:"rgba(0, 130, 166)",
						backgroundColor: "rgba(0, 130, 166, 0.2)",
						}
					}
					/>,

			}
			break;
		case "balance":
			data={
				title:"BALANCE",
				isMoney: true,
				link: "See details",
				icon: <AccountBalanceWalletOutlinedIcon 
					className="icon" 
					style={
						{color:"purple",
						backgroundColor: "rgba(128, 0, 128, 0.2)",
						}
					}
					/>,
			}
			break;
	}
	return (
		<div className="Widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">{data.isMoney && "$"} {amount}</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpIcon />
					{diff} %
				</div>
				{data.icon}
				
			</div>
		</div>
	)
}

export default Widget
