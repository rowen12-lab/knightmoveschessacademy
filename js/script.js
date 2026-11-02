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


  // ---------- Enquiry form validation (enquiry.html) ----------
  const enquiryForm = document.getElementById("enquiry-form");

  if (enquiryForm) {

    const responseBox = document.getElementById("enquiry-response");
    const messageField = document.getElementById("message");
    const messageCount = document.getElementById("message-count");
    const MESSAGE_MIN = 10;
    const MESSAGE_MAX = 500;

    // One check per field. Each returns an error message, or "" when the value is fine.
    const validators = {
      fullname: function (value) {
        if (value === "") { return "Enter your full name."; }
        if (value.length < 2) { return "Your name must be at least 2 characters."; }
        if (!/^[\p{L}][\p{L}\s'-]*$/u.test(value)) {
          return "Use letters, spaces, hyphens or apostrophes only.";
        }
        return "";
      },
      email: function (value) {
        if (value === "") { return "Enter your email address."; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          return "Enter a valid email address, for example name@example.com.";
        }
        return "";
      },
      phone: function (value) {
        const digits = value.replace(/[\s-]/g, "");
        if (digits === "") { return "Enter your phone number."; }
        // 10 digits starting with 0, or +27 followed by 9 digits
        if (!/^(\+27|0)\d{9}$/.test(digits)) {
          return "Enter a valid number, for example 082 123 4567 or +27 82 123 4567.";
        }
        return "";
      },
      experience: function (value) {
        return value === "" ? "Choose your chess experience." : "";
      },
      programme: function (value) {
        return value === "" ? "Choose a programme." : "";
      },
      message: function (value) {
        if (value === "") { return "Enter a message."; }
        if (value.length < MESSAGE_MIN) {
          return "Your message must be at least " + MESSAGE_MIN + " characters.";
        }
        if (value.length > MESSAGE_MAX) {
          return "Your message must be " + MESSAGE_MAX + " characters or fewer.";
        }
        return "";
      }
    };

    const fieldIds = Object.keys(validators);

    // What the visitor sees after a valid enquiry, by programme
    const programmeInfo = {
      beginner: "No experience or equipment is needed to start. We will tell you about the next beginner group.",
      junior: "This programme is for children. We will ask for a parent or guardian's details when we contact you.",
      intermediate: "We will recommend the right group for your current skill level.",
      advanced: "We will talk to you about your competitive goals and the right group for you.",
      workshop: "Workshop dates are announced each term. We will send you the upcoming dates.",
      tournament: "Tournament training depends on the tournament calendar. We will send you the upcoming dates."
    };

    function showError(id, message) {
      const field = document.getElementById(id);
      document.getElementById(id + "-error").textContent = message;
      if (message === "") {
        field.classList.remove("invalid");
        field.removeAttribute("aria-invalid");
      } else {
        field.classList.add("invalid");
        field.setAttribute("aria-invalid", "true");
      }
    }

    function validateField(id) {
      const message = validators[id](document.getElementById(id).value.trim());
      showError(id, message);
      return message === "";
    }

    function updateMessageCount() {
      messageCount.textContent = messageField.value.length + " / " + MESSAGE_MAX + " characters";
    }

    // Check a field when the visitor leaves it, and re-check while fixing an error
    fieldIds.forEach(function (id) {
      const field = document.getElementById(id);
      field.addEventListener("blur", function () { validateField(id); });
      field.addEventListener("input", function () {
        if (field.classList.contains("invalid")) { validateField(id); }
      });
      field.addEventListener("change", function () {
        if (field.classList.contains("invalid")) { validateField(id); }
      });
    });
    messageField.addEventListener("input", updateMessageCount);

    function showResponse(details) {
      const heading = document.createElement("h3");
      heading.textContent = "Thank you, " + details.name;

      const intro = document.createElement("p");
      intro.textContent = "We have received your enquiry about the " + details.programme + ".";

      const programmeText = document.createElement("p");
      programmeText.textContent = programmeInfo[details.programmeValue];

      const costText = document.createElement("p");
      costText.textContent = "Cost: as a non-profit academy we work to keep our programmes accessible, and we will explain any costs when we reply.";

      const availabilityText = document.createElement("p");
      availabilityText.textContent = "Availability: places in each group are limited, so we will confirm availability when we reply.";

      const contactText = document.createElement("p");
      contactText.textContent = "We will contact you at " + details.email + " or on " + details.phone + ".";

      responseBox.replaceChildren(heading, intro, programmeText, costText, availabilityText, contactText);
      responseBox.hidden = false;
      responseBox.focus();
      responseBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let firstInvalid = null;
      fieldIds.forEach(function (id) {
        if (!validateField(id) && firstInvalid === null) {
          firstInvalid = document.getElementById(id);
        }
      });

      if (firstInvalid !== null) {
        responseBox.hidden = true;
        firstInvalid.focus();
        return;
      }

      const programmeSelect = document.getElementById("programme");
      const details = {
        name: document.getElementById("fullname").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        programmeValue: programmeSelect.value,
        programme: programmeSelect.options[programmeSelect.selectedIndex].textContent
      };

      enquiryForm.reset();
      updateMessageCount();
      showResponse(details);
    });

    updateMessageCount();
  }

});


