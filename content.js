var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Thanks/gi, 'Gracias')
            .replace(/Thank you/gi, 'Gracias')
            .replace(/Hello/gi, 'Hola')
            .replace(/How are you/gi, 'Cómo estás')
            .replace(/All right/gi, 'Bien')
            .replace(/Good/gi, 'Buen')
            .replace(/Bye/gi, 'Adios')
            .replace(/Mate/gi, 'Amigo')
            .replace(/Please/gi, 'Por favor')
            .replace(/Good Morning/gi, 'Buenos Días')
            .replace(/Good Night/gi, 'Buenas Noches')

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}