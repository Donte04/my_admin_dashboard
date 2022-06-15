import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Atable from "../../components/atable/Atable"

const Single = () => {
	return (
		<div className="single">
			<Sidebar />	
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left"> 
						<div className="editButton">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img 
								src="https://media.gq.com/photos/5c9d404a8d459e781a1333b5/3:4/w_971,h_1295,c_limit/How-to-Get-Jon-Snow's-Hair-game-of-thrones-gq-grooming.jpg" 
								alt="" 
								className="itemImg"
							/>
							<div className="details">
								<h1 className="itemTitle">John Snow</h1>
								<div className="detailItem">
									<span className="itemKey">Email: </span>
									<span className="itemValue">johnsnow@email.com</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone: </span>
									<span className="itemValue">+2211001</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address: </span>
									<span className="itemValue">Winterfell</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Country: </span>
									<span className="itemValue">Westeros</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={3/1} title="User spending ( Last 6 months )"/>
					</div>
				</div>
				<div className="bottom">
					<h1 className="title"> Last Transactions </h1>
					<Atable />
				</div>
			</div>
		</div>
	)
}

export default Single
