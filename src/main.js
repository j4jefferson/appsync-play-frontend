import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { Amplify } from 'aws-amplify'
import store from './store'
import directives from './directives'

// import '@aws-amplify/ui-vue'
import {
	applyPolyfills,
	defineCustomElements,
} from '@aws-amplify/ui-components/loader'

import router from './router'

Amplify.configure({
	Auth: {
		region: 'eu-west-1',
		userPoolId: 'eu-west-1_cWwg6o3nN',
		userPoolWebClientId: '1dackaku2vh2hf14e2c8d69nf3',
		mandatorySignIn: true,
	},
})

const myAppConfig = {
	aws_appsync_graphqlEndpoint:
		'https://lixfjokjizbi7fj3udxaowomru.appsync-api.eu-west-1.amazonaws.com/graphql',
	aws_appsync_region: 'eu-west-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

Amplify.configure(myAppConfig)

applyPolyfills().then(() => {
	defineCustomElements(window)
})

Vue.config.productionTip = false
Vue.config.ignoredElements = [/amplify-\w*/]

Vue.use(directives)

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
