$(function ()
{
	$('.header-navbar ul.dropped').hover(function ()
	{
		$('.header-navbar li.dropdown a').addClass('opened');
	}, function ()
	{
		$('.header-navbar li.dropdown a').removeClass('opened');		
	});

	$('.header-navbar nav > ul > li:not(.dropdown) > a').click(function ( e )
//	$('.header-navbar a').click(function ( e )
	{
//		console.log(e);
		$('.header-navbar a').removeClass('active');
		$(this).addClass('active');
	});

	$('.header-navbar a.brand-title').click(function ( e )
	{
		$('.header-navbar a').removeClass('active');
	});
});