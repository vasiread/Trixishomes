document.addEventListener("DOMContentLoaded", () => {

     const blogs = [
        {
            id: 1,
            img: "../public/assets/images/bloggrid/blog1.png",
            date: "12 Jan, 2024",
            title: "Exploring the World of Interior Inspiration",
            description: "From minimalist chic to bohemian flair, we'll delve into a myriad of design styles.",
            details: [
                {
                    title: "Understanding the Fundamentals",
                    items: [
                        "Delve into the foundational elements of interior design, including space planning, color theory, and balance.",
                        "Learn how to optimize room layouts to maximize functionality and flow while expressing your personal style.",
                        "Discover the importance of focal points and how to create visual interest within a space."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails2.jpg"
                },
                {
                    title: "Mastering Modern Aesthetics",
                    items: [
                        "Explore clean lines and minimalistic design principles.",
                        "Understand how texture and contrast shape modern interiors.",
                        "Incorporate sustainable materials for a contemporary look."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails3.jpg"
                }
            ]
        },
        {
            id: 2,
            img: "../public/assets/images/bloggrid/blog2.png",
            date: "18 Feb, 2024",
            title: "How Lighting Transforms Your Living Space",
            description: "Discover the power of light and shadow to redefine your interiors.",
            details: [
                {
                    title: "Playing with Natural Light",
                    items: [
                        "Understand how natural light changes throughout the day.",
                        "Use curtains, blinds, and reflective surfaces to manage brightness.",
                        "Create cozy corners using indirect sunlight."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails4.jpg"
                },
                {
                    title: "Artificial Lighting Magic",
                    items: [
                        "Mix warm and cool lighting to balance ambiance.",
                        "Highlight decor pieces with accent lighting.",
                        "Layer different light types — ambient, task, and accent."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails5.jpg"
                }
            ]
        },
        {
            id: 3,
            img: "../public/assets/images/bloggrid/blog3.png",
            date: "02 Mar, 2024",
            title: "Color Palettes That Calm and Inspire",
            description: "Learn how to use color psychology to create harmonious spaces.",
            details: [
                {
                    title: "Choosing the Right Tones",
                    items: [
                        "Cool tones promote calmness, while warm tones energize.",
                        "Neutrals provide a base for layering bold colors.",
                        "Add small pops of bright color to keep it dynamic."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails6.jpg"
                },
                {
                    title: "Creating Harmony Through Color",
                    items: [
                        "Stick to a consistent palette across rooms.",
                        "Use the 60-30-10 rule for balance.",
                        "Combine textures to enhance color depth."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails7.jpg"
                }
            ]
        },
        {
            id: 4,
            img: "../public/assets/images/bloggrid/blog1.png",
            date: "02 Mar, 2024",
            title: "Color Palettes That Calm and Inspire",
            description: "Learn how to use color psychology to create harmonious spaces.",
            details: [
                {
                    title: "Choosing the Right Tones",
                    items: [
                        "Cool tones promote calmness, while warm tones energize.",
                        "Neutrals provide a base for layering bold colors.",
                        "Add small pops of bright color to keep it dynamic."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails6.jpg"
                },
                {
                    title: "Creating Harmony Through Color",
                    items: [
                        "Stick to a consistent palette across rooms.",
                        "Use the 60-30-10 rule for balance.",
                        "Combine textures to enhance color depth."
                    ],
                    image: "../public/assets/images/Blogdetails/blogdetails7.jpg"
                }
            ]
        }
    ];

     const blogContainer = document.querySelector(".blogsubgrids");
    const loadMoreBtn = document.querySelector("#load-more");
    const detailsContainer = document.querySelector("#blogContainer");
    const blogHeader = document.querySelector(".blogdetailbanner-content");
    const dateBlog = blogHeader.querySelector("p");

    let visibleCount = 3;

     function renderBlogs() {
        const visibleBlogs = blogs.slice(0, visibleCount);
        blogContainer.innerHTML = visibleBlogs.map(blog => `
            <div class="blog-card" data-id="${blog.id}">
                <img src="${blog.img}" alt="${blog.title}">
                <div id="blog-grid-date"><p>${blog.date}</p></div>
                <p id="blog-header">${blog.title}</p>
                <p id="blog-description">${blog.description}</p>
            </div>
         `).join("");
         
         

         loadMoreBtn.querySelector("p").textContent = visibleCount >= blogs.length ? "Show Less" : "Load more blogs";

         document.querySelectorAll(".blog-card").forEach(card => {
            card.addEventListener("click", () => {
                const blogId = parseInt(card.dataset.id);
                showBlogDetails(blogId);
            });
             
 
         });

    }

    function showBlogDetails(blogId) {
        const selectedBlog = blogs.find(blog => blog.id === blogId);

        if (!selectedBlog) {
            detailsContainer.innerHTML = "<p>No details available for this blog.</p>";
            return;
        }

         blogHeader.querySelector("h3").textContent = selectedBlog.title;
        dateBlog.textContent = `Posted on ${selectedBlog.date}`;

        const detailsHTML = selectedBlog.details.map(detail => `
        <div class="bloglists">
            <h2>${detail.title}</h2>
            <ul>
                ${detail.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <img src="${detail.image}" alt="${detail.title}">
        </div>
    `).join("");

        detailsContainer.innerHTML = detailsHTML;

        // Smooth scroll
        document.querySelector(".blogdetailsection").scrollIntoView({ behavior: "smooth" });
    }


     loadMoreBtn.addEventListener("click", () => {
        if (visibleCount >= blogs.length) {
            visibleCount = 3;
        } else {
            visibleCount += 3;
        }
        renderBlogs();
    });

     renderBlogs();
});
