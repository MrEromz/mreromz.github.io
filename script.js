// Articles data - Add your articles here
const articles = [
    {
        title: "Building Scalable SaaS Platforms: Lessons from the Trenches",
        excerpt: "Key insights from scaling a B2B SaaS platform from startup to enterprise, covering architecture decisions, team building, and product strategy.",
        date: "2024-12-15",
        readTime: "8 min read",
        url: "#", // Replace with actual article URL
        tags: ["SaaS", "Product Strategy", "Leadership"]
    },
    {
        title: "The Product-Engineering Bridge: Why Technical Leaders Make Great PMs",
        excerpt: "Exploring the unique advantages that technical backgrounds bring to product management and how to leverage engineering thinking in product strategy.",
        date: "2024-11-20",
        readTime: "6 min read",
        url: "#", // Replace with actual article URL
        tags: ["Product Management", "Engineering", "Leadership"]
    },
    {
        title: "Fintech API Design: Security, Scalability, and Developer Experience",
        excerpt: "Best practices for designing RESTful APIs in financial technology, balancing security requirements with developer-friendly interfaces.",
        date: "2024-10-05",
        readTime: "10 min read",
        url: "#", // Replace with actual article URL
        tags: ["Fintech", "API Design", "Security"]
    }
    // Add more articles as needed
];

// Experience data
const roles = [
    {
        title: 'Chief Technology Officer',
        company: 'Aktivate ⚡️',
        location: 'Delaware, United States · Remote',
        dates: 'Jan 2022 – Aug 2025',
        bullets: [
            'Directed product and technology strategy for a B2B SaaS platform.',
            'Built and scaled a high-performing engineering team.',
            'Oversaw full-stack architecture, deployment, and technology budgets.'
        ]
    },
    {
        title: 'Technical Lead',
        company: 'Whispa Health',
        location: 'Lagos, Nigeria',
        dates: 'Oct 2020 – Apr 2024',
        bullets: [
            'Led development of core technical features.',
            'Implemented engineering best practices to improve stability & velocity.'
        ]
    },
    {
        title: 'Senior Product Manager',
        company: 'Octamile Inc',
        location: 'Lagos, Nigeria',
        dates: 'Jan 2022 – Aug 2022',
        bullets: [
            'Drove product strategy with user-centered roadmaps.',
            'Collaborated with cross-functional teams to launch features that boosted engagement.'
        ]
    },
    {
        title: 'Senior Technical Officer',
        company: 'Halo Invest',
        location: 'Lagos, Nigeria',
        dates: 'Nov 2020 – Feb 2022',
        bullets: [
            'Architected RESTful APIs for fintech systems.',
            'Integrated 3rd-party services to expand product capabilities.'
        ]
    },
    {
        title: 'Lead Developer & Product Manager',
        company: 'UOE DOMOS',
        location: 'Lagos, Nigeria',
        dates: 'Sep 2019 – Nov 2021',
        bullets: [
            'Led end-to-end software lifecycle and built full-stack applications.'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Nuture Technology Services Ltd',
        location: 'Lagos, Nigeria',
        dates: 'Sep 2019 – Nov 2021',
        bullets: [
            'Developed backend systems for savings and investment platforms.'
        ]
    },
    {
        title: 'Chief Technological Officer',
        company: 'TAXI TV',
        location: 'Lagos, Nigeria',
        dates: 'Nov 2018 – Sep 2019',
        bullets: [
            'Led technology strategy and built scalable cloud infrastructure.'
        ]
    }
];

// Populate experience section
function populateExperience() {
    const container = document.getElementById('experience-container');

    roles.forEach((role, index) => {
        const article = document.createElement('article');
        article.className = 'md:flex md:items-start md:gap-6';

        const bulletsHtml = role.bullets.map(bullet => `<li>${bullet}</li>`).join('');

        article.innerHTML = `
            <div class="md:w-6 md:flex md:justify-center">
                <div class="w-3 h-3 rounded-full bg-black mt-2 md:mt-1"></div>
            </div>
            <div class="mt-1">
                <h3 class="font-medium">${role.title} — <span class="italic">${role.company}</span></h3>
                <p class="text-sm text-gray-600">${role.location} · ${role.dates}</p>
                <ul class="mt-2 list-disc list-inside text-sm space-y-1">
                    ${bulletsHtml}
                </ul>
            </div>
        `;

        container.appendChild(article);
    });
}

// Populate articles section
function populateArticles() {
    const container = document.getElementById('articles-container');
    const noArticles = document.getElementById('no-articles');

    if (articles.length === 0) {
        noArticles.classList.remove('hidden');
        return;
    }

    articles.forEach((article, index) => {
        const articleElement = document.createElement('article');
        articleElement.className = 'border rounded-lg p-6 hover:shadow-md transition-shadow duration-200';

        const tagsHtml = article.tags.map(tag =>
            `<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">${tag}</span>`
        ).join('');

        articleElement.innerHTML = `
            <div class="flex items-start justify-between mb-3">
                <div class="flex-1">
                    <h3 class="font-medium text-lg mb-2">
                        <a href="${article.url}" class="hover:underline" ${article.url === '#' ? 'onclick="return false;"' : 'target="_blank"'}>
                            ${article.title}
                        </a>
                    </h3>
                    <p class="text-gray-600 text-sm mb-3">${article.excerpt}</p>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4 text-xs text-gray-500">
                    <span>${new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>${article.readTime}</span>
                </div>
                <div class="flex gap-2">
                    ${tagsHtml}
                </div>
            </div>
            ${article.url !== '#' ? `
                <div class="mt-4">
                    <a href="${article.url}" target="_blank" class="text-sm text-black hover:underline">
                        Read article →
                    </a>
                </div>
            ` : ''}
        `;

        container.appendChild(articleElement);
    });
}

// Handle tab switching
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Update button states
            tabButtons.forEach(btn => {
                if (btn.getAttribute('data-tab') === targetTab) {
                    btn.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                    btn.classList.add('border-black', 'text-black');
                } else {
                    btn.classList.remove('border-black', 'text-black');
                    btn.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                }
            });

            // Update panel visibility
            tabPanels.forEach(panel => {
                if (panel.id === `${targetTab}-tab`) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
    });
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        const subject = 'Portfolio Contact';
        const body = `Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage: ${message}`;

        window.location.href = `mailto:eronmonsele.adeyemo@gmail.com?subject=${subject}&body=${body}`;
    });
}

// Tech stack sequential animation
function initTechStackAnimation() {
    const techIcons = document.querySelectorAll('.tech-icon');
    let currentIndex = 0;

    function animateNextIcon() {
        // Remove previous animation
        techIcons.forEach(icon => {
            icon.style.animation = '';
        });

        // Add flutter animation to current icon
        if (techIcons[currentIndex]) {
            techIcons[currentIndex].style.animation = 'flutter 0.6s ease-in-out';
        }

        // Move to next icon
        currentIndex = (currentIndex + 1) % techIcons.length;
    }

    // Start the sequential animation
    setInterval(animateNextIcon, 800); // 800ms between each icon animation
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    populateExperience();
    populateArticles();
    initializeTabs();
    handleContactForm();
    initTechStackAnimation();
});