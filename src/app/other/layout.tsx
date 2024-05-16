
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>nuevo layout</span>
      <div>{children}</div>
    </div>
  );
}
