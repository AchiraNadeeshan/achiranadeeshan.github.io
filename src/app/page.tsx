import {HydrateClient } from "~/trpc/server";

export default async function home() {
  return (
    <HydrateClient>
      <main className="flex h-full flex-col items-center justify-center">
        hello world
      </main>
    </HydrateClient>
  );
}