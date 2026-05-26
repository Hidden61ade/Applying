from pypdf import PdfReader
import sys

for path in sys.argv[1:]:
    out = path.replace(".pdf", ".txt")
    r = PdfReader(path)
    with open(out, "w", encoding="utf-8") as f:
        f.write(f"PAGES: {len(r.pages)}\n")
        for i, p in enumerate(r.pages):
            f.write(f"\n--- PAGE {i+1} ---\n")
            f.write((p.extract_text() or "") + "\n")
    print(f"wrote {out}")
