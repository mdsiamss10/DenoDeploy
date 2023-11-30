const handler = async (_request: Request): Promise<Response> => {
  const resp = await fetch("https://api.github.com/users/denoland", {
    headers: {
      accept: "application/json",
    },
  });

  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

Deno.serve(handler);
