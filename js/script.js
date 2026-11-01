// Knight Moves Chess Academy - Part 3 JavaScript
// Each feature checks that its elements exist first, so the same file
// can be linked on all five pages.

document.addEventListener("DOMContentLoaded", function () {

  // ---------- Accordion (index.html) ----------
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });


  // ---------- Programmes: dynamic list, search and filter (services.html) ----------
  const programmeList = document.getElementById("programme-list");

  if (programmeList) {

    const programmes = [
      {
        name: "Beginner Chess Programme",
        level: "Beginner",
        summary: "Designed for players who are completely new to chess or are still learning the basics.",
        topics: [
          "How the chessboard is organised",
          "How each chess piece moves",
          "Basic chess rules",
          "Check and checkmate",
          "Basic chess tactics",
          "Basic opening principles"
        ]
      },
      {
        name: "Junior Chess Programme",
        level: "Junior",
        summary: "Introduces children to chess through practical games, puzzles and interactive activities, building concentration, patience and strategic thinking.",
        topics: [
          "Practical games",
          "Puzzles",
          "Interactive activities",
          "Concentration and patience",
          "Problem-solving"
        ]
      },
      {
        name: "Intermediate Chess Programme",
        level: "Intermediate",
        summary: "For players who understand the fundamentals and want to develop stronger tactical and strategic skills.",
        topics: [
          "Opening principles",
          "Tactical combinations",
          "Positional play",
          "Strategic planning",
          "Endgame techniques",
          "Game analysis"
        ]
      },
      {
        name: "Advanced Chess Programme",
        level: "Advanced",
        summary: "Aimed at experienced players who want to prepare for competitive chess.",
        topics: [
          "Advanced tactics",
          "Opening preparation",
          "Positional strategy",
          "Endgame theory",
          "Opponent analysis",
          "Tournament preparation"
        ]
      },
      {
        name: "Chess Workshops and Tournaments",
        level: "Events",
        summary: "Workshops and tournaments that let players practise their skills, gain experience and enjoy the competitive side of chess.",
        topics: [
          "Workshops",
          "Tournaments",
          "Competitive experience"
        ]
      }
    ];

    const searchInput = document.getElementById("programme-search");
    const levelSelect = document.getElementById("programme-level");
    const clearButton = document.getElementById("programme-clear");
    const countText = document.getElementById("programme-count");

    // Fill the level dropdown from the data so it always matches the programmes
    const levels = [];
    programmes.forEach(function (programme) {
      if (levels.indexOf(programme.level) === -1) {
        levels.push(programme.level);
      }
    });
    levels.forEach(function (level) {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = level;
      levelSelect.appendChild(option);
    });

    // Build one programme card using DOM methods (textContent keeps it safe)
    function createCard(programme) {
      const card = document.createElement("article");
      card.className = "programme-card";

      const title = document.createElement("h3");
      title.textContent = programme.name;

      const badge = document.createElement("span");
      badge.className = "level-badge";
      badge.textContent = programme.level;

      const summary = document.createElement("p");
      summary.textContent = programme.summary;

      const topicList = document.createElement("ul");
      programme.topics.forEach(function (topic) {
        const item = document.createElement("li");
        item.textContent = topic;
        topicList.appendChild(item);
      });

      card.appendChild(title);
      card.appendChild(badge);
      card.appendChild(summary);
      card.appendChild(topicList);
      return card;
    }

    // Apply the search text and level filter, then redraw the cards
    function showProgrammes() {
      const searchText = searchInput.value.trim().toLowerCase();
      const chosenLevel = levelSelect.value;

      const matches = programmes.filter(function (programme) {
        const levelMatches = chosenLevel === "all" || programme.level === chosenLevel;
        const searchable = (
          programme.name + " " +
          programme.level + " " +
          programme.summary + " " +
          programme.topics.join(" ")
        ).toLowerCase();
        return levelMatches && searchable.indexOf(searchText) !== -1;
      });

      programmeList.replaceChildren();
      matches.forEach(function (programme) {
        programmeList.appendChild(createCard(programme));
      });

      if (matches.length === 0) {
        countText.textContent = "No programmes match your search. Try a different word or choose All levels.";
      } else {
        countText.textContent = "Showing " + matches.length + " of " + programmes.length + " programmes.";
      }
    }

    searchInput.addEventListener("input", showProgrammes);
    levelSelect.addEventListener("change", showProgrammes);
    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      levelSelect.value = "all";
      showProgrammes();
    });

    showProgrammes();
  }

});
