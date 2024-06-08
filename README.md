## Getting Start with CDK

Please install aws-cdk befor starting
`npm install -g aws-cdk`
You can check cdk version by running `cdk --version`

1. Create IAM User on AWS (pay attention to the user permissions setting)
2. Install aws-cli on your local computer
3. Run `aws configure` to configure the AWS CLI
4. Run `cdk bootstrap aws://<你的 AWS 帳戶 ID>/<AWS 區域>`

The `cdk bootstrap` command is used in the AWS Cloud Development Kit (CDK) to set up necessary resources in an AWS environment that are required for deploying CDK applications. 
The command initializes the environment with resources such as an Amazon S3 bucket for storing assets and an AWS Identity and Access Management (IAM) role for deployment activities.


5. setup cdk project
```
mkdir my-lambda
cd my-lambda
```
Initialize a new CDK project
```
cdk init app --language=javascript
```
Install npm packages needed
```
npm install @aws-cdk/aws-lambda @aws-cdk/aws-iam
```
