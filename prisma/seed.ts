// npx prisma db seed
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "test@prisma.io",
      boards: {
        create: {
          name: "My first board",
          items: {
            create: [
              { name: "item1", description: "item1 description" },
              { name: "item2", description: "item2 description" },
            ],
          },
        },
      },
    },
  });

  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
