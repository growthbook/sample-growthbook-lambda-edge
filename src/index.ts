import { CloudFrontRequestEvent, CloudFrontRequestResult } from 'aws-lambda';
import { handleRequest } from "@growthbook/edge-lambda";

export async function handler(event: CloudFrontRequestEvent): Promise<CloudFrontRequestResult | void> {
  const env = buildEnv();
  env.host = "www.mysite.io";
  env.returnResponse = true;

  return handleRequest(event, undefined, env) as Promise<CloudFrontRequestResult | void>;
}

function buildEnv(): any {
  // todo: define environment variables here
  return {};
}
