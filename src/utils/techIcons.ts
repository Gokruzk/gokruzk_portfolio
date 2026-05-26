export const svgMapping: Record<string, string> = {
  "python": "/python.svg",
  "typescript": "/typescript.svg",
  "sql": "/sql.svg",
  "django (drf)": "/djangorest.svg",
  "django": "/djangorest.svg",
  "fastapi": "/fastapi.svg",
  "next.js": "/nextjs.svg",
  "react": "/react.svg",
  "react native": "/react.svg",
  "tailwind css": "/tailwindcss.svg",
  "postgresql": "/postgresql.svg",
  "mysql": "/mysql.svg",
  "mongodb": "/mongodb.svg",
  "linux": "/linux.svg",
  "docker": "/docker.svg",
  "vercel": "/vercel.svg",
  "aws": "/aws.svg",
  "gcp": "/gcp.svg",
  "git": "/git.svg",
  "neovim": "/neovim.svg",
  "mssql": "/mssql.svg",
  "gitlab": "/gitlab.svg",
  "github": "/github.svg",
  "jwt": "/jwt.svg",
  "sqlalchemy": "/sqlalchemy.svg",
  'prisma': "/prisma.svg"
};

export const getSvgPath = (tech: string) => {
  return svgMapping[tech.toLowerCase()] || "";
};
