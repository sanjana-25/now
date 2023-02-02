import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//   const USERS = [{firstName: 'Sindhu', lastName: 'eddi', email:'sindhueddi@gmail.com'},{firstName: 'Harshini', lastName: 'Bat', email:'harshinibat@gmail.com'},{firstName: 'Sneha', lastName: 'potluri', email:'snehapotluri@gmail.com'},{firstName: 'Sanjana', lastName: 'Vonteri', email:'sanjana@gmail.com'},]

//   await prisma.user.createMany({
//     data: USERS
//   })
  const updatedUser = await prisma.user.update({
    where: { id:2 },
    data: {lastName:'kanuma'}
  });
  console.log(updatedUser);

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })