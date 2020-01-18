<template>
	<div>
		<div class="gutter nav">
			<div class="nav-bar">
				<ul>
					<li><router-link to="/home">首页</router-link></li>
					<li><router-link to="/explore">发现</router-link></li>
					<li><router-link to="/question/waiting">等你来答</router-link></li>
					<li><router-link to="/special/all">全部</router-link></li>
					<li><router-link to="/login">登录</router-link></li>
				</ul>
			</div>
		</div>
		<!-- 二级路由入口 -->
		<router-view />
	</div>
</template>

<script>
	export default {
		name:'v-nav',
		data(){
			return {};
		},
		created() {	
		}
	};
</script>

<style lang="scss" scoped>
	body{
			margin: 0;
		}
		ul {
			list-style-type: none;
			    margin: 0;
			    padding: 0;
			    overflow: hidden;
			    background-color: #ffffff;
			    position: fixed;
			    top: 0;
			    width: 100%;
		}
		li {
			font-size: larger;
			margin-top: 10px;
			margin-left: 100px;
		    float: left;
		}
		
		li a {
		    display: block;
		    color: black;
		    text-align: center;
		    padding: 14px 16px;
		    text-decoration: none;
		}
		.router-link-active{
			color: black;
			border-bottom: 2px solid #000000;
		}
		.nav-bar{
			 position: sticky;
			   position: -webkit-sticky;    
			   top: 10px;                          
		}
		
		
</style>
