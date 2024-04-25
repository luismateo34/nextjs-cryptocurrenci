const createMany = await prisma.user.createMany({
  data: [
    { name: "Bob", email: "bob@prisma.io" },
    { name: "Bobo", email: "bob@prisma.io" }, // Duplicate unique key!
    { name: "Yewande", email: "yewande@prisma.io" },
    { name: "Angelique", email: "angelique@prisma.io" },
  ],
  skipDuplicates: true, // Skip 'Bobo'
});
