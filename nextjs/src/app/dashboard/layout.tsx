export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <strong>Dashboard</strong>
      </nav>
      <main>{children}</main>
    </section>
  );
}
