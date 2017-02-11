const Home = resolve => {
    require.ensure(['./views/home.vue'], () => {
        resolve(require('./views/home.vue'));
    });
};

const routers= [{ 
	path: '/', 
	name:'home',
	component:Home
},
// another way
// { 
// 	path: '/', 
// 	name:'home',
// 	component(resolve){
// 		require.ensure(['./views/home.vue'], () => {
// 	        resolve(require('./views/home.vue'));
// 	    });
// 	}
// }
]
export default routers;