import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Mydatatable from "../../components/mydatatable/Mydatatable"

const List = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar/>
				<Mydatatable/>
			</div>
		</div>
	)
}

export default List
