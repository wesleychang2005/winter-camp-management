import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "components/Meta";
import { requireAuth } from "util/auth";

function DashboardPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Dashboard" />
      <div style={{ height: 'calc(100vh - 65px)' }}>
        <iframe 
          src="/camp_app.html?v=5" 
          style={{ width: '100%', height: '100%', border: 'none' }} 
          title="Camp Manager"
        />
      </div>
    </>
  );
}

export default requireAuth(DashboardPage);
