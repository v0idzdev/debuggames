function onOptionSelect() {
    let selectedIndex = document.getElementById('careers-page-select').selectedIndex;

    let paragraphs = [
        document.getElementsByClassName('default'),
        document.getElementsByClassName('programmer'),
        document.getElementsByClassName('designer'),
        document.getElementsByClassName('tester')
    ]

    const updateVisibility = (nodes, visibility) => {
        for (var i = 0; i < nodes.length; i += 1) {
            nodes[i].style.display = visibility;
        }
    }

    updateVisibility(paragraphs[selectedIndex], 'block');
    paragraphs.filter((p) => paragraphs.indexOf(p) != selectedIndex).forEach((p) => updateVisibility(p, 'none'));
}