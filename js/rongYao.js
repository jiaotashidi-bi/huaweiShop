
window.onload=function(){

    var xiala=document.getElementsByClassName("xiala");
    var topNav_right=document.getElementsByClassName("topNav_right");
    var lis=topNav_right.children[0].children;
    var box=  document.getElementById("box");
    var screen=box.children[0];
    var ul=screen.children[0];
    var ol=screen.children[1];

    //��topNav_right��������¼�
    lis.onmouseover=function(){
        xiala.style.display="block";
    }
    //����ul����������li,��ol���li,��li���index���Բ���������ֵ
    for(var i=0;i<lis.length;i++){
        var li=document.createElement("li");
        li.setAttribute("index",i);
        ol.appendChild(li);
     }
    //����һ��li����Ĭ����ʽ
    var olLis=ol.children;
    olLis[0].setAttribute("class","current");
    //��ol�е�liע����������¼�
    for(var i=0;i<olLis.length;i++){
    olLis[i].onmouseover=function(){
    //    ��������li�Ƴ���ʽ
        for(var j=0;j<olLis.length;j++){
        olLis[j].removeAttribute("class","current");
         }
        //ֻ����ǰli������ʽ
        this.setAttribute("class","current");

    }
     }


    function setText(obj, text) {
        if (obj.innerText === undefined) {
            obj.textContent = text;
        } else {
            obj.innerText = text;
        }
    }

    function animate(obj, target) {
        clearInterval(obj.timerId);
        obj.timerId = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style.left = leader + "px";
            if (leader == target) {
                clearInterval(obj.timerId);
            }
        }, 20);
    }
}