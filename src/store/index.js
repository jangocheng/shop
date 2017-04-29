import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		goodsData:[
			{
				name:'路费毛绒玩具',
				image:'src/static/images/luffy.jpg',
				introduce:'经济实惠有可靠',
				detail:'经济实惠有可靠,经济实惠有可靠,经济实惠有可靠,经济实惠有可靠!',
				comments:[
					'这个商品好',
					'家人用着都说喜欢'
				],
				like:0
			}
		]
	},
	mutations:{
		addLike(state){
			state.goodsData[0].like++;
		},
		subLike(state){
			state.goodsData[0].like--;
		},
		addComment(state,txt){
			state.goodsData[0].comments.push(txt);
		}
	}
})