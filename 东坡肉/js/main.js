/*
loading页面动画
1. 数字动画
2. ...动画
3. 页面跳转
*/
(()=>{
    let textNum = document.getElementsByClassName("loading-text2")[0]
    let loadPage = document.getElementsByClassName("loading-page")[0]
    //数字动画
    let num = 0
    let jsq = setInterval(()=>{
        if(num >= 100){
            num = 100
            clearInterval(jsq)
            pageClose()
            return
        }
        num++
        textNum.innerHTML = `${num}%`
    },1)
    //页面跳转
    function pageClose(){
        loadPage.style.opacity = 0
        setTimeout(() => {
            loadPage.style.display = "none"
        }, 500);
    }
})();

// 触摸拖动滚动翻页
(()=>{
    let status={
        startY:"",
        endY:"",
        //页码
        pageIndex: 1,
        //要滚动到的位置
        pos: 0
    }
    //触摸区域
    let touchArea = document.getElementsByClassName("touch-area")[0]
    //给所有可以滑动的页面添加事件
    let touchPages = document.getElementsByClassName("touch-page")
    for(let i = 0,len=touchPages.length;i<len;i++){
        touchPages[i].addEventListener("touchstart",touchStartEvent)
        touchPages[i].addEventListener("touchend",touchEndEvent)
    }
    
    //滑动开始
    function touchStartEvent(e){
        status.startY = e.touches[0].pageY
        console.log(`startY:${status.startY}`)
    }
    //滑动结束
    function touchEndEvent(e){
        status.endY = e.changedTouches[0].pageY
        console.log(`endY:${status.endY}`)
        move()
    }
    //执行滑动
    function move(){
        //判断滑动距离是否足以触发滑动
        if(Math.abs(status.startY-status.endY)<50){
            return
        }
        //判断滑动的方向 上一页为负数 下一页为正数
        let fx = (status.startY-status.endY)>0?"next":"last"
        
        switch(fx){
            //上一页的判断
            case "last":
                console.log(`当前页面${status.pageIndex} 上一页`)
                //第一页不能再上一页了
                if(status.pageIndex == 1) break
                status.pos += 667
                touchArea.style.transform = `translate(0,${status.pos}px)`
                status.pageIndex--
                break
            //下一页的判断
            case "next":
                console.log(`当前页面${status.pageIndex} 下一页`)
                //最后一页不能下一页了
                if(status.pageIndex == 3) break
                status.pos -= 667
                touchArea.style.transform = `translate(0,${status.pos}px)`
                status.pageIndex++
            break
        }
    }
})();


let selStatus = 1
let textStatus = 1
let doms = document.getElementsByClassName("page3-select-img")
let text_box = document.getElementsByClassName("page3-text-box")
function selChange(index){
    switch(index){
        case 1:
            text_box[textStatus-1].style.display = "none"
            text_box[index-1].style.display = "block"
            doms[selStatus-1].style.boxShadow = "none"
            doms[index-1].style.boxShadow = "0 0 5px yellow"
            selStatus = 1
            textStatus = 1
            break
        case 2:
            text_box[textStatus-1].style.display = "none"
            text_box[index-1].style.display = "block"
            doms[selStatus-1].style.boxShadow = "none"
            doms[index-1].style.boxShadow = "0 0 5px yellow"
            selStatus = 1
            textStatus = 2
            break
        case 3:
            text_box[textStatus-1].style.display = "none"
            text_box[index-1].style.display = "block"
            doms[selStatus-1].style.boxShadow = "none"
            doms[index-1].style.boxShadow = "0 0 5px yellow"
            selStatus = 1
            textStatus = 3
            break
    }
}