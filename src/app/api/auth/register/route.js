import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // --- TODO: REPLACE THIS WITH YOUR REAL DATABASE/API LOGIC ---
    
    // Mocking a 422 Error (e.g. Email already taken)
    if (email === "taken@test.com") {
      return NextResponse.json(
        { 
          message: "Validation Error",
          errors: { email: ["This email is already registered."] } 
        }, 
        { status: 422 }
      );
    }

    // Mock Success
    return NextResponse.json(
      { message: "User created", user: { name, email } }, 
      { status: 201 }
    );
    // ------------------------------------------------------------

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}