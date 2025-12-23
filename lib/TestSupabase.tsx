"use client";

import { supabase } from "@/config/client/supabaseClient";


export default function TestSupabase() {
  const test = async () => {
    const { data, error } = await supabase.from("profiles").select("*");
    console.log(data, error);
  };

  return <button onClick={test}>Test Supabase</button>;
}
