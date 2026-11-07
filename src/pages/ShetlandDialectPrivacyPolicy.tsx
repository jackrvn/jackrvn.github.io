import React from "react";

const ShetlandDialectPrivacyPolicy: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Privacy policy</h1>

      <p className="italic mb-8">
        Shetland Dictionary app for iOS and Android, provided by Shetland
        ForWirds. Last updated: 7 November 2026.
      </p>

      <article className="prose prose-slate max-w-none space-y-6">
        <p>
          The Shetland Dictionary app does not collect, store or share any
          personal information. It has no accounts, analytics, ads or tracking,
          and it works offline.
        </p>
        <p>
          Your settings, such as theme and text size, are kept only on your
          device and are removed if you delete the app.
        </p>
        <p>
          Links in the app open in your web browser, where that website's own
          privacy policy applies.
        </p>
        <p>
          Questions can be sent to{" "}
          <a
            href="mailto:info@shetlanddialect.org.uk"
            className="text-blue-600 hover:text-blue-800"
          >
            info@shetlanddialect.org.uk
          </a>
          .
        </p>
      </article>
    </main>
  );
};

export default ShetlandDialectPrivacyPolicy;
