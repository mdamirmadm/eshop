const Product = require('./models/product');

const products = [
    {
        name: "Iphone 12",
        img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 100000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "MacBook Air",
        img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 220000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "DELL Laptop",
        img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 100000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },{
        name: "Hp Laptop",
        img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 80000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "Sony Headphones",
        img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 9000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "BoAt Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 8000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "DELL Xpire 12",
        img: "https://images.unsplash.com/photo-1565906624603-eae91627707b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 130000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "Titan Watch",
        img: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 13000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "Olympus Watch",
        img: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 4000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    },
    {
        name: "Drone",
        img: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 15000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.[3]"
    }
]

const seed = async () => {
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seed;

