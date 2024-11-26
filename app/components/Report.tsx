import path from "path";
import fs from "fs";

// const fonts = fs
//   .readFileSync(path.join(__dirname, './css/fonts.css'))
//   .toString();

const out = fs
  .readFileSync(path.join(__dirname, "../styles/out.css"))
  .toString();

export const Report = ({ children }: { children: any | any[] }) => {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <style dangerouslySetInnerHTML={{ __html: out }}></style>
      </head>
      <body className="text-sm">{children}</body>
    </html>
  );
};
