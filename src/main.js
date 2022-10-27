import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)
Amplify.configure({
      aws_appsync_graphqlEndpoint: 'https://x53vqtsmlrcbvfxbsdgizfpk6a.appsync-api.ap-northeast-1.amazonaws.com/graphql',
      aws_appsync_region: 'ap-northeast-1',
      aws_appsync_authenticationType: 'API_KEY',
      aws_appsync_apiKey: 'da2-oixabp3vinbkbjv43gvnfd35he'
    });
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')