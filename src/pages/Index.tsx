import { Helmet } from "react-helmet-async";
import {
  PRODUCT_NAME, BRAND_NAME, MECHANISM, CDN_HERO_FRONT, CDN_HERO_ANGLE, CDN_LIFESTYLE_1, CDN_TEXTURE_1,
  META_TITLE, META_DESC, CHECKOUT_URL, REASONS, DISCLAIMER,
} from "../config";

const C = {
  bg: "#FBFBFC", bgAlt: "#F9F7F5", accent: "#E03131", accentLight: "#FFF0F0",
  text: "#363A42", textLight: "#6B7280", white: "#FFFFFF", border: "#E5E7EB",
};

const Index = () => (
  <>
    <Helmet>
      <title>{META_TITLE}</title>
      <meta name="description" content={META_DESC} />
      <meta property="og:title" content={META_TITLE} />
      <meta property="og:image" content={CDN_HERO_FRONT} />
    </Helmet>

    <div style={{ fontFamily: "Inter, sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>

      {/* ANNOUNCEMENT */}
      <div style={{ background: C.accent, color: C.white, textAlign: "center", padding: "10px 16px", fontSize: "14px", fontWeight: 600 }}>
        ✨ Limited Time: Use code SECRET25 for 25% off the LuxeBeam™ — $186.75 + Free Shipping
      </div>

      {/* ARTICLE HEADER */}
      <section style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 32px" }}>
        <h1 style={{ fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", lineHeight: 1.2, marginBottom: "24px" }}>
          {META_TITLE}
        </h1>

        <img src={CDN_HERO_ANGLE} alt={PRODUCT_NAME} style={{ width: "100%", borderRadius: "16px", marginBottom: "40px" }} />

        {/* OPENING STORY */}
        <div style={{ fontSize: "17px", lineHeight: 1.8, color: C.text }}>
          <p style={{ marginBottom: "16px" }}>It starts with the bathroom mirror.</p>
          <p style={{ marginBottom: "16px" }}>Not the quick glance on your way out the door. The other one — the one where the light catches your face just right and you see them. The lines that weren't there last year. The skin that used to bounce back after a late night but now just… doesn't.</p>
          <p style={{ marginBottom: "16px" }}>You've done everything right. The retinol. The vitamin C serum. The $80 hyaluronic acid that promised "plumping from within." Your nightstand looks like a Sephora shelf, and your skin looks… the same.</p>
          <p style={{ marginBottom: "16px", fontStyle: "italic", color: C.textLight }}>Maybe you've whispered it to yourself: "I've tried every serum and nothing makes a real difference for my fine lines."</p>
          <p style={{ marginBottom: "16px" }}>You're not imagining it. And it's not your fault.</p>
          <p style={{ marginBottom: "16px" }}>Here's what nobody in the skincare industry wants to tell you: <strong>the problem isn't your products. It's where they stop working.</strong></p>
          <p style={{ marginBottom: "16px" }}>Every serum, cream, and moisturizer you own works on the epidermis — the outermost 0.1mm of your skin. But collagen? Collagen is produced by fibroblast cells in your dermis, 1-4mm below the surface.</p>
          <p style={{ marginBottom: "16px", fontWeight: 700 }}>No cream on earth can reach them. Not at any price point.</p>
          <p style={{ marginBottom: "32px" }}>But what if you could reach those cells directly?</p>

          <div style={{ background: C.bgAlt, borderRadius: "12px", padding: "20px 24px", marginBottom: "48px", borderLeft: `4px solid ${C.accent}` }}>
            <p style={{ color: C.textLight, fontSize: "16px", lineHeight: 1.7 }}>
              A growing body of clinical research — and thousands of women who've quietly made the switch — suggest there's a way. And it doesn't come in a bottle.
            </p>
          </div>
        </div>

        {/* REASONS */}
        {REASONS.map((r, i) => (
          <div key={i} style={{ marginBottom: "56px" }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(20px, 3vw, 26px)", lineHeight: 1.3, marginBottom: "20px", color: C.text }}>
              {r.heading}
            </h2>
            {i === 0 && (
              <img src={CDN_TEXTURE_1} alt="Light therapy mechanism" style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }} />
            )}
            {i === 2 && (
              <img src={CDN_LIFESTYLE_1} alt="Woman with glowing skin" style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }} />
            )}
            <div style={{ fontSize: "17px", lineHeight: 1.8, color: C.text, whiteSpace: "pre-line" }}>
              {r.body}
            </div>
            <div style={{ marginTop: "24px" }}>
              <a href={CHECKOUT_URL} style={{
                display: "inline-block", background: C.accent, color: C.white,
                fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "10px", textDecoration: "none",
              }}>→ {r.cta}</a>
            </div>
          </div>
        ))}

        {/* PRODUCT INTRO */}
        <div style={{ background: C.white, borderRadius: "20px", padding: "36px", border: `2px solid ${C.accent}`, marginBottom: "48px" }}>
          <h2 style={{ fontWeight: 800, fontSize: "22px", marginBottom: "16px" }}>
            What Women Are Actually Using (And Why It's Not Another Serum)
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: C.text, marginBottom: "16px" }}>
            The <strong>{PRODUCT_NAME}</strong> by {BRAND_NAME} sits in a gap the market forgot: <strong>clinical-grade dual wavelengths (630-660nm + 830-850nm), medical-grade silicone, wireless USB-C design — for $249.</strong>
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: C.text, marginBottom: "24px" }}>
            They call the mechanism <strong>{MECHANISM}</strong>: dual-wavelength light that penetrates 4-10mm to energize fibroblast mitochondria, boosting collagen and elastin production at the cellular level.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <img src={CDN_HERO_FRONT} alt={PRODUCT_NAME} style={{ width: "200px", borderRadius: "12px" }} />
            <div>
              <p style={{ fontWeight: 700, fontSize: "24px", color: C.accent, marginBottom: "4px" }}>$186.75 <span style={{ textDecoration: "line-through", color: C.textLight, fontSize: "16px" }}>$399</span></p>
              <p style={{ fontSize: "14px", color: C.textLight, marginBottom: "16px" }}>with code SECRET25 · 60-Day Guarantee · Free Shipping</p>
              <a href={CHECKOUT_URL} style={{
                display: "inline-block", background: C.accent, color: C.white,
                fontWeight: 700, fontSize: "16px", padding: "14px 32px", borderRadius: "10px", textDecoration: "none",
              }}>Get My LuxeBeam™ →</a>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div style={{ textAlign: "center", padding: "48px 0" }}>
          <h2 style={{ fontWeight: 800, fontSize: "24px", marginBottom: "12px" }}>Your Skin Isn't Getting Younger While You Decide</h2>
          <p style={{ color: C.textLight, fontSize: "17px", lineHeight: 1.7, marginBottom: "24px" }}>
            Every day, your fibroblasts produce a little less collagen. The LuxeBeam™ can change that. 10 minutes. Clinical wavelengths. 4-10mm deep.
          </p>
          <p style={{ fontWeight: 700, fontSize: "20px", marginBottom: "24px" }}>
            <span style={{ textDecoration: "line-through", color: C.textLight }}>$399</span> <span style={{ color: C.accent }}>$186.75</span> with code SECRET25
          </p>
          <a href={CHECKOUT_URL} style={{
            display: "inline-block", background: C.accent, color: C.white,
            fontWeight: 700, fontSize: "18px", padding: "18px 48px", borderRadius: "12px", textDecoration: "none",
            boxShadow: "0 4px 20px rgba(224,49,49,0.3)",
          }}>→ Get My LuxeBeam™ — $186.75 + Free Shipping</a>
          <p style={{ marginTop: "16px", fontSize: "13px", color: C.textLight }}>
            Free shipping. 60-day results guarantee. If you don't see a difference, send it back.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", color: "#9CA3AF", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>{DISCLAIMER}</p>
      </footer>
    </div>
  </>
);

export default Index;
