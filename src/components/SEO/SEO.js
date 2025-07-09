import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  meta_title,
  meta_description,
  meta_keywords,
  canonical_tag,
  og_type,
  og_title,
  og_description,
  og_url,
  og_site_name,
  og_image,
}) => {
  return (
    <Helmet>
      <title>
        {meta_title || "Finunique Real Cash Games | 100% Legal & Secure"}
      </title>
      <meta
        name="description"
        content={
          meta_description ||
          "Read more about Finunique – A 100% legal & certified real money gaming app. Trusted by pro gamers across India."
        }
      />
      <meta
        name="keywords"
        content={
          meta_keywords || "play rummy, play poker, play pool, play & win cash"
        }
      />

      <meta property="og:title" content={og_title || meta_title} />
      <meta
        property="og:description"
        content={og_description || meta_description}
      />
      <meta property="og:type" content={og_type || "website"} />
      <meta property="og:url" content={og_url || ""} />
      <meta property="og:image" content={og_image || ""} />
      <meta property="og:site_name" content={og_site_name || "Finunique"} />

      {/* Canonical */}
      <link rel="canonical" href={canonical_tag || og_url} />
    </Helmet>
  );
};

export default SEO;