import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate required fields
    if (!body.name || !body.phone || !body.email || !body.service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    // In production: send to CRM, email, or webhook
    // e.g. await sendToWebhook(body);
    console.log("[Lead]", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
