import type Resource from '../models/Resource';

// TODO: implement resource validation check

const resourceValidationCheck = async (resource: Resource) => {
  // random delay to simulate network latency, 300-1000ms
  const delay = Math.floor(Math.random() * 700) + 300;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // 80% success rate
  const isSuccess = Math.random() > 0.2;
  return isSuccess;
};

export default resourceValidationCheck;
