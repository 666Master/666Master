window.addEventListener("load", () => {
    new Container(config.wish, config.time, config.texts);
});

function Container(wish, time, texts) {
    this.passedSeconds = 0;
    this.finalText = wish;
    this.beginDate = time
    this.texts = texts

    this.renderTexts(this.texts);
    document.querySelector('.pass-time .finalText').innerHTML = this.finalText;
    setInterval(() => {
        this.passedSeconds = Math.ceil((+ new Date() - new Date(this.beginDate).getTime()) / 1000);
        let list = ['days', 'hours', 'minutes', 'seconds'];

        list.forEach(item => {
            document.querySelector(`.pass-time .${item}`).innerHTML = this[item]();
        })
    }, 1000);
}

Container.prototype = {
    renderTexts(texts) {
        let div = document.createElement("div");
        texts.forEach(item => {
            let d = document.createElement("div");
            d.innerHTML = item;
            div.appendChild(d);
        })
        document.getElementById("marquee").innerHTML = div.innerHTML;
    },
    finalText() {
        return this.text || "";
    },
    beginDate() {
        return this.time;
    },
    days: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / (3600 * 24));
    },
    hours: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 3600) % 24;
    },
    minutes: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 60) % 60;
    },
    seconds: function () {
        if (this.passedSeconds === 0) return "";
        return this.passedSeconds % 60;
    },
};

!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);

