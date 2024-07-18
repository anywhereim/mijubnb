import { PrismaClient } from "@prisma/client";
import { fakerKO as faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const CATEGORY = [
  "전망좋은",
  "자연",
  "동굴",
  "캠핑장",
  "방",
  "한옥",
  "해변",
  "국립공원",
  "수영장",
  "통나무집",
  "스키",
  "호수",
  "키즈",
  "섬",
];

async function seedUsers() {
  Array.from({ length: 10 }, (v, i) => i).forEach(async () => {
    const userData = {
      email: faker.internet.email(),
      name: faker.person.lastName() + faker.person.firstName(),
      image: faker.image.avatar(),
      desc: faker.lorem.paragraph(),
    };
    const res = await prisma.user.create({
      data: userData,
    });
    console.log(res);
  });
}

async function seedRooms() {
  //모든 유저를 가져와 해당 유저가 룸을 가져올 수 있도록 유저의 아이디를 가져와야함.
  const totalUsers = await prisma.user.findMany();
  if (totalUsers?.length > 1) {
    Array.from({ length: 20 }, (v, i) => i).forEach(async () => {
      const randomUserIndex = Math.floor(Math.random() * totalUsers.length);
      const randomUser = totalUsers[randomUserIndex];

      const roomData = {
        title: faker.lorem.words(),
        images: [
          faker.image.urlLoremFlickr({
            category: "hotel",
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: "travel",
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: "nature",
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: "building",
            width: 500,
            height: 500,
          }),
        ],
        lat: getRandomLatitude(),
        lng: getRandonLongtitude(),
        address:
          faker.location.state() +
          faker.location.street() +
          faker.location.streetAddress({
            useFullAddress: true,
          }),
        desc: faker.lorem.paragraphs(),
        category: CATEGORY[Math.floor(Math.random() * CATEGORY.length)],
        price: parseInt(
          faker.commerce.price({ min: 50000, max: 500000, dec: 0 })
        ),
        bedroomDesc: faker.lorem.words(),
        freeCancel: faker.datatype.boolean(),
        selfCheckIn: faker.datatype.boolean(),
        officeSpace: faker.datatype.boolean(),
        hasMountainView: faker.datatype.boolean(),
        hasShampoo: faker.datatype.boolean(),
        hasFreeLaundry: faker.datatype.boolean(),
        hasAirConditioner: faker.datatype.boolean(),
        hasWifi: faker.datatype.boolean(),
        hasBarbeque: faker.datatype.boolean(),
        hasFreeParking: faker.datatype.boolean(),
        userId: randomUser.id,
      };
      const res = await prisma.room.create({
        data: roomData,
      });
      console.log(res);
    });
  }
}

//랜던 위도
function getRandomLatitude() {
  const minLatitude = 37.4316;
  const maxLatitude = 37.701;

  return faker.number
    .float({
      min: minLatitude,
      max: maxLatitude,
      precision: 0.000001,
    })
    ?.toString();
}

//랜던 경도
function getRandonLongtitude() {
  const minLongtitude = 126.7963;
  const maxLongtitude = 127.1839;

  return faker.number
    .float({
      min: minLongtitude,
      max: maxLongtitude,
      precision: 0.000001,
    })
    ?.toString();
}

async function main() {
  await seedUsers();
  await seedRooms();
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
