let modelCards = [...document.getElementsByClassName("model-selection-card")];
if(modelCards.length === 0) console.error("Failed to find any model cards");

for(var card of modelCards) {
    card.addEventListener("click", (evt) => {
        let modelSrc = evt.currentTarget.dataset.modelSrc;
        if(!modelSrc) {
            console.error("data-model-src attribute not found on model selection card");
            return;
        }

        let previewSection = document.getElementById("model-preview");
        previewSection.src = modelSrc;
    });
}
