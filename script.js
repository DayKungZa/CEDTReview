const readmeLink = "https://raw.githubusercontent.com/DayKungZa/CEDTReview/main/README.md";
const textID = "content";

console.log(typeof marked);
async function loadMarkdown() {
  try {
      const response = await fetch(readmeLink);
      if (!response.ok) throw new Error(`Failed to fetch README.md: ${response.statusText}`);
      
      const markdown = await response.text();
      const readmeText = marked.parse ? marked.parse(markdown) : marked(markdown);
      
      document.getElementById(textID).innerHTML = readmeText;
  } catch (error) {
      console.error(error);
      document.getElementById(textID).innerText = "Failed to load content.";
  }
}


loadMarkdown();