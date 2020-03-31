/**
 * 即時オブジェクト初期化
 * ※ただし、ミニファイするとき、コードを関数で包んだだけの場合と同じようには効率的に処理しません。
 *  プライベートのプロパティとメソッドは、ミニファイの視点からは短縮名に変更しても安全なものとは見なせないからです。
 *
 *  minify後のコード例)
 *  ({d:600,c:400,a:function(){return this.d+"x"+this.c},b:function(){console.log(this.a())}}).b();
 */
({
	// 定数を設定しています。
	maxWidth : 600,
	maxHeight: 400,

	// ユーティリティメソッドも定義できます。
	gimmeMax : function () {
		return this.maxWidth + " x " + this.maxHeight;
	},

	// 初期化
	init     : function () {
		console.log(this.gimmeMax());
		return this;
	}
}).init();