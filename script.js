const buttons = document.getElementsByTagName('button');
// console.log(buttons);
for (const button of buttons) {
    const btn = button.innerText;
    button.addEventListener('click', function () {
        let currentInput = document.getElementById('input').innerText;
        if (btn === 'AC') {
            document.getElementById('input').innerText = '';
            document.getElementById('output').innerText = '';
            console.log('AC');
        }
        else if (btn === 'DEL') {
            const input = document.getElementById('input').innerText;
            const newInput = input.substring(0, input.length - 1);
            console.log(newInput);
            document.getElementById('input').innerText = newInput;
        }
        else if (btn !== '=') {
            currentInput += btn;
            document.getElementById('input').innerText = currentInput;
        }
        else if (btn === '=') {
            console.log('hi');
            console.log(document.getElementById('output').innerText);
            console.log(currentInput);
            document.getElementById('output').innerText = (eval(currentInput));
            // clear input display
            document.getElementById('input').innerText = '';

        }
    })
}