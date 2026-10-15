document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-button");
    const categories = document.querySelectorAll(".lesson-category");

    tabs.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.category;

            tabs.forEach(function (tab) {
                tab.classList.remove("active");
            });

            categories.forEach(function (category) {
                category.classList.remove("active");
            });

            button.classList.add("active");

            const selectedSection = document.getElementById(selectedCategory);

            if (selectedSection) {
                selectedSection.classList.add("active");
            } else {
                console.error("Lesson section not found:", selectedCategory);
            }
        });
    });

    const pdfViewer = document.getElementById("pdf-viewer");
    const pdfFrame = document.getElementById("pdf-frame");
    const pdfTitle = document.getElementById("pdf-title");
    const openPdf = document.getElementById("open-pdf");
    const closePdf = document.getElementById("close-pdf");

    document.querySelectorAll(".view-button").forEach(function (button) {
        button.addEventListener("click", function () {
            const pdfPath = button.dataset.pdf;
            const title = button.dataset.title;

            if (!pdfViewer || !pdfFrame || !pdfTitle || !openPdf) {
                console.error("A PDF viewer element is missing from lessons.html.");
                return;
            }

            if (!pdfPath) {
                console.error("This lesson button has no PDF path.");
                return;
            }

            pdfTitle.textContent = title || "Lesson";
            pdfFrame.src = pdfPath;
            openPdf.href = pdfPath;
            pdfViewer.hidden = false;

            pdfViewer.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    if (closePdf && pdfViewer && pdfFrame) {
        closePdf.addEventListener("click", function () {
            pdfViewer.hidden = true;
            pdfFrame.src = "";
        });
    }

});
