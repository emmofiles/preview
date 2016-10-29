$( document ).ready(function() {
    $('.SeeMore2').click(function(){
        var $this = $(this);
        $this.toggleClass('SeeMore2');
        if($this.hasClass('SeeMore2')){
            $this.text('More');
        } else {
            $this.text('Less');
        }
    });

});



