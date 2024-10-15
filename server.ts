Deno.serve({ port: 4343 }, (_req) => {
	return new Response('Hello world from Deno APIs');
});
