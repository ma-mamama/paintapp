   var COLORS = ["black", "gray", "silver", "white", "maroon", "red", "orange", "gold", "yellow", "lime", "cyan", "blue", "magenta", "violet", "pink"];
   let canwrite = false;
   let count=30; //秒数
   let pensize = 5;
   /** 
   * 描画用のコンテキスト 
   */
   var context;

   /** 
   * キャンバスの初期化 
   */
   function initCanvas() {
     var isWriting = false; 
     var canvas = document.getElementById('canvas');
     context = canvas.getContext("2d");
     context.strokeStyle = COLORS[0];
     context.lineWidth = pensize;
     context.lineCap = "round";
     context.lineJoin = "round";
     var clientRect = canvas.getBoundingClientRect();
     var canvas_x = clientRect.left;
     var canvas_y = clientRect.top;


     // TODO: マウスが押されたら、描画開始
     canvas.onmousedown = function (e) {
       if(canwrite == false) return;
       context.beginPath();
       context.moveTo(e.offsetX -15 , e.offsetY - 40);
       isWriting = true;
     };
     canvas.ontouchstart = function (e) {
      if(canwrite == false) return;
      e.preventDefault();
      context.beginPath();
      context.moveTo(
        e.touches[0].clientX　-15 -canvas_x, 
        e.touches[0].clientY　-40 -canvas_y );
      isWriting = true;
     };

     // TODO: マウスが動いたら、線を描く
     canvas.onmousemove = function (e) { 
      if(canwrite == false) return;
       if(isWriting){
       context.lineTo(e.offsetX -15, e.offsetY -40);
       context.stroke();
       }
     };
     canvas.ontouchmove = function (e) {
      if(canwrite == false) return;
      if(isWriting){
        context.lineTo(
          e.touches[0].clientX -15　-canvas_x, 
          e.touches[0].clientY -40 -canvas_y );
        context.stroke();
      }
     };

     // TODO: マウスが押されなくなったら、描画を中止
     canvas.onmouseup = function (e) {
      if(canwrite == false) return;
       isWriting = false;
     };

   }

   /** 
   * 色選択テーブルの初期化 
   */
   function initColorTbl() {
     var colorTbl = document.getElementById("colorTbl");

     // 色数分セルの追加 
     for (var i = 0; i < COLORS.length; i++) {
       var cell = colorTbl.rows[0].insertCell(-1);
       cell.style.backgroundColor = COLORS[i];

       // TODO: cellが押されたらコンテキストのスタイルを変更 
       cell.onclick = function () {
           context.strokeStyle = this.style.backgroundColor;
       };
     }
   }

   
   function countdown(){
     let start = document.getElementById("start");
     let time = document.getElementById("time");
     start.onclick = function(){
      start.style.display="none";
        var counttimer = setInterval(function(){
          canwrite = true;
          time.textContent = count;
          count -= 1;      
          if(count < 0){
            time.textContent = "Time UP!";
            canwrite = false;
            clearInterval(counttimer);
          } 
        }, 1000);
    };
   };
   // HTML読み込み完了時に実行 
   window.onload = function () {
     initCanvas();
     initColorTbl();
     henkan();
     countdown();
   }; 

   function henkan(){
   let imgjs = document.getElementById("upload");
   imgjs.onclick = function () {
      var img_png_src = canvas.toDataURL();
      document.getElementById("Imagepaint").textContent = img_png_src;
      
   };
}