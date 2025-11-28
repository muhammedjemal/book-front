import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { email } = body;


  await new Promise((resolve) => setTimeout(resolve, 1000));

 
  if (email === "test@test.com") {
    return NextResponse.json({
      message: "The email has already been taken.",
      errors: {
        email: ["The email has already been taken."]
      }
    }, { status: 422 });
  }

  
  return NextResponse.json({
    message: "User registered successfully",
    token: "fake-jwt-token-456",
    user: { ...body }
  }, { status: 201 });
}