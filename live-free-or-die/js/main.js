(() => {
  const tabs = Array.from(document.querySelectorAll(".patriot-tab"));
  const panels = Array.from(document.querySelectorAll(".patriot-panel"));

  function activatePatriot(id) {
    tabs.forEach((tab) => {
      const active = tab.dataset.patriot === id;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    panels.forEach((panel) => {
      const active = panel.dataset.panel === id;
      panel.classList.toggle("is-active", active);
      if (active) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activatePatriot(tab.dataset.patriot);
    });
  });

  const revealItems = document.querySelectorAll(
    ".cause, .patriots, .play, .history, .timeline, .systems, .openers, .join"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }
})();
