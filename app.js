let reselement=document.getElementById('reselement');
function send() {
	let url=document.getElementById('url').value;
	let method=document.getElementById('method').value;
	let header=JSON.parse(document.getElementById('header').value);
	let reqbody=document.getElementById('reqbody').value;
	reselement.placeholder="Getting response...";
	if (method=="GET") {
		fetch(url,{
			method:"GET",
			headers:header
		})
		.then(res=>{
			return res.text();
		})
		.then(response=>{
			reselement.value=response;
		})
		.catch(err=>{
			reselement.value=" Error "+err;
			console.clear()
		})
	} else {
		fetch(url,{
			method:"POST",
			body:reqbody,
			headers:header
		})
		.then(res=>{
			return res.text();
		})
		.catch(err=>{
			reselement.value=" Error "+err;
			console.clear();
		})
	}
}