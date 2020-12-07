/*
- Redefinition du menu du CRM

function is_email(email) -> controle le format de saisie d'une adresse mail 
function sortTable (tb, n, hiddenName) -> Tri sur des colonnes de tableau
function PopupCentrer(page,largeur,hauteur,options) -> centre une popup
function confirm_dokeos() -> demande de confrimation avant activation/desactivation compte dokeos

function confirmer(mavar) -> demande avant de supprimer un enregistrement

function dispatch_validation(monForm) -> selection d'une fonction de validation de formulaire
*/



//Event.observe(window, 'load', menumorph);
function is_email(email) { 
	var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}[.][a-zA-Z0-9]{2,4}$/ ;
	var reg2 = /[@]{2,}/ ;
	return ((reg.exec(email)!=null) && (reg2.exec(email)==null)) ;
} 

function checkpublipostage(monform, nbchampsrequis)
{
	with(monform)
	{
		if(publipostage.value=='')
		{
			alert("Le champs est vide");
			return false;		
		}
		lines = publipostage.value.split('\n');
		
		for(x=0;x<lines.length;x++)
		{
			if(lines[x].split(';').length!=nbchampsrequis)
			{
				alert("Il doit y avoir une erreur sur le nombre de champs requis !");
				return false;
			}
		}
		return true
	}
	return false;
}

function sortTable (tb, n, hiddenName)
{
        if(hiddenName!=undefined)
         {
            hidden=document.getElementById(hiddenName);
            valueHidden=hidden.value;
            if(valueHidden!="")
            {
                var resTableau=valueHidden.split(",");
                
            }
         }

	while (!tb.tagName || tb.tagName.toLowerCase()!= "table")
        {
		if (!tb.parentNode) return;
		tb = tb.parentNode;
        }

	if (tb.tBodies && tb.tBodies[0]) tb = tb.tBodies[0];

	var index = 0, value = null, minvalue = null;
        var present=0;
        if(resTableau!=undefined)
         {
           boucle: for(var t=0; t<resTableau.length;t++)
            {
                if(resTableau[t]==n)
                {
                    present++;
                }  
            }
         }

	for (var i= tb.rows.length -1; i >= 0; i--)
	{
		minvalue = value = null;
		index = -1;
		for (var j=i; j >= 0; j -= 1)
                {
                    value = tb.rows[j].cells[n].firstChild.nodeValue;

                    if (!isNaN(value)) value = parseFloat(value);

                    if(present%2==0)
                    {
                        if(minvalue == null || value < minvalue) { index = j; minvalue = value; }
                    }
                    else if(present%2==1)
                    {
                        if(minvalue == null || value > minvalue) { index = j; minvalue = value; }
                    }
                     
  
                }

                if (index != -1)
		{
		var row = tb.rows[index];
		if (row)
			{
			tb.removeChild(row);
			tb.appendChild(row);
			}
		}
	}
        if(hiddenName!=undefined)
        {
            document.getElementById(hiddenName).value=document.getElementById(hiddenName).value+n+",";
        }
}

function PopupCentrer(page,largeur,hauteur,options)
{
	var top=(screen.height-hauteur)/2;
	var left=(screen.width-largeur)/2;
	window.open(page,"stage","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options);
	return false;
}

function confirm_dokeos()
{
    var texte = "";

    if(document.getElementsByName('desactive')[0])
    {
            texte = "Voulez-vous vraiment activer l'élève dans dokeos?\nIl aura accès au cours.";
    }
    if(document.getElementsByName('active')[0])
    {
            texte = "Voulez-vous vraiment désactiver l'élève dans dokeos?\nIl n'aura plus accès au cours.";
    }
    var retour = false;
    retour= confirm(texte);
    return retour;

}

function confirmer(mavar)
{
    if(confirm("Etez-vous certain de vouloir supprimer cette ligne?"))
     {
        window.location=mavar;
        // alert(mavar);
     }
}

function inittable()
{
	thetablo= document.getElementById('middle').getElementsByTagName('table')[0];
	thetablo.id ="tablo_incident";
	lestr=thetablo.getElementsByTagName('tr');

//				alert(lestr.length);
	for(i=0;i<lestr.length;i++)
		{
		mestd= lestr[i].getElementsByTagName('td');
		//	[0].className="jaune";
		if(mestd.length!=0)
			{
			for(a=0;a<4;a++)mestd[a].className="jaune" ;
			}
		}

	with(document.forms[1])
		{
		//	su_pilote_u_id
		nouveauoption = document.createElement("option");
		texte_nouveauoption = document.createTextNode("Sans choix");
		nouveauoption.appendChild(texte_nouveauoption);
		nouveauoption.setAttribute("value", "");

		su_pilote_u_id.insertBefore(nouveauoption, su_pilote_u_id.getElementsByTagName('option')[0]);
		}
}

//--- Dispatch de la verification des formulaires
function dispatch_validation(monForm)
{
    switch(monForm.name){
        case "ajouter_eleve" :
            return validation_ajout_eleve(monForm);
            break;
        default :
            return true;
    }
}

//--- fonction de validation du formulaire d'ajout d'eleve

function validation_ajout_eleve(monForm)
{
    msg="";
    with(monForm)
    {
        //Vérification sur le nom, le prenom, l'adresse, la ville la date de naissance non-vide
        if(e_nom.value=="")msg+="Le nom doit être renseigné.\n";
        if(e_prenom.value=="")msg+="Le prénom doit être renseigné.\n";
        if(e_adresse.value=="")msg+="L'adresse doit être renseignée.\n";
        if(e_ville.value=="")msg+="La ville doit être renseignée.\n";
        if(date_naissance_jour.value=="" && date_naissance_mois.value=="" && date_naissance_annee.value=="")msg+="La date de naissance doit être renseignée.\n";
    }
    if(msg!="")	{alert(msg);return false;}
    else return true;
}





tinyMCE.init({
	// General options
	mode : "specific_textareas",
	editor_selector : "mceEditor",
	
	theme : "advanced",//simple
	plugins : "autolink,lists,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

	theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,undo,redo,|,cleanup,|,bullist,numlist,|,forecolor,backcolor",
	theme_advanced_buttons2 : "",
	theme_advanced_toolbar_location : "top",
	
	// Skin options
	skin : "o2k7",
	skin_variant : "silver",
	
	// Example content CSS (should be your site CSS)
	content_css : "/css/eStructure.css",

	// Drop lists for link/image/media/template dialogs
	template_external_list_url : "js/template_list.js",
	external_link_list_url : "js/link_list.js",
	external_image_list_url : "js/image_list.js",
	media_external_list_url : "js/media_list.js",

	// Replace values for the template plugin
	template_replace_values : {
			username : "Some User",
			staffid : "991234"
	}
});


$j(document).load(function() {
	//$j('iframe').iframeAutoHeight({debug: true});
});

$j(document).ready(function() {
	
	$j('iframe').iframeAutoHeight({debug: false});
	
	/*
	 * Uniformiser tous les boutons avec jQuery UI
	 * */
    $j("input[type=submit], input[type=button], button, .button").button();

    /*
     * Gérer la taille des iframes
     * */
    //$j('iframe').iframeAutoHeight();	

    /*
	$j(".iframe_reload_link").click(function () {
	    document.getElementById('iframe-content').src=this.title
	});
	*/
    
//    $j(".iframe_reload_link").click(function () {
//    	var f = document.getElementsByClassName('iframe-content')[0];
//	    f.src = f.src;
//	    console.log(f.src);
//	});
    
    /*
     * Gérer la taille des iframes
     * */	
		
	
	
	$j.datepicker.regional['fr'] = {
			clearText: 'Effacer', clearStatus: 'Effacer la date sélectionnée',
			closeText: 'Fermer', closeStatus: 'Fermer sans modifier',
			prevText: '&#x3c;Préc', prevStatus: 'Voir le mois précédent',
			prevBigText: '&#x3c;&#x3c;', prevBigStatus: '',
			nextText: 'Suiv&#x3e;', nextStatus: 'Voir le mois suivant',
			nextBigText: '&#x3e;&#x3e;', nextBigStatus: '',
			currentText: 'Courant', currentStatus: 'Voir le mois courant',
			monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
			'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
			monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun',
			'Jul','Aoû','Sep','Oct','Nov','Déc'],
			monthStatus: 'Voir un autre mois', yearStatus: 'Voir une autre année',
			weekHeader: 'Sm', weekStatus: '',
			dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
			dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
			dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
			dayStatus: 'Utiliser DD comme premier jour de la semaine', dateStatus: '\'Choisir\' le DD d MM',
			dateFormat: 'dd/mm/yy', firstDay: 1,
			initStatus: 'Choisir la date', isRTL: false};

	$j(".jdatetimepicker").datetimepicker($j.datepicker.regional['fr']);
	$j(".jdatepicker").datepicker($j.datepicker.regional['fr']);
	$j(".jtimepicker").timepicker($j.datepicker.regional['fr']);

	$j(".calendar").fullCalendar({
		monthNames:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
		monthNamesShort:['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
		titleFormat: {
			month: 'MMMM yyyy',
			week: "d[ MMMM][ yyyy]{ - d MMMM yyyy}",
		day: 'dddd d MMMM yyyy'
		},
		columnFormat: {
			month: 'ddd',
		week: 'ddd d',
		day: ''
		},
		axisFormat: 'H:mm', 
		timeFormat: {
			'': 'H:mm', 
		agenda: 'H:mm{ - H:mm}'
		},
		firstDay:1,
		buttonText: {
			today: 'aujourd\'hui',
			day: 'jour',
			week:'semaine',
			month:'mois'
		}, 
		header: {
			left: 'prev,next today',
		center: 'title',
		right: 'month,agendaWeek,agendaDay'
		},
		
		events: {
			url: '/z/calendar/data/'
		},
		// put your options and callbacks here

		 eventDrop: function(event,dayDelta,minuteDelta,allDay,revertFunc) {
			 	alert("id/"+event.id+"/className/"+event.className+"/dayDelta/"+dayDelta+"/minuteDelta/"+minuteDelta+"/allDay/"+allDay);
		        $j.ajax({ 
		        	url: '/z/calendar/xtdata/',
					type: 'POST', 
					data: "id/"+event.id+"/className/"+event.className+"/dayDelta/"+dayDelta+"/minuteDelta/"+minuteDelta+"/allDay/"+allDay, 
					success: function(data)
					{
						if(data=="true")
						{
							calendar.fullCalendar('updateEvent',event);
						}
						else
						{
							var span = document.createElement("span");
							span.innerHTML = cacheLang['erreurEdit'];
							alert(span.innerHTML);
						}
					}
				});
		    }

	})

	 
	
});





/*------------------------------------*\
	$IFRAME
\*------------------------------------*/
/* This code smell
function resizeiframe(myiframe)
{
	myiframe.style.height = (parseInt(myiframe.contentWindow.document.body.scrollHeight) + 100) + 'px';
	console.log('function resizeiframe');
}

var height = window.innerHeight + 100;
$j(document).ready( function(){
    $j('iframe').css('height', height)
    console.log('document ready iframe css');
} );
*/




function setSourceEvent(select)
{
	var value = $j(select).val();
	var category = $j(select).find('option:selected').attr('category');
	$j('#event_source').val(category);
	$j('#event_id_source').val(value);
}

function getFormationAjax(select)
{
	$j.ajax({ 
		url: '/z/ajax/formationeleve/',
		type: 'POST', 
		data: 'getFormationEleve=1&id_eleve='+$j(select).val(),
		success: function(data)
		{
			ajaxSuccess(data);
		}
	});
}

function ajaxSuccess(data)
{
	var id = $j(data).attr('id');
	$j('#'+id).replaceWith(data);
}

function gooddate(chaine)
{

	if(chaine.length==0)
	return false;	
	
	  var d;
	  d = new Date();
	  d.setYear(chaine.substring(6,10));
	  d.setMonth((chaine.substring(3,5)-1),chaine.substring(0,2));
	
	if ( (Number(chaine.substring(0,2))==d.getDate())  &&  (Number(chaine.substring(3,5))== (d.getMonth()+1)) &&( Number(chaine.substring(6,10))==d.getFullYear())) return true;
	return false;
}

function afficher_Phrase(myid)
{
	var date = document.getElementById('m'+myid).value ;
	
	var myPhrase = "représentant le paiement de votre mensualité de " ;
		myPhrase += date ;
		myPhrase += " que nous n'avons pas encore reçu." ;
	
	if(document.getElementById('choix_paiement'+myid).checked)
		{
		var myPhrase = "représentant les paiements de vos mensualités de " ;
		myPhrase += date ;
		myPhrase += " que nous n'avons pas encore reçus." ;
	}
	
	document.getElementById('phrase'+myid).innerHTML = myPhrase;
	document.getElementById('phrasehide'+myid).value = myPhrase;
}	

function exportAjax(mona, lien)
{
	
	$j.ajax({ 
		url: lien,
		type: 'POST', 
		data: $j(mona).closest('form').serialize(),
		success: function(data)
		{
			//ajaxSuccess(data);
		}
	});
}

/*
function verif(myform)
{
	noproblemo = true;
	with(myform)
	{
		if(gooddate(date_impression.value)==false)
		{
		alert("erreur sur la date d'impression : format JJ/MM/AAAA");
		noproblemo = false;
		}
	
	}
	return noproblemo;
}
*/
