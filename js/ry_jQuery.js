/**
 * Created by Administrator on 2017/7/19.
 */
$(function(){

    //�����������
    $('.topNav_right>ul>li').mouseover(function(){
        $(this).css('backgroundColor','#00a3cb');
        //������뵼�������������
        $('.xiala').stop().slideDown();
    })
    $('.topNav_right>ul>li').mouseout(function(){
        $(this).css('backgroundColor','#00b5e2');
        //$('.xiala').css('display','none');
    })
    //����Ƴ������������ſ�����ʧ
    $('.xiala').mouseover(function(){
        $('.xiala').stop().slideDown();
    })
    $('.xiala').mouseout(function(){
        $('.xiala').stop().slideUp();
    })
    //�������������li��ǩli��ɫ
    $('.xiala_top li').mouseover(function(){
        $(this).children().css('color','#00b5e2');
    })
    $('.xiala_top li').mouseout(function(){
        $(this).children().css('color','black');
    })
     //������������ײ���li��ǩ.bc��ɫ
    $('.xiala_bottom li').mouseenter(function(){
        $(this).children().children(".bc")[0].style.color = "#00b5e2";
    })
    $('.xiala_bottom li').mouseleave(function(){
        $(this).children().children(".bc")[0].style.color = "#000";
    })





    //����������������

    //�����������




    //�ֲ�ͼ


    $('.screen_index>span').mouseover(function(){
        $('.screen_index>span').removeClass('current');
        $(this).addClass('current');
        //console.log('haha');
        var offsetX=-($(this).index()*$('.screen').width());
        //console.log($(this).index()*$('.screen').width());
        $('.screen_pic').animate({
            'left':offsetX
        },500)
    })
//�ֲ�ͼ����
})