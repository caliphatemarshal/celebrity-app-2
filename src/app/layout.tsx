"use client";
import Loader from "@/components/common/Loader";
import "@/css/satoshi.css";
import "@/css/style.css";
import { store } from "@/redux/store";
import { storage } from "@/helpers/storage";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndRedirect = async () => {
      const auth_token_local = await storage.get("auth_token_local");
      const user_data_local_raw = await storage.get("user_data_local");

      const user_data_local = user_data_local_raw
        ? JSON.parse(user_data_local_raw)
        : null;

      const user_type = user_data_local?.user_type;

      if (pathname === "/") {
        router.push("/home");
      }

      // if (auth_token_local) {
      //   // Logged in user
      //   if (pathname === "/" || pathname === "/auth/login") {
      //     router.push(`/${user_type}/dashboard`);
      //   }
      // } else {
      //   // Not logged in → Always redirect to login
      //   if (!pathname.startsWith("/auth")) {
      //     router.push("/auth/login");
      //   }
      // }

      setLoading(false);
    };

    fetchAndRedirect();
  }, [pathname, router]);

  return (
    <Provider store={store}>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="toster-index">
              {" "}
              <Toaster position="bottom-right" />
            </div>
            {loading ? <Loader /> : children}
          </div>
        </body>
      </html>
    </Provider>
  );
}
