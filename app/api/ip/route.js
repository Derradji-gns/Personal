import { NextResponse } from "next/server";

// Make sure this runs on every request and is never cached or pre-rendered
export const dynamic = "force-dynamic";

export async function GET(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    (forwardedFor && forwardedFor.split(",")[0].trim()) ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Optional: Vercel also provides location headers
  const country = request.headers.get("x-vercel-ip-country");
  const city = request.headers.get("x-vercel-ip-city");

  // TODO: save it here (database, Google Sheet, log, etc.)
  console.log("Visitor:", { ip, country, city });

  return NextResponse.json({ ip, country, city });
}


/////// just txt