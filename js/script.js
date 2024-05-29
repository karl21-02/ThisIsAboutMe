document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.div-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger_trans();

        //////////////////////////

        if(menu.style.maxHeight) {
            menu.style.maxHeight = null;
        }
        else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        }

    });

    // 햄버거 메뉴 바3개 변경
    function hamburger_trans() {
        const hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle("active");
    }

    // nav에 메뉴 클릭시 
    $(document).ready(function() {
        $('.div-link').on('click', function(e) {
            e.preventDefault();
            var target = $(this).data('target');
            $('.content-article').hide();
            $('.default-article').hide();
            $('#' + target).show();
        })
    })
});
