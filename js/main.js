function show_resut(){
    scrollTo(0, 0);
    
    console.log("this is now,");
    var ctx = document.getElementById("myRadarChart");
    var answer_name = document.getElementById("answer_name").value;
    var a = document.getElementById("answer_a").value;
    var b = document.getElementById("answer_b").value;
    var c = document.getElementById("answer_c").value;
    var d = document.getElementById("answer_d").value;
    var e = document.getElementById("answer_e").value;
    var f = document.getElementById("answer_f").value;
    var g = document.getElementById("answer_g").value;
    var h = document.getElementById("answer_h").value;
    var i = document.getElementById("answer_i").value;
    var j = document.getElementById("answer_j").value;
    var k = document.getElementById("answer_k").value;
    var l = document.getElementById("answer_l").value;
    var m = document.getElementById("answer_m").value;
    var n = document.getElementById("answer_n").value;
    var o = document.getElementById("answer_o").value;
    var p = document.getElementById("answer_p").value;
    var q = document.getElementById("answer_q").value;
    var r = document.getElementById("answer_r").value;
    var s = document.getElementById("answer_s").value;
    var t = document.getElementById("answer_t").value;
    
    var myRadarChart = new Chart(ctx,{
        type:'radar',
        data: {
            labels: ["A 視覚的ワーキングメモリ","B 聴覚的ワーキングメモリ","C 言語操作力","D 数操作力","E 空間認知力","F 処理能力","G 適応力","H こだわり力","I 創造力","J 想像力","K 社会技能力","L 自己コントロール力","M 時間力","N 継続力","O 遂行機能力","P 注意力","Q ボディイメージ","R 視覚的認知力","S 聴覚認知力","T 運動能力"],
            datasets:[{
                label:answer_name,
                data:[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t],
                backgroundColor: 'RGBA(225,95,150, 0.5)',
                borderColor: 'RGBA(225,95,150, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }]
        },
        options:{
            title:{
                display:true,
                text:''
            },
            scale:{
                ticks:{
                    suggestedMin:0,
                    suggestedMax:100,
                    stepSize:10,
                    callback:function(value,index,values){
                        return value
                    }
                }
            }
        }
    });
}

show_resut();
