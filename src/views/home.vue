<template>
	<div class="home">
		<v-head></v-head>
		<img src="../assets/imgs/index.png" alt="">
	</div>
</template>

<script>
	import vHead from '../components/header';
  	export default {
    	name: 'home',
    	components: {
    		vHead
    	},
    	filters :{
    	},
    	data () {
	      	return {
	      	}
    	},
	    mounted () {
	    },
	    methods:{
	    },
	    watch:{
	    }
  	}
</script>

<style lang="scss">
	.home img{
		width: 100%;
	}
</style>
