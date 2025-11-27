import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Basic Validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    // --- TODO: REPLACE THIS WITH YOUR REAL DATABASE/API LOGIC ---
    // Example: const user = await prisma.user.findUnique({ where: { email } });
    
    // MOCK RESPONSE
    if (email === "test@test.com" && password === "password") {
      // Set auth cookies here usually
      return NextResponse.json({ message: "Success", user: { email } }, { status: 200 });
    }

    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
    // ------------------------------------------------------------

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}