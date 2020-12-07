

/*------------------------------------*\
	$TABS
\*------------------------------------*/
/* This code smell
/*
$j(document).ready (function () {
	function resizeUi() {
	    var h = $j(window).height();
	    var w = $j(window).width();
	    $j("#tabs").css('height', h-95 );
	    $j(".ui-tabs-panel").css('height', h-140 );
	    console.log('resize tabs');
	};
	
	var resizeTimer = null;
	$j(window).bind('resize', function() {
	    if (resizeTimer) clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(resizeUi, 100);
	});
	resizeUi();
});
*/

function moveSelectedOptions(src, dest)
{
	$j("#" + src + " option:selected").each(
			function()
			{
				var _opt = $j(this);
				$j('#' + dest).append(
						'<option value="' + _opt.val() + '"> ' + _opt.text()
								+ ' </option>');
				_opt.remove();
			});
}

function confirmDialog(elt_a, validAction, cancelAction, options)
{
	var dialog = 'dialogbox';
	var width = 650;
	var height = 50;

	if(options != null)
	{
		if(options.width != null)
		{
			width = options.width;
		}
		if(options.height != null)
		{
			height = options.height;
		}
	}
	$j('#' + dialog).html('');
	$j('#' + dialog).dialog({
		open : function(event, ui)
		{
			if(options != null)
			{
				if(options.headerTheme != null)
				{
					$j('.ui-widget-header').each(function()
					{
						$j(this).addClass(options.headerTheme);
					});
				}
			}
		},
		width : width,
		height : height,
		modal : true,
		title : elt_a.title,
		buttons : {
			"Valider" : function()
			{
				var _destroy = true;
				if(validAction != null)
				{
					validAction(elt_a);
				}
				if(_destroy == true)
				{
					$j(this).dialog('destroy');
				}
			},
			"Annuler" : function()
			{
				var _destroy = true;
				if(cancelAction != null)
				{
					cancelAction(elt_a);
				}
				if(_destroy == true)
				{
					$j(this).dialog('destroy');
				}
			}
		},
		close : function(event, ui)
		{
		}
	});
}
