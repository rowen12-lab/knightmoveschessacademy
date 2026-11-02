// Knight Moves Chess Academy - contact page JavaScript
// Map (Leaflet) and contact form validation with a compiled email.

document.addEventListener("DOMContentLoaded", function () {

  // ---------- Interactive map (Leaflet + OpenStreetMap) ----------
  const mapElement = document.getElementById("map");

  if (mapElement && typeof L !== "undefined") {
    const position = [-28.7282, 24.7499]; // centre of Kimberley, Northern Cape

    const map = L.map("map").setView(position, 14);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(position)
      .addTo(map)
      .bindPopup("<strong>Knight Moves Chess Academy</strong><br>15 King Street, Kimberley<br>(demonstration address)")
      .openPopup();
  }


  // ---------- Contact form validation and compiled email ----------
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {

    const RECIPIENT = "info@knightmovesacademy.co.za"; // the email goes to this address
    const MESSAGE_MIN = 10;
    const MESSAGE_MAX = 500;

    const responseBox = document.getElementById("contact-response");
    const messageField = document.getElementById("contact-message");
    const messageCount = document.getElementById("contact-message-count");

    // One check per field. Each returns an error message, or "" when the value is fine.
    const validators = {
      "contact-name": function (value) {
        if (value === "") { return "Enter your full name."; }
        if (value.length < 2) { return "Your name must be at least 2 characters."; }
        if (!/^[\p{L}][\p{L}\s'-]*$/u.test(value)) {
          return "Use letters, spaces, hyphens or apostrophes only.";
        }
        return "";
      },
      "contact-email": function (value) {
        if (value === "") { return "Enter your email address."; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          return "Enter a valid email address, for example name@example.com.";
        }
        return "";
      },
      "contact-phone": function (value) {
        const digits = value.replace(/[\s-]/g, "");
        if (digits === "") { return ""; } // phone is optional
        if (!/^(\+27|0)\d{9}$/.test(digits)) {
          return "Enter a valid number, for example 082 123 4567 or +27 82 123 4567.";
        }
        return "";
      },
      "contact-type": function (value) {
        return value === "" ? "Choose a message type." : "";
      },
      "contact-message": function (value) {
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

    // Build the email text and a mailto link addressed to the recipient
    function compileEmail(details) {
      const subject = "Website message (" + details.type + ") from " + details.name;
      const body =
        "Name: " + details.name + "\r\n" +
        "Email: " + details.email + "\r\n" +
        "Phone: " + (details.phone === "" ? "Not provided" : details.phone) + "\r\n" +
        "Message type: " + details.type + "\r\n\r\n" +
        "Message:\r\n" + details.message;

      const link = "mailto:" + RECIPIENT +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      return { subject: subject, body: body, link: link };
    }

    function showEmail(email) {
      const heading = document.createElement("h3");
      heading.textContent = "Your email is ready";

      const intro = document.createElement("p");
      intro.textContent = "Check the details below, then send the email to " + RECIPIENT + ".";

      const preview = document.createElement("pre");
      preview.className = "email-preview";
      preview.textContent = "To: " + RECIPIENT + "\nSubject: " + email.subject + "\n\n" + email.body;

      const sendLink = document.createElement("a");
      sendLink.href = email.link;
      sendLink.className = "form-button mail-link";
      sendLink.textContent = "Open in your email app";

      const note = document.createElement("p");
      note.textContent = "If nothing opens, copy the text above into your own email and send it to " + RECIPIENT + ".";

      responseBox.replaceChildren(heading, intro, preview, sendLink, note);
      responseBox.hidden = false;
      responseBox.focus();
      responseBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    contactForm.addEventListener("submit", function (event) {
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

      const details = {
        name: document.getElementById("contact-name").value.trim(),
        email: document.getElementById("contact-email").value.trim(),
        phone: document.getElementById("contact-phone").value.trim(),
        type: document.getElementById("contact-type").value,
        message: messageField.value.trim()
      };

      const email = compileEmail(details);
      contactForm.reset();
      updateMessageCount();
      showEmail(email);
    });

    updateMessageCount();
  }

});
