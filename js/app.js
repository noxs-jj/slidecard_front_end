$(function ()
{
	$('.header-navbar nav a').click(function ( e )
	{
		$('.header-navbar a').removeClass('active');
		$(this).addClass('active');
	});
});