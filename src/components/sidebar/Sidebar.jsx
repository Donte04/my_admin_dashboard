import "./sidebar.scss"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {SideElements} from "../../sidebarsource"
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react"

const Sidebar = () => {
		const { dispatch } = useContext(DarkModeContext)
		return (	
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{textDecoration:'none'}}>
				<span className="logo">Admin</span>
				</Link>
			</div>
			<hr/>
			<div className="center">
				<ul>
					{SideElements.map((item, i, array) => { 
						const previousItem = array[i-1]
						return (
							<div key = {i}>
							{((i > 0 && (item.type != previousItem.type)) || (i == 0)) && <div className="title">{item.type}</div>}
							<Link to={(item.link)?item.link:""} style={{textDecoration:'none'}}>
								<li>
									{item.content}
									<span>{item.name}</span>
								</li>
							</Link>
							</div>
						)
					})}
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
				<div className="colorOption" onClick={() => dispatch({type:"DARK"})} ></div>
			</div>
		</div>
	)
}

export default Sidebar
