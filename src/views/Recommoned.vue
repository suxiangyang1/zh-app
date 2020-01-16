<template>
	<div class="body">
	<div class="banner">
		<ul>
		<li><router-link to="/recommoned" class="router"><h1>推荐</h1></router-link></li>
		<li><router-link to="/follow" class="router"><p class="text">关注</p></router-link></li>
		<li><router-link to="/hot" class="router"><p class="text">热榜</p></router-link></li>
		</ul>
	</div>
	<div class="container">
		<div class="row" v-for="(item,index) in recommoned" :key="index">
			<div class="col-4">
			<img :src="item.banner" alt=""></div>
			<div class="col-8">
				<h3>{{ item.title}}</h3>
				<small>{{item.introduction}}</small>
				<p class="meta">{{ item.updated}} 更新，{{ item.viewCount }}次浏览</p>
				<span v-for="(section,index) in item.sections" :key="index" class="section">
					{{ section.sectionTitle }}
				</span>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name: 'recommoned',
		// data一定要是个函数
		data() {
			return {
				recommoned: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special').then(res => {
				console.log(res);
				console.log("ceece")
				this.recommoned = res.data.data;
			});
		}
	};
</script>
<style lang="scss" scoped>
	.body{
		background-color: #f6f6f6;
	}
	ul {
		list-style-type: none;
}
li {
		font-size: larger;
		margin-top: 10px;
		margin-left: 50px;
	    float: left;
	}
	.banner {
		margin-bottom: 10px;
		margin-top: -10px;
		height: 100px;
		border: 1px solid #d6d6d6;
		box-shadow: 2px 5px 5px #ddd;
		display: flex;
		align-items: center;
	}
	h1{
		color: #0084ff;
	}
	.text{
	margin-top: 32px;	
	color: #000000;
	font-size: 30px;
	}
	.router{
		text-decoration: none;
	}
	.container{
		overflow: auto;
		margin: 0 auto;
		margin-top: 50px;
		width: 80%;
		background-color :#ffffff;
		font-size: 25px;
		.row{
			background-color: #ffffff;
			display: flex;
			border: 1px solid #d6d6d6;
			border-radius: 4px;
			height: auto;
			padding: 14px;
			box-shadow: 0 1px 3px 0 rgba(26,26,26,0.1);
			.col-4{
				flex: 0 0 33%;
				height: auto;
				img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
			.col-8{
				margin-left: 30px;
			}
		}
	}
</style>