import { NextResponse } from 'next/server';

interface ResponsePayload<T> {
  statusCode: number;
  message: string;
  data?: T;
}

const apiResponse = <T>({ statusCode, message, data }: ResponsePayload<T>) => {
  return NextResponse.json(
    {
      success: statusCode < 400,
      message,
      data,
    },
    { status: statusCode }
  );
};

export default apiResponse;
