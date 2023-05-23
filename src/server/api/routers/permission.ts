import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const permissionRouter = createTRPCRouter({
  getAbilities: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ability.findMany();
  }),
});
