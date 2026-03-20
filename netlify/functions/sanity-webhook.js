import { purgeCache } from "@netlify/functions";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

export default async (req) => {
  const secret = process.env.SANITY_WEBHOOK_SECRET;

  // Read raw body as text — must be done before any parsing
  const rawBody = await req.text();
  const signature = req.headers.get(SIGNATURE_HEADER_NAME);

  console.log("Secret loaded:", !!secret, "length:", secret?.length);
  console.log("Signature received:", !!signature);

  // Reject requests with no signature
  if (!signature) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Verify the request is genuinely from Sanity
  const isValid = await isValidSignature(rawBody, signature, secret);
  console.log("Signature valid:", isValid);

  if (!isValid) {
    return new Response("Invalid signature", { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const { _type, slug } = payload;

const tagsToPurge = [];

if (_type === "paintings") {
if (slug?.current) {
tagsToPurge.push(`painting-${slug.current}`);
}
tagsToPurge.push("paintings-list", "paintings-pagination");

} else if (_type === "canvas") {
if (slug?.current) {
tagsToPurge.push(`canvas-${slug.current}`);
}
tagsToPurge.push("canvas-list");

} else if (_type === "giclee") {
if (slug?.current) {
tagsToPurge.push(`giclee-${slug.current}`);
}
tagsToPurge.push("giclee-list");

} else if (_type === "press") {
if (slug?.current) {
tagsToPurge.push(`press-${slug.current}`);
}
tagsToPurge.push("press-list");

} else if (_type === "home") {
tagsToPurge.push("page-home");

} else if (_type === "about") {
tagsToPurge.push("page-about");

} else if (_type === "terms") {
tagsToPurge.push("page-terms");

} else if (_type === "delivery") {
tagsToPurge.push("page-delivery");

} else if (_type === "contact") {
tagsToPurge.push("page-contact");

} else if (_type === "exhibitions") {
tagsToPurge.push("page-exhibitions");

} else if (_type === "privacy") {
tagsToPurge.push("page-privacy");
}

if (!tagsToPurge.length) {
return new Response(
JSON.stringify({ message: "No matching type, nothing purged" }),
{ status: 200 }
);
}

await purgeCache({ tags: tagsToPurge });

  console.log(`Purged cache tags: ${tagsToPurge.join(", ")}`);

  return new Response(
    JSON.stringify({ purged: tagsToPurge }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

export const config = { path: "/api/sanity-webhook" };