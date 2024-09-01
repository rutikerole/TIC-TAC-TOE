// Step 1:  We Need to declare a variables
const boxes = document.querySelectorAll('.box');
const resetButton = document.querySelector('#reset-btn');

let player_o = true;

// Step 2: Set winning combinations
const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


// Step 3: Add click event listener to each box
//         and after click btn should be print o or x and after that box should be disabled
// 3.1 for that we use if else ( just set one player true fisrt and if player o is true then print text inside it and vice vrsa)
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.textContent === '') { 
            if (player_o) {
                box.textContent = 'O';
                player_o = false;
            } else {
                box.textContent = 'X';
                player_o = true;
            }
            checkForWin(); 
        }
    });
});


// Step 4: need to create a function to check for win
//         so we need to check on winning pattern have a same text or not
//         for checking each winn pattern we need loop over winningCombinations

const checkForWin = () => {
    for(let pattern of winningPatterns){
        // So here we get a all winning pattern
        console.log(pattern[0],pattern[1],pattern[2])

        // Now we need to check for each pattern our test inside the button is same or not
        // now here we get text inside each pattern
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)

        // now we need to check each pattern have same text or not
        // so lets devide our pattern in three position and check if there is position same or not
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 && pos2 && pos3 && pos1 === pos2 && pos2 === pos3) {
            setTimeout(() => {
                alert(`Player ${pos1} wins!`);
                resetButton.disabled = false;
                boxes.forEach(box => box.disabled = true);
            }, 100);
            break;
        }

    }

}

// Add event listener to reset button
resetButton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.textContent = '';
        box.disabled = false;
    });
    player_o = true; // Reset to player 'O'
    resetButton.disabled = true; // Disable reset button until next game
});
