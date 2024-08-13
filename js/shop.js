document.addEventListener('DOMContentLoaded', () => {
    const shopWrapper = document.querySelector('.shop-wrapper') || document.querySelector('.card-wrapper');

    if (!shopWrapper) return;

    // Fetch products from API
    fetch('https://dummyjson.com/products?limit=20')
        .then(response => response.json())
        .then(data => {
            // Custom titles array
            const customTitles = [
                'Creepy the Monkey',
                'Cube of Rubik',
                'Mini Car Series V',
                'Mr. Fix Me',
                'Poppy the Elephant',
                'Reswob the Turtle',
                'SoftBlox Rubber Duckie',
                'SoftBlox Tow Truck',
                'Lamby Lamby',
                'Mrs. Bell Bottoms',
                'Spin Top',
                'Wall-E 1/4 Scale',
                'Doll House',
                'R2-D2 Figurine',
                'Smash Bros Set',
                'VolksWagen 1/8 Scale',
                'Water Guns',
                'RoboWheels',
                'Nintendo Switch',
                'Yellow Helicopter'
            ];

            // Custom descriptions array
            const customDescriptions = [
                'Meet Creepy the Monkey, your cheeky new friend with a mischievous grin! This soft and huggable monkey comes with posable limbs and a tail that curls just like a real monkey. Whether swinging from branches or snuggling at bedtime, Creepy is always ready for adventure!',
                'Challenge your mind with the classic Cube of Rubik! This iconic puzzle features a 3x3 grid of colorful squares that twist and turn in endless combinations. Perfect for all ages, this brain-teaser is great for developing problem-solving skills and providing hours of fun. Can you solve it?',
                'Rev up your engines with the Mini Car Series V! This collection includes a variety of sleek, miniature cars, each with its unique design and vibrant colors. Perfect for racing or collecting, these durable little vehicles are built for speed and endless playtime.',
                'Meet Mr. Fix Me, the ultimate handyman toy! This friendly figure comes with a tool belt and detachable tools, perfect for little ones who love to build and fix. Whether it’s hammering, screwing, or tightening, Mr. Fix Me is always ready to get the job done!',
                'Poppy the Elephant is here to bring joy and comfort to your little one! With her big floppy ears, soft gray fur, and friendly trunk, Poppy is the perfect companion for playtime and naptime. She’s ready to trumpet her way into your heart!',
                'Slow and steady wins the race with Reswob the Turtle! This charming turtle toy features a hard shell and a gentle smile, making it the perfect friend for your little explorer. Whether on land or "sea," Reswob is ready to crawl his way into hours of fun!',
                'Make bath time fun with the SoftBlox Rubber Duckie! This classic yellow duck is soft, squeezable, and floats on water, making it the perfect bath-time companion. Safe for all ages, this little duckie is sure to bring smiles to your little one’s face!',
                'Get ready for a rescue mission with the SoftBlox Tow Truck! This sturdy, soft truck features a working tow hook and rubber wheels, perfect for saving the day. Whether towing other toys or helping out on the play mat, this truck is ready for action!',
                'Lamby Lamby is the softest, cuddliest lamb you’ll ever meet! With its fluffy white fur and sweet, embroidered face, this lamb is perfect for bedtime snuggles or as a comforting companion during the day. Lamby Lamby is the ideal friend for your little one.',
                'Say hello to Mrs. Bell Bottoms, the stylish doll with a flair for fashion! Dressed in her iconic bell-bottom pants and a colorful top, Mrs. Bell Bottoms is ready to groove. Perfect for imaginative play, this doll will be a favorite for any young fashionista!',
                'This vibrant spin top features a rainbow design on a white background. Easy to use—just flick and watch it whirl! Perfect for endless fun for kids and collectors alike!',
                'Bring home the adorable charm of WALL-E with this delightful toy! This miniature version of the lovable robot features detailed designs and movable parts. Perfect for playtime or as a collectible, this WALL-E toy inspires imagination and adventure for kids and fans alike!',
                'This charming white dollhouse is perfect for imaginative play! With its classic design and spacious rooms, it provides endless opportunities for creativity. Ideal for kids to decorate and furnish, this dollhouse is sure to spark hours of fun and storytelling!',
                'Bring home the galaxy’s favorite astromancy droid with this R2-D2 figurine! Featuring intricate details and a classic blue and white design, this collectible captures R2-D2’s charm perfectly. Whether for play or display, this iconic character is a must-have for any Star Wars fan!',
                'This vibrant set features three iconic characters: Mario, Luigi, and Yoshi! Each figurine stands about 4 inches tall, showcasing detailed designs and bright colors. Perfect for play or display, these durable figures are a must-have for any Super Mario fan!',
                'Zoom into fun with this awesome red Volkswagen Beetle diecast model! This little car is super cute and has lots of cool details, just like the real thing! Perfect for playtime or as a collectible, this Beetle is sure to make every kid’s toy collection more exciting! Get ready for adventure on four wheels!',
                'Gear up for fun with these bright and powerful water guns! Perfect for competitive games, they’ll keep everyone splashing and laughing during hot summer days. Get ready for an epic water showdown!',
                'Meet the fun robot with wheels! This playful toy zooms around with ease, combining a cool design with exciting movement. Perfect for imaginative adventures, this robot is great for kids who love tech and robotics. Let the fun roll on!',
                'Experience gaming like never before with this vibrant red and green Nintendo Switch! The console lights up with excitement, featuring a stunning display and smooth controls. Perfect for on-the-go gaming or relaxing at home, this stylish Switch is ideal for every Nintendo fan!',
                'Take to the skies with this vibrant yellow RC helicopter! Designed for outdoor flying, it features easy controls for smooth maneuvers and impressive agility. Perfect for hours of fun and exploration, this helicopter is a must-have for any flying enthusiast!'
            ];

            // Custom images array
            const customImages = [
                'images/toys/Creepy the Monkey.png',
                'images/toys/Cube of Rubik.png',
                'images/toys/Mini Car Series V.png',
                'images/toys/Mr. Fix Me.png',
                'images/toys/Poppy the Elephant.png',
                'images/toys/Reswob the Turtle.png',
                'images/toys/SoftBlox Rubber Duckie.png',
                'images/toys/SoftBlox Tow Truck.png',
                'images/toys/Lamby Lamby.png',
                'images/toys/Mrs. Bell Bottoms.png',
                'images/toys/Spin Top.png',
                'images/toys/Wall-E.png',
                'images/toys/Doll House.png',
                'images/toys/R2.png',
                'images/toys/Mario Set.png',
                'images/toys/Red Car.png',
                'images/toys/Water Guns.png',
                'images/toys/Robot Wheels.png',
                'images/toys/Switch.png',
                'images/toys/Heli.png'

            ];

             const maxProducts = shopWrapper.classList.contains('shop-wrapper') ? data.products.length : 6;

            // Generate product cards
            data.products.slice(0, maxProducts).forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = shopWrapper.classList.contains('shop-wrapper') ? 'product-card' : 'card';

                const title = customTitles[index] || product.title;
                let description = customDescriptions[index] || product.description;

                if (description.length > 100) {
                    description = description.substring(0, 100) + '...';
                }

                const imageUrl = customImages[index] || product.thumbnail;

                productCard.innerHTML = `
                    <img src="${imageUrl}" alt="${title}">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <button>Buy Now</button>
                `;

                shopWrapper.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching product data:', error));
});