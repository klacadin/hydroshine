export default async function handler(req, res) {
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token && token === process.env.META_VERIFY_TOKEN) {
      res.status(200).send(String(challenge ?? ""));
      return;
    }

    res.status(403).send("Verification failed");
    return;
  }

  if (req.method === "POST") {
    // Meta sends Messenger events here after webhook subscription succeeds.
    // The first version just acknowledges delivery so the callback stays healthy.
    console.log("Facebook webhook event:", JSON.stringify(req.body));
    res.status(200).send("EVENT_RECEIVED");
    return;
  }

  res.setHeader("Allow", "GET, POST");
  res.status(405).send("Method not allowed");
}
