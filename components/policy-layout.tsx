import fs from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import type { Locale } from "@/lib/i18n";

/**
 * Legal text stays Markdown and gets its heading hierarchy from the `.policy`
 * block in `app/globals.css`. Tailwind's preflight strips heading styles, and
 * this project does not carry the typography plugin, so the styles have to be
 * written somewhere — this is that somewhere. The site header above it links
 * back to the home page.
 */
export async function PolicyLayout({ locale, doc }: { locale: Locale; doc: "privacy" }) {
  const markdown = await fs.readFile(
    path.join(process.cwd(), "content", "legal", `${doc}.${locale}.md`),
    "utf8"
  );
  return (
    <main className="shell policy-main">
      <article className="policy">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}
