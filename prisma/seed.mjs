import { Action, Domain, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const promises = [];
  for (const domain of Object.keys(Domain)) {
    for (const action of Object.keys(Action)) {
      const name = `${domain}${action}`;
      if (!(await prisma.ability.findUnique({ where: { name } }))) {
        promises.push(
          prisma.ability.create({
            data: {
              name,
              domain,
              action,
            },
          })
        );
      }
    }
  }
  await Promise.allSettled(promises);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
