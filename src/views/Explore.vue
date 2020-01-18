<template>
		<div class="holder">
			<div class="card" v-for="(item,index) in explores.slice(0,6)" :key="index">
				<div class="fle"><img :src="item.banner" alt="bjphoto"></div>
				<div class="fle-2">
					<h1 style="font-size: 22px;margin-left: 40px;margin-top: 50px;">{{item.title}}</h1>
					<h1 style="font-size: 12px;margin-left: 40px;"><font color="#C9C9C9">{{item.viewCount}}人浏览</font></h1>
					<button style="margin-left: 400px;margin-bottom: 40px;">关注圆桌</button>
				</div>
			</div>
			<div class="bottom-btn">
				<button style="margin-left: 600px;"><router-link to="/roundTable">查看更多圆桌</router-link></button>
			</div>
		</div>
</template>

<script>
export default {
		name:'explore',
		data(){
			return {
				explores: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special/all').then(res =>{
				console.log(res.data.data.length);
				this.explores =res.data.data;
			});
		},
		// methods:  {
		//          loadMore: function(){
		// 			 this.a=+20;
		// 		 }
		// }
	};
</script>

<style lang="scss" scoped>
.holder{
	margin: 0 auto;
	width: 90%;
	margin-top: 90px;
	background-color: #f6f6f6;
	.card{
		display: inline-block;
		width: 41%;
		border: 1px solid #eee;
		border-radius: 10px;
		// padding-right: 250px;
		background-color: #ffffff;
		margin: 40px;
		padding-bottom: -10px;
		.fle{
			flex: 0 0 50%;
			height: auto;
			float: left;
			img{
				width: 550px;
				height: 250px;
				border-radius: 10px;
				.fle-2{
					display: inline-block;
					float: right;
					line-height: 300px;
				}
			}
		}
	}
}
.div{
	display: inline-block;
}
button{
						margin: 0;
						padding: 0;
						border: 1px solid transparent;       //自定义边框
						outline: none;   //消除默认点击蓝色边框效果蓝色
						text-decoration:none;
						background-color: #EBF5FF;
						color: #0000FF;
						border: none;
						font-size: 16px;
						border-radius: 5px;

					}
.bottom-btn{
	padding: 20px;
	border-radius: 8px;
}
// 去除router-link的默认下划线
router-link{
	text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
