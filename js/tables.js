jQuery(document).ready(function() {
	
	$(function(){
		var table = $('#cours_table');
		
		table.dataTable({
			"pageLength": 50,
			"stateSave": true,
			"dom": "<'row max-width buttons-actions'B><'row max-width'<'six columns length'l><'six columns filter'>r>"+
				"<'row max-width'<'twelve columns't>>"+
				"<'row max-width'<'eight columns'i><'four columns'p>>",
			"buttons": [
				{
					extend: 'csvHtml5',
					text: '',
					fieldSeparator: ';',
					exportOptions: {
	                    columns: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
	                }
				}
			],
			"language": {
				    "sProcessing":     "Traitement en cours...",
				    "sSearch":         "Rechercher&nbsp;:",
				    "sLengthMenu":     "Afficher _MENU_ cours",
				    "sInfo":           "Affichage du cours _START_ &agrave; _END_ sur _TOTAL_ cours",
				    "sInfoEmpty":      "Affichage du cours 0 &agrave; 0 sur 0 cours",
				    "sInfoFiltered":   "(filtr&eacute; de _MAX_ cours au total)",
				    "sInfoPostFix":    "",
				    "sLoadingRecords": "Chargement en cours...",
				    "sZeroRecords":    "Aucun cours &agrave; trouver",
				    "sEmptyTable":     "Aucun cours disponible dans le tableau",
				    "oPaginate": {
				        "sFirst":      "Premier",
				        "sPrevious":   "Pr&eacute;c&eacute;dent",
				        "sNext":       "Suivant",
				        "sLast":       "Dernier"
				    },
				    "oAria": {
				        "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
				        "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
				    }
			},
			"columnDefs":[
			 	{"targets": [12], "orderable": false}
			 ]
		}).api();
		
		$('#cours_table_wrapper .filter').append('<label><span>Rechercher</span><input type="text" value="" name="rechercher"/></label>');
		$('#cours_table_wrapper .buttons-actions').append('');
		$('#cours_table_wrapper .filter input').on('keyup', function () {
			table.fnFilter($(this).val());
		});
		
		$('#export-csv').on('click', function(e){
			e.preventDefault();
			$('#cours_table_wrapper').find('.buttons-html5').trigger('click');
		});
	});
	
});