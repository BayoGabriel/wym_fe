// src/components/SeoHelmet.js
import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({
  title = "Wymnet | Digital Payment Without Limits",
  description = "Send, spend, and receive money seamlessly with Wymnet. No banks, no borders, no limits.",
  keywords = "Wymnet, digital payments, fintech, send money, receive money, USD virtual card, virtual dollar card, USDT payments, cross-border transfers, borderless banking, pay with face, face recognition payment, scan to pay, Nigeria to USA transfers, digital wallets, AI banking, facepay, pay with photo, fintech Nigeria, virtual bank account, OCR bank detail extraction, dollar card Nigeria, global payment app, financial inclusion, stablecoin transfers, instant payout, no bank needed",
  url = "https://www.Wymnet.org",
  image = "https://www.Wymnet.org/Wymnet-icon.png",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    {/* Open Graph / Facebook */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default Seo;
