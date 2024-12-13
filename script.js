const readmeLink = "https://raw.githubusercontent.com/DayKungZa/CEDTReview/main/README.md";
const textID = "content";

async function loadMarkdown() {
    try {
      const response = await fetch(readmeLink); // Fetch the README file
      if (!response.ok) throw new Error(`Failed to fetch README.md: ${response.statusText}`);
  
      const markdown = await response.text(); // Get the Markdown text
      const readmeText = marked(markdown); // Convert Markdown to HTML using marked.js
  
      document.getElementById(textID).innerHTML = readmeText; // Update the content
    } catch (error) {
      console.error(error);
      document.getElementById(textID).innerText = "Failed to load content.";
    }
}

loadMarkdown();