(function($) {
  $.fn.modallery = function( options ) {

    var modal = '<div class="modal fade" id="mdlyModal" tabindex="-1" role="dialog" aria-labelledby="mdlyLabel">' +
    '<div class="modal-dialog" id="mdlyDialog" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '<span aria-hidden="true">&times;<span>' +
    '</button>' +
    '<h4 class="modal-title" id="mdlyLabel"></h4>' +
    '</div>' +
    '<div class="modal-body"><img id="modallery-img" class="img-responsive" /><p class="text-center" id="modallery-caption"></p></div>' +
    '<div id="mdlyFooter"></div>' +
    '</div>' +
    '</div>' +
    '</div>';

    var params = $.extend({
      title: 'Image Gallery',
      caller: '.modallery',
      size: '',
      navigate: false
    }, options);

    $("body").append(modal);

    if (params.size !== '') {
      console.log('modal_' + params.size);
      $("#mdlyDialog").addClass('modal-' + params.size);
    }

    if (params.navigate) {
      $("#mdlyFooter").addClass('panel-footer');
      $(params.caller).each(function(){
        var btn  = '<button class="btn btn-default navigator-btn" data-ref="' + $(this).data('to') +'"><img src="'+$(this).attr('src')+'" class="img-responsive" /></button>';
        $("#mdlyFooter").append(btn);
      });
    }


    $(params.caller).click(function(){
      $("#mdlyLabel").html(params.title);
      $("#modallery-img").attr('src',$(this).data('to'));
      if ($(this).data('caption')) {
        $("#modallery-caption").html($(this).data('caption'));
      } else {
        $("#modallery-caption").html("");
      }

      if (params.navigate) {
        $('.navigator-btn').removeClass('highlighted');
        $('.navigator-btn[data-ref="' + $(this).data("to") + '"]').addClass('highlighted');
      }

      $("#mdlyModal").modal('show');
    });

    $(".navigator-btn").on('click',function(){
      var model = $('img[data-to="'+$(this).data("ref")+'"]');

      $("#mdlyLabel").html(params.title);
      $("#modallery-img").attr('src',model.data('to'));
      if (model.data('caption')) {
        $("#modallery-caption").html(model.data('caption'));
      } else {
        $("#modallery-caption").html("");
      }

      $('.navigator-btn').removeClass('highlighted');
      $(this).addClass('highlighted');

      // $("#mdlyModal").modal('show');
    });
  }
}(jQuery));


