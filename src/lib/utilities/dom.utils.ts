export async function getMainElement() {
    return document.getElementById("main")!;
}

export async function scrollToBottom(element?: HTMLElement) {
    if (!element) element = await getMainElement();

    element.scrollTo({
        top: element.scrollHeight,
        behavior: "smooth",
    });
}
