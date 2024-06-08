import AWS from "aws-sdk";

const lambda = new AWS.Lambda();

export const handler = async (event) => {
  try {
    const payload = {
      userId: "665adb6426688cd8f9f914c3",
      shortUrl: "https://example.com",
      longUrl: "https://example.com/long/url/path",
    };

    // 调用第二个 Lambda 函数
    const params = {
      FunctionName: "LambdaToInvoke",
      InvocationType: "Event", // 使用事件调用，异步执行
      Payload: JSON.stringify(payload),
    };

    const invokeResponse = await lambda.invoke(params).promise();
    console.log(`invokeResponse`, invokeResponse);

    if (invokeResponse.StatusCode === 200) {
      console.log("Successfully invoked the Lambda function");
    } else {
      throw new Error("error invoking Lambda function");
    }

    return {
      statusCode: 200,
      body: JSON.stringify("Successfully invoked second Lambda function"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
