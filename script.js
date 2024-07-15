// Sample data - Replace with your Telegraph links
const newsData = [
    {
        title: "Attention to all girls",
        link: "https://telegra.ph/Attention-to-all-girls-02-13",
        description: "A brief summary of the article about girls."
    },
    {
        title: "Group Rules MT",
        link: "https://telegra.ph/Group-RulesMT-02-03",
        description: "A brief summary of the article about group rules."
    }
];

const newsFeed = document.getElementById('news-feed');

newsData.forEach(newsItem => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('news-item');
    itemDiv.innerHTML = 
        <a href="${newsItem.link}" target="_blank">
            <h3>${newsItem.title}</h3>
        </a>
        <p class="description">${newsItem.description}</p>
        <p>Admin | February 13, 2024</p>
    ;
    newsFeed.appendChild(itemDiv);
});
