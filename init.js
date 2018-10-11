$(document).ready(function () {
        $('.container').height($(window).height()-$('#menu').height())       
        $('.wide').height($(window).height()-$('#menu').height() - 15)
        $('#leftnav').height($(window).height() - $('#menu').height() - 100)
    })