import { Outlet } from "umi";

export default function Layout() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Outlet />
    </div>
  );
}
