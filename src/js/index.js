$('#tabsReg a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	var currentTab  = e.target.id, // newly activated tab
		prevTab     = e.relatedTarget, // previous active tab
		contentTabShow = $('#register-content');

	console.log(currentTab);
	if (currentTab === 'activar-tab') {
		contentTabShow.addClass('activeCard');
	} else {
		contentTabShow.removeClass('activeCard');
	}

});

// Pagina perfil - boton de mis beneficios[mi perfil]
$(document).on('click', '#go-benefs', function () {
	$('#nav-contact-tab').tab('show');
});

$(document).on('change', '.optar .otar', function () {
	var opt =  $(this).val(),
		$cardInput = $('#numtar');

	if (opt === 'option2') {
		$cardInput.hide();
	} else {
		$cardInput.show(100);
	}
})

$(document).on('click', '#cardbox', function () {
	var contentcard = $(this),
		cardfront = $('#cardfront'),
		cardback  = $('#cardback');

	if (contentcard.hasClass('front')) {
		contentcard.removeClass('front');
	}else {
		contentcard.addClass('front');
	}

});

