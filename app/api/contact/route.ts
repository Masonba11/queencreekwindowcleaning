import { NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone || !body.email || !body.service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("[contact] WEB3FORMS_ACCESS_KEY is not set");
      return NextResponse.json(
        { error: "Form service not configured" },
        { status: 500 }
      );
    }

    const payload = {
      access_key: accessKey,
      subject: `Quote request — ${body.service}`,
      from_name: String(body.name),
      name: String(body.name),
      email: String(body.email),
      phone: String(body.phone),
      address: body.address ? String(body.address) : "",
      service: String(body.service),
      message: body.message ? String(body.message) : "",
    };

    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await res.json()) as { success?: boolean; message?: string };

    if (!res.ok || !data.success) {
      console.error("[contact] Web3Forms error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
