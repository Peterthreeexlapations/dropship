// Vercel serverless function: creates a Stripe Checkout Session.
// Required env var on Vercel: STRIPE_SECRET_KEY  (sk_test_... or sk_live_...)

const Stripe = require("stripe");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: "STRIPE_SECRET_KEY not configured" });
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { items } = req.body || {};
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // items: [{ title, price, qty, size, image }]
    const line_items = items.map((it) => ({
      price_data: {
        currency: "usd",
        unit_amount: Math.round(Number(it.price) * 100),
        product_data: {
          name: it.title + (it.size ? ` (Size ${it.size})` : ""),
          images: it.image ? [it.image] : undefined,
        },
      },
      quantity: Math.max(1, Number(it.qty) || 1),
    }));

    const origin =
      req.headers.origin ||
      `https://${req.headers.host}` ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "AU"] },
      success_url: `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart.html`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
