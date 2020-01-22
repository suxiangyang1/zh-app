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
			
			<div class="h-alignment">
				<svg class="Zi Zi--Star" style="color: #0084ff; margin-left: 3%;" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
				<span style="padding-left: 10px;"><font size="5"><strong>热门收藏夹</strong></font></span>
			</div>
			<div class="box" v-for="(item,index) in favorites.slice(0,6)" :key="index" style="padding-bottom: 25px;">
				<div>
				<div class="box1" style="display: inline-block;">
					<h3>{{item.title}}</h3>
					<div class="box2">
						<span><img :src="item.creatorAvatar" alt="avatar"></span>
						<span><h5><font face="方正细倩简体" size="3" color="#444">{{item.creatorName}}&nbsp;</font>&nbsp;<font color="#B7B7B7">创建&nbsp;&nbsp;|&nbsp;&nbsp;{{item.followers}}关注</font></h5></span>
					</div>
				</div>
				<div class="box3" style="display: inline-block;vertical-align: top;margin-top: 25px;">
					<button style="width: 110px;height: 30px;"><font color="#0084FF">关注收藏夹</font></button>
				</div>
				</div>
				<div style="background-color: #ffffff;border: 0px;height: 1px;margin-top: -20px;">
					<hr>
				</div>
				<div class="box4">
					<p><font size="3"><strong>{{item.questionTitle}}</strong></font></p>
					<p><font size="3" color="#444">{{item.answerAuthorName}}:&nbsp;{{item.answerContent}}</font></p>
					<div class="box5">
						<span style="background-color: rgb(246, 246, 246);text-align: center;">回答&nbsp;</span>
						<span class="ziti-color">{{item.voteupCount}}赞同</span>
						<span class="ziti-color">{{item.commentCount}}评论</span>
					</div>
					<div class="s-c">
						<a href="/collection/36343271">已收藏 {{item.totalCount}} 条内容
						<svg viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd">
						</path>
						</svg>
						</a>
					</div>
				</div>
			</div>
			<div class="more">
				<button>
					<span><router-link to="collection/hot">查看更多收藏夹</router-link></span>
					<span>
						<svg class="Zi Zi--ArrowRight" fill="currentColor" viewBox="0 0 24 24" width="25" height="25"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path>
				        </svg>
					</span>
				</button>
			</div>
			
			<div class="zuanlan">
				<svg class="Zi Zi--EditCircle" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z" fill-rule="evenodd"></path></svg>
				<span><font size="5"><strong>专栏</strong></font></span>
			</div>
			<div class="zuanlan-top" v-for="(column,index) in columns" :key="index">
				<div class="tp">
					<img :src="column.imagesUrl" alt="photo">
				</div>
				<div class="biaoti">
					<h5><strong>{{column.title}}</strong></h5>
				</div>
				<div class="biaoti">
					<span style="letter-spacing: initial;"><font size="2" color="#d6d6d6">{{column.followers}}关注&nbsp;</font></span>
					<span>&nbsp;&nbsp;</span>
					<span style="letter-spacing: initial;"><font size="2" color="#d6d6d6">&nbsp;{{column.articlesCount}}文章</font></span>
				</div>
				<div class="biaoti" style="margin-top: 10px;font-size: 14px;color: #444;" >
					<p>{{column.description}}</p>
					<button style="padding: 5px 10px;margin-bottom: 20px;"><router-link to="/columns"></router-link>
					进入专栏</button>
				</div>
			</div>
			
			<div class="ExploreHomePage-ContentSection-moreButton">
				<a href="/columns" target="_blank" rel="noreferrer noopener" data-za-detail-view-id="5811"><router-link to="/columns">查看更多专栏</router-link><svg class="Zi Zi--ArrowRight" fill="currentColor" viewBox="0 0 24 24" width="25" height="25"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd">
			</path>
			</svg>
			</a>
			</div>
		</div>
</template>

<script>
export default {
		name:'explore',
		name:'favorite',
		name:'column',
		data(){
			return {
				explores: []
			};
			return {
				favorites: []
			};
			return {
				columns: []
			};
		},
		created() {
			this.axios.get( this.$store.state.baseUrl + "/special/all").then(res =>{
				console.log(res.data.data.length);
				this.explores =res.data.data;
			});
			this.axios.get(this.$store.state.baseUrl + "/favorite").then(res => {
				console.log(res.data.data.length)
				this.favorites = res.data.data;
			});
			this.axios.get(this.$store.state.baseUrl + '/columns').then(res =>{
				console.log(res.data.data.length);
				this.columns = res.data.data;
			})
		},
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
						color: #0084FF;
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
.h-alignment{
	    display: flex;
	    -webkit-box-align: center;
	    align-items: center;
	    height: 36px;
}
.box{
	box-sizing: border-box;
	display: inline-block;
	width: 41%;
	border: 1px solid #eee;
	border-radius: 10px;
	background-color: #ffffff;
	margin: 40px;
	padding-left: 20px;
	padding-right: 10px;
}
.box1{
		margin-top: 10px;
		margin-left: 5px;
		width: 75%;
		h4{
			margin: 0px;
			padding: 0px;
		}
	}
.box2{
	padding-top: -10px;
	margin-left: 5px;
			span{
				display: inline-block;
				margin-right: 14px;
				vertical-align: middle;
			}
		}
.box3{
	padding-right: 10px;
	box-sizing: border-box;
}
//改变线条的颜色
hr{
	border-top: 1px solid #F6F6F6;
	  margin-bottom: 30px;
	  margin-top: 30px;
}
.box4{
	margin-top: 20px;
}
p{
	  overflow : hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 1;
	  -webkit-box-orient: vertical;
	  padding-right: 6px;
	  margin: 10px;
	  padding: 0px;
}
.box5{
	margin-left: 10px;
	font-size: 12px;
}
.ziti-color{
	height: 17px;
    line-height: 17px;
	font-size: 12px;
	color: #999;
}
.answer{
	height: 20px;
	line-height: 20px;
    padding: 0 4px;
	background-color: #f6f6f6;
	color: #999;
	font-size: 12px;
}
.s-c{
	font-size: 14px;
    color: #8590a6;
	margin-left: 10px;
	-webkit-box-align: center;
	margin-top: 20px;
}
.more{
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
		padding: 4px 8px;
	button{
		margin-left: 43%;
		background-color: #ffffff;
		border-radius: 10px;
		padding: 4px;
		text-align: center;
		svg{
			
		}
	}
}
.zuanlan{
	display: flex;
	height: 36px;
	-webkit-align-content: center;
	align-items: center;
	margin-left: 35px;
	span{
		margin-left: 10px;
	}
}
.zuanlan-top{
	box-sizing: border-box;
	display: inline-block;
	width: 18%;
	border: 1px solid #eee;
	border-radius: 10px;
	background-color: #ffffff;
	margin: 40px;
	padding-left: 20px;
	padding-right: 10px;
	.tp{
		display: inline-block;
		padding: 20px;
		margin: 0px;
			img{
					width: 90px;
					height: 90px;
					border-radius: 50%;
					overflow: hidden;
					margin-left: 40%;
		}
	}
	.biaoti{
		margin-top: -20px;
		border: none;
		    // height: 22px;
		    // line-height: 22px;
		    font-size: 16px;
		    // max-width: 187px;
		    // white-space: nowrap;
		    // overflow: hidden;
		    text-overflow: ellipsis;
		    // font-weight: 600;
		text-align: center;
		
	}
}
.ExploreHomePage-ContentSection-moreButton{
	display: flex;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
}
svg{
	fill: currentcolor;
	    width: 25;
	    height: 25;
		overflow: hidden;
}
</style>
