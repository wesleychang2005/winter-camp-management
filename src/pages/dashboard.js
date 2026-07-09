import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "components/Meta";
import { requireAuth } from "util/auth";

function DashboardPage(props) {
  const router = useRouter();

  useEffect(() => {
    // Redirect the authenticated teacher to the actual Camp app
    window.location.href = "/camp_app.html";
  }, []);

  return (
    <>
      <Meta title="Dashboard Loading..." />
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-gray-500 font-medium">Opening Camp Manager...</div>
      </div>
    </>
  );
}

export default requireAuth(DashboardPage);
