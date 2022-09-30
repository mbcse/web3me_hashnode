import { Amplify, API } from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

const apiName = 'MyApiName'
const path = '/path'
const myInit = { // OPTIONAL
  headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: { // OPTIONAL
    name: 'param'
  }
}

API
  .get(apiName, path, myInit)
  .then(response => {
    // Add your code here
  })
  .catch(error => {
    console.log(error.response)
  })
