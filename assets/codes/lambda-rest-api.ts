import cdk = require('@aws-cdk/cdk')
import lambda = require('@aws-cdk/aws-lambda')
import apigateway = require('@aws-cdk/aws-apigateway')

class MyStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string) {
    super(parent, name)

    const lambdaFn = new lambda.Function(this, 'MyLambda', {
      code: new lambda.AssetCode('./functions'),
      handler: 'hoge.handler',
      runtime: lambda.Runtime.NodeJS810,
    })

    const restApi = new apigateway.LambdaRestApi(this, 'MyRestApi', {
      handler: lambdaFn,
    })

    new cdk.CfnOutput(this, 'functionName', {
      value: lambdaFn.functionName,
    })
    new cdk.CfnOutput(this, 'restApiUrl', {
      value: restApi.url,
    })
  }
}

const app = new cdk.App()

new MyStack(app, 'CdkLambdaSample')
