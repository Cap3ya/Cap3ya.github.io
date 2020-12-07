$j(document).ready(function(){
	$j("table.sortable thead th").click(function () {
		with($j(this).closest("form"))
		{
			find('input[name="sortable"]').val($j(this).text());
	    	submit();	
		}
	});
});