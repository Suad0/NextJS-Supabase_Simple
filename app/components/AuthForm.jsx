"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabaseUrl = "https://pebksecwuyoktgfkksza.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYmtzZWN3dXlva3RnZmtrc3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4NDI0NjAsImV4cCI6MjAzMDQxODQ2MH0.JimE51RZVUncFNdr2etqngVqIcG3sbZeS8FSDfgDZ1g";
  const supabase = createClientComponentClient({
    supabaseUrl: supabaseUrl,
    supabaseKey: supabaseKey,
  });
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo="https://watch-list-plum.vercel.app/auth/callback"
      appearance={{
        theme: "dark",
        button: {
          className: "bg-white-400 text-gray-900 hover:bg-gray-600",
        },
        input: {
          className: "bg-gray-700 border-gray-600 text-white",
        },
      }}
    />
  );
}
