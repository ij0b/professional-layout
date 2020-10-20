function range() {
    var
        val = $('.filter__range').val() / 10;
    $('.filter__range').css({ 'background': '-webkit-linear-gradient(left ,#f16d7f 0%,#f16d7f ' + val + '%,#f0f0f0 ' + val + '%, #f0f0f0 100%)' });
}
$(document).ready(function () {
    range();
});