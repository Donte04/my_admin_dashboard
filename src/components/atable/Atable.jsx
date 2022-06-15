import "./atable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Atable = () => {
	const rows = [
		{
			id: 1143155,
			product: "Acer Nitro 5",
			img: "https://www.notebookcheck.net/uploads/tx_nbc2/AcerNitro5AN517-54__1_.JPG",
			customer: "John Smith",
			date: "1 March",
			amount: 785,
			method: "Cash on Delivery",
			status: "Approved",
		},
		{
			id: 2235235,
			product: "Playstation 5",
			img: "https://assets.reedpopcdn.com/ps5-pre-order-header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/ps5-pre-order-header.jpg",
			customer: "Michael Doe",
			date: "1 March",
			amount: 900,
			method: "Online Payment",
			status: "Pending",
		},
		{
			id: 2342352,
			product: "Redragon S101",
			img: "https://m.media-amazon.com/images/I/71cngLX2xuL._AC_SY450_.jpg",
			customer: "John Smith",
			date: "1 March",
			amount: 35,
			method: "Cash on Delivery",
			status: "Pending",
		}, 
		{
			id: 2357741,
			product: "Razer Blade 15",
			img: "https://www.notebookcheck.net/uploads/tx_nbc2/Razer_Blade_Stealth_13.jpg",
			customer: "Jane Smith",
			date: "1 March",
			amount: 920,
			method: "Online",
			status: "Approved",
		},
		{
			id: 2342355,
			product: "ASUS ROG Strix",
			img: "https://www.tradeinn.com/f/13822/138228221/asus-rog-strix-g513qm-hf047-15.6-r7-5800h-16gb-1tb-ssd-rtx-3060-6gb-gaming-laptop.jpg",
			customer: "Harlod Carol",
			date: "1 March",
			amount: 2000,
			method: "Online",
			status: "Pending",
		},
	]
	return (
	 <TableContainer component={Paper} className="table">
   	   <Table sx={{ minWidth: 650 }} aria-label="simple table">
   	     <TableHead>
   	       <TableRow>
   	        <TableCell className="tableCell">Tracking ID</TableCell>
		<TableCell className="tableCell">Product</TableCell>
		<TableCell className="tableCell">Customer</TableCell>
		<TableCell className="tableCell">Date</TableCell>
		<TableCell className="tableCell">Amount</TableCell>
		<TableCell className="tableCell">Payment Method</TableCell>
		<TableCell className="tableCell">Status</TableCell>
   	       </TableRow>
   	     </TableHead>
   	     <TableBody>
   	       {rows.map((row) => (
   	         <TableRow key={row.id}>
   	           <TableCell className="tableCell">{row.id}</TableCell>
   	           <TableCell className="tableCell" >
			<div className="cellWrapper">
		       		<img src={row.img} alt="" className="image"/>
		       		{row.product}
		      	</div> 
		   </TableCell>
   	           <TableCell className="tableCell" >{row.customer}</TableCell>
   	           <TableCell className="tableCell" >{row.date}</TableCell>
   	           <TableCell className="tableCell" >{row.amount}</TableCell> 
   	           <TableCell className="tableCell" >{row.method}</TableCell> 
   	           <TableCell className="tableCell" >
			<span className={`status ${row.status}`}>{row.status}</span>
		   </TableCell>
   	         </TableRow>
   	       ))}
   	     </TableBody>
   	   </Table>
   	 </TableContainer>
	)
}

export default Atable
