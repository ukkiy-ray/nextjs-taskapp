const AdminDashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-green-300 p-4">
      <div>Admin Dashboard Layout</div>
      {children}
    </div>
  );
};

export default AdminDashboardLayout;
