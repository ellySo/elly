
$(document).ready(function(){

    $('#navi li a').each(function(){
        // 각자를 실행해
        // 태그에서 텍스트와 스타일까지 관리가 가능하도록 했다.
        $(this).html($(this).data('krnm'))
        // 각 a태그의 data옵션 krnm의 값을 지정해두고 출력하기
        $(this).css('color', $(this).data('color'))
        // 각 a태그의 data옵션 color의 값으로 글자색을 처리하겠다.
        $(this).parent().css('border-color', $(this).data('color'))
    })

    // 상품출력
    $("#product .thumb h2").html(
     $("#product .thumb").data('prnm')
    ); // 상품명 출력하기 공주실내화 노출하기
    // 상품가격
    $("#product .thumb p").html(
        $("#product .thumb").data('price')
       );

    // 상품이미지출력
    $("#product .thumb img").attr( 'src',  $("#product .thumb").data('img')    );


    })