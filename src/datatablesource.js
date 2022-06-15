export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "user", headerName: "User", width: 230, renderCell: (params) => {
		return (
			<div className="cellWithImg">
				<img className="cellImg" src={params.row.img} alt="avatar" />
				{params.row.username}
			</div>
		)
	}},
	{ field: "email", headerName: "Email", width: 230},
	{ field: "age", headerName:"Age", width: 100},
	{ field: "sstatus", headerName:"Status", width: 160, renderCell: (params) => {
		return (
			<div className={`cellWithStatus ${params.row.sstatus}`}>
				{params.row.sstatus}
			</div>
		)
	}},
]

export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://media.gq.com/photos/5c9d404a8d459e781a1333b5/3:4/w_971,h_1295,c_limit/How-to-Get-Jon-Snow's-Hair-game-of-thrones-gq-grooming.jpg",
		sstatus: "active",
		email: "1snow@gmail.com",
		age: 35,

	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
		sstatus: "passive",
		email: "2snow@gmail.com",
		age: 42,

	},
	{
		id: 3,
		username: "Lannister",
		img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Tywin_Lannister_Profile_Charles_Dance.jpg",
		sstatus: "pending",
		email: "3snow@gmail.com",
		age: 45,

	},
	{
		id: 4,
		username: "Stark",
		img: "https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg",
		sstatus: "active",
		email: "4snow@gmail.com",
		age: 16,

	},
	{
		id: 5,
		username: "Targaryen",
		img: "https://awoiaf.westeros.org/images/2/22/Rhaegar_twoiaf.jpg",
		sstatus: "passive",
		email: "5snow@gmail.com",
		age: 22,

	},
	{
		id: 6,
		username: "Melisandre",
		img: "https://i.pinimg.com/originals/79/7b/71/797b71651427b932e8c4da47c7f5c9be.jpg",
		sstatus: "active",
		email: "6snow@gmail.com",
		age: 15,

	},
	{
		id: 7,
		username: "Sansa",
		img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/SophieTurnerasSansaStark.jpg/220px-SophieTurnerasSansaStark.jpg",
		sstatus: "passive",
		email: "7snow@gmail.com",
		age: 23,

	},
	{
		id: 8,
		username: "Clifford",
		img: "https://http2.mlstatic.com/D_NQ_NP_929610-MLA29815709493_042019-O.jpg",
		sstatus: "active",
		email: "8snow@gmail.com",
		age:44, 

	},
	{
		id: 9,
		username: "Roxie",
		img: "https://i.pinimg.com/564x/58/95/ee/5895ee9efe16620ae87e2d00671e03e7--hjort-popular-series.jpg",
		sstatus: "pending",
		email: "9snow@gmail.com",
		age: 31,

	},
	{
		id: 10,
		username: "Eleanor",
		img: "https://www.hellomagazine.com/imagenes/celebrities/2017100643011/everything-you-need-know-rose-leslie-game-of-thrones-star/0-219-974/rose-leslie-3z-z.jpg",
		sstatus: "active",
		email: "10snow@gmail.com",
		age: 25,

	},
]
