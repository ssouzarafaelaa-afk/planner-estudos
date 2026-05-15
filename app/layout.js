export const metadata = {
  title: "Planner de Estudos",
  description: "Faculdade + DP/eSocial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}