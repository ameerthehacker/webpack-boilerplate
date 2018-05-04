import '../sass/index.scss';
import Vue from 'vue/dist/vue';
import { Math } from './calc';

new Vue({
	el: '#calculator',
	data: {
		num1: 0,
		num2: 0,
		result: 0
	},
	methods: {
		add() {
			this.result = Math.add(this.num1, this.num2);
		},
		sub() {
			this.result = Math.sub(this.num1, this.num2);
		},
		mul() {
			this.result = Math.mul(this.num1, this.num2);
		},
		div() {
			this.result = Math.div(this.num1, this.num2);
		}
	}
});
