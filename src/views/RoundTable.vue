<template>
	<div>
		<div class="holder">
			<div class="row card" v-for="(item,index) in explores" :key="index">
				<img :src="item.banner" alt="background-photo" class="cover">
				<h3 style="float: left;">{{item.name}}</h3>
				<span style="margin: 4px 50px;text-align: center;float: right;font-size: 13px;"><font color="#CCCCCC">该圆桌被浏览{{item.visitsCount}}次</font></span>
			</div>
		</div>
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
			this.axios.get('http://localhost:8080/api/explore/all').then(res =>{
				console.log(res.data.data.length);
				this.explores =res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
.holder{
	overflow: auto;
	margin: 0 auto;
	width: 80%;
	top: 80px;
	margin-top: 90px;
	
}
.card{
	display: inline-block;
	width: 21%;
	border: 1px solid #eee;
	border-radius: 10px;
	text-align: center;
	padding-bottom: 20px;
	background-color: #fff;
	margin: 20px;
	float: left;
}
.cover{
	width: 250px;
	height: 250px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}
</style>
