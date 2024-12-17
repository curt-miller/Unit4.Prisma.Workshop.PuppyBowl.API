const prisma = require("../prisma");
const seed = async () => {
    const createPlayers = async () => {
        const players = [
            { "name": "Luna", "breed": "Corgi", "status": "field" },
            { "name": "Lucy", "breed": "Rottweiler", "status": "field" },
            { "name": "Charlie", "breed": "Dachshund", "status": "field" },
            { "name": "Molly", "breed": "Pit Bull", "status": "field" },
            { "name": "Max", "breed": "Great Dane", "status": "field" },
            { "name": "Cooper", "breed": "Husky", "status": "bench" },
            { "name": "Sadie", "breed": "Doberman", "status": "bench" },
            { "name": "Bailey", "breed": "Boxer", "status": "bench" },
            { "name": "Bella", "breed": "Chihuahua", "status": "bench" },
            { "name": "Rocky", "breed": "Yorkshire Terrier", "status": "bench" }
        ];
        await prisma.player.createMany({ data: players });
    };

    await createPlayers();
};
seed()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });