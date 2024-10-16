import 'jsr:@std/dotenv/load';

const PLATFORM_NAME = Deno.env.get('APP_NAME');
Deno.serve({ port: 4343 }, (_req) => {
	return new Response(`Hello world from ${PLATFORM_NAME}`);
});
