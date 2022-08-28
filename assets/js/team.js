"use strict";

const team = [
    {
        name: "Joel Setya",
        image: "assets/img/team/joel.jpg",
        lazyImage: "assets/img/lazyloadteam/joel.jpg",
        role: "Executive Director",
        description: "My name is Joel and I'm a Senior at Neuqua Valley and co-founder of the Naperville Region. I'm involved with Model UN, Aspiring Medical Professionals, SkillsUSA, Chess, and Student Council. I love playing basketball, watching cricket, and eating tons of food."
    },
    {
        name: "Dylan Subramanian",
        image: "assets/img/team/dylan.jpg",
        lazyImage: "assets/img/lazyloadteam/dylan.jpg",
        role: "Regional Director",
        description: " My name is Dylan and I'm a Senior at Neuqua Valley. Alongside my passion to teach kids about STEM, I love to make video games, watch Shark Tank, and play Ping Pong. I'm also better at basketball than Joel and Saaya."
    },
    {
        name: "Hetvi Patel",
        image: "assets/img/team/hetvi.jpg",
        lazyImage: "assets/img/lazyloadteam/hetvi.jpg",
        role: "Regional Director",
        description: "My name is Hetvi and I'm a Senior at Neuqua Valley. I enjoy working with kids in hands-on STEM experiments and activities. In my free time I enjoy playing badminton, singing, painting, and trying new ice cream flavors."
    },
    {
        name: "Raghav Taneja",
        image: "assets/img/team/raghav.jpg",
        lazyImage: "assets/img/lazyloadteam/raghav.jpg",
        role: "Chapter Head",
        description: "My name is Raghav and I'm a Senior at Neuqua Valley. I enjoy helping others using my knowledge and passion for STEM. I also like coding, playing video games, and spending time with friends."
    },
    {
        name: "Anish Deshpande",
        image: "assets/img/team/anish.jpg",
        lazyImage: "assets/img/lazyloadteam/anish.jpg",
        role: "Chapter Head",
        description: "My name is Anish Deshpande and I'm a Senior at Neuqua Valley. I have a great passion for educating and have been teaching kids all over the U.S since my freshman year."
    },
    {
        name: "Saaya Patel",
        image: "assets/img/team/saaya.jpg",
        lazyImage: "assets/img/lazyloadteam/saaya.jpg",
        role: "Chapter Head",
        description: "My name is Saaya Patel and I'm a Senior at Neuqua Valley. I enjoy helping in the community and displaying my love and passion STEM. In my freetime I like to hangout with my friends and travel :)"
    },
    {
        name: "Asha Suresh",
        image: "assets/img/team/asha.jpg",
        lazyImage: "assets/img/lazyloadteam/asha.jpg",
        role: "Chapter Head",
        description: "My name is Asha and I'm a Senior at Neuqua Valley. I enjoy teaching and working with kids, and my favorite part of STEM & Buds is being able to share my passion with others!"
    },
    {
        name: "Sneha Ghosh",
        image: "assets/img/team/sneha.jpg",
        lazyImage: "assets/img/lazyloadteam/sneha.jpg",
        role: "Chapter Head",
        description: "My name is Sneha and I'm a Senior at Neuqua Valley. I enjoy teaching children about things that they are passionate about! I love going to museums and hanging out with my friends :)"
    },
    {
        name: "Prajwal Shah",
        image: "assets/img/team/prajwal.jpg",
        lazyImage: "assets/img/lazyloadteam/prajwal.jpg",
        role: "Chapter Head",
        description: "My name is Prajwal and I'm a Senior at Naperville Central. I am passionate about STEM and computer science and enjoy playing basketball, reading nonfiction, and cooking for my family."
    },
    {
        name: "Samika Karumuri",
        image: "assets/img/team/samika.jpg",
        lazyImage: "assets/img/lazyloadteam/samika.jpg",
        role: "Chapter Head",
        description: "My name is Samika and I'm a Junior at Naperville North. I'm passionate in pursuing a career that mixes computer science and criminal justice. Outside of STEM, I am very outdoorsy and I play for Naperville North’s golf team!"
    },
    {
        name: "Calvin Klemetson",
        image: "assets/img/team/calvin.jpg",
        lazyImage: "assets/img/lazyloadteam/calvin.jpg",
        role: "Chapter Head",
        description: "My name is Calvin and I'm a Senior at Neuqua Valley. I love math, soccer, and gaming."
    },
    {
        name: "Vanshika Kapoor",
        image: "assets/img/team/vanshika.jpg",
        lazyImage: "assets/img/lazyloadteam/vanshika.jpg",
        role: "Chapter Head",
        description: "My name is Vanshika and I'm a Junior at Waubonsie Valley. Besides helping kids find their passion, I enjoy water sports, show choir, and binging The Office!"
    },
    // {
    //     name: "",
    //     image: "",
    //     lazyImage: "",
    //     role: "Chapter Head",
    //     description: ""
    // },
]

const teamHTML = document.querySelector(".team__box");


displayTeam();
function displayTeam() {
    teamHTML.innerHTML = '';
    for (let i = 0; i < team.length - 2; i += 3) {
        const html = `
    <div class="team__row">
        <div class="team__member ${i % 2 == 0 ? "tleft" : "tright"}">
            <div class="team__member__picture"><img class="lazy__load" data-src="${team[i].image}"
                    src="${team[i].lazyImage}">
            </div>
            <div class="team__member__content">
                <h2 class="team__member__name">${team[i].name}</h2>
                <p class="team__member__role">${team[i].role}</p>
                <p class="team__member__description">${team[i].description}</p>
            </div>
        </div>
        <div class="team__member ${(i + 1) % 2 == 0 ? "tleft" : "tright"}">
            <div class="team__member__picture"><img class="lazy__load" data-src="${team[i + 1].image}"
                    src="${team[i + 1].lazyImage}">
            </div>
            <div class="team__member__content">
                <h2 class="team__member__name">${team[i + 1].name}</h2>
                <p class="team__member__role">${team[i + 1].role}</p>
                <p class="team__member__description">${team[i + 1].description}</p>
            </div>
        </div>
        <div class="team__member ${(i + 2) % 2 == 0 ? "tleft" : "tright"}">
            <div class="team__member__picture"><img class="lazy__load" data-src="${team[i + 2].image}"
                    src="${team[i + 2].lazyImage}">
            </div>
            <div class="team__member__content">
                <h2 class="team__member__name">${team[i + 2].name}</h2>
                <p class="team__member__role">${team[i + 2].role}</p>
                <p class="team__member__description">${team[i + 2].description}</p>
            </div>
        </div>
    </div>`;
        teamHTML.insertAdjacentHTML("beforeend", html);
    }

    const left = team.length % 3;
    console.log(left);
    if (left == 1) {
        const html = `<div class="team__row">
            <div class="team__member ${(team.length) % 2 == 1 ? "tleft" : "tright"}">
                <div class="team__member__picture"><img class="lazy__load" data-src="${team[team.length - 1].image}"
                        src="${team[team.length - 1].lazyImage}">
                </div>
                <div class="team__member__content">
                    <h2 class="team__member__name">${team[team.length - 1].name}</h2>
                    <p class="team__member__role">${team[team.length - 1].role}</p>
                    <p class="team__member__description">${team[team.length - 1].description}</p>
                </div>
            </div>
        </div>`
        teamHTML.insertAdjacentHTML("beforeend", html);
    } else if (left == 2) {
        const html = `<div class="team__row">
            <div class="team__member ${(team.length) % 2 == 1 ? "tleft" : "tright"}">
                <div class="team__member__picture"><img class="lazy__load" data-src="${team[team.length - 2].image}"
                        src="${team[team.length - 2].lazyImage}">
                </div>
                <div class="team__member__content">
                    <h2 class="team__member__name">${team[team.length - 2].name}</h2>
                    <p class="team__member__role">${team[team.length - 2].role}</p>
                    <p class="team__member__description">${team[team.length - 2].description}</p>
                </div>
            </div>
            <div class="team__member ${(team.length - 1) % 2 == 1 ? "tleft" : "tright"}">
                <div class="team__member__picture"><img class="lazy__load" data-src="${team[team.length - 1].image}"
                        src="${team[team.length - 1].lazyImage}">
                </div>
                <div class="team__member__content">
                    <h2 class="team__member__name">${team[team.length - 1].name}</h2>
                    <p class="team__member__role">${team[team.length - 1].role}</p>
                    <p class="team__member__description">${team[team.length - 1].description}</p>
                </div>
            </div>
        </div>`
        teamHTML.insertAdjacentHTML("beforeend", html);
    }
}