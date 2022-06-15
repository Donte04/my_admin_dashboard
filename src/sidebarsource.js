import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideElements = [
		{
			id: 1,
			name: "Dashboard",
			content: <DashboardIcon className = "icon"/>,
			type: "MAIN",
			link: "/",
		},
		{
			id: 2,
			name: "Users",
			content: <PersonOutlinedIcon className= "icon"/>,
			type: "LISTS",
			link: "/users",
		}, 
		{
			id: 3,
			name: "Products Delivery",
			content: <CatchingPokemonIcon className="icon" />,
			type: "LISTS",
			link: "/products",
		}, 
		{
			id: 4,
			name: "Orders",
			content: <BorderColorRoundedIcon className="icon" />,
			type: "LISTS",
		}, 
		{
			id: 5,
			name: "Delivery",
			content: <DeliveryDiningIcon className="icon" />,
			type: "LISTS",
		}, 
		{
			id: 6,
			name: "Stats",
			content: <StackedLineChartIcon className="icon" />,
			type: "USEFULL",
		}, 
		{
			id: 7,
			name: "Notifications",
			content: <NotificationsActiveIcon className="icon" />,
			type: "USEFULL",
		},
		{
			id: 8,
			name: "System Health",
			content: <HealthAndSafetyIcon className="icon" />,
			type: "SERVICE",
		}, 
		{
			id: 9,
			name: "Logs",
			content: <PsychologyIcon className="icon" />,
			type: "SERVICE",
		}, 
		{
			id: 10,
			name: "Settings",
			content: <SettingsIcon className="icon" />,
			type: "SERVICE",
		},
		{
			id: 11,
			name: "Profile",
			content: <AccountCircleIcon className="icon" />,
			type: "USER",
		}, 
		{
			id: 12,
			name: "Users",
			content: <LogoutIcon className="icon" />,
			type: "USER",
		}, 
]
