var d = new Date();
console.log(d)

function formatDate(sp){
	today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth() + 1; //01
	var yyyy = today.getFullYear();

	if(dd < 10) dd = "0"+dd;
	if(mm < 10) mm = "0"+mm;

	return (dd + sp + mm + sp + yyyy);
}


var compare_dates = function(date1,date2){
	if( date1 > date2) return ("Date > Date2");
	else if( date1 < date2) return ("Date < Date2");
	else return ("Date1 = Date2")
}

compare_dates(new Date('11/14/2020 00:00'), new Date('09/14/2020 00:00'));