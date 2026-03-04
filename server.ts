import { serve } from "https://deno.land/std@0.220.0/http/server.ts";

const html = await Deno.readTextFile("./index.html");

serve((req: Request) => {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
