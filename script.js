

// LETS CATCH ALL THE ELEMENTS IN THE FORM
let input = document.getElementsByTagName('input');

// CLEAR ALL
let clearAll = document.querySelector('a')
clearAll.addEventListener('click', ()=>{
    input.value = ''
})

let repay = document.querySelector('.repay');
let inte = document.querySelector('.inte');
let inteRadio = document.querySelector('.inte input');
let repayRadio = document.querySelector('.repay input');
function change(val) {
    if (val == 'rpy') {
        // SETTING THE ALREADY CHOSEN ONE BACK
        inte.style.backgroundColor = 'transparent';
        inte.style.border = '2px solid hsl(202, 55%, 16%)';

        repay.style.backgroundColor = 'hsla(61, 70%, 52%, 0.329)';
        repay.style.border = '2px solid hsl(61, 70%, 52%)';
        repayRadio.checked = true;
    } else {
        // SETTING THE ALREADY CHOSEN ONE BACK
        repay.style.backgroundColor = 'transparent';
        repay.style.border = '2px solid hsl(202, 55%, 16%)';

        inte.style.backgroundColor = 'hsla(61, 70%, 52%, 0.329)';
        inte.style.border = '2px solid hsl(61, 70%, 52%)';
        inteRadio.checked = true;
    }
}


// WHEN YOU CLICK THE CALCULATE REPAYMENT BUTTON
let img = document.querySelector('.img');
let rightDiv = document.querySelector('.right-div');
let rightDivH1 = document.querySelector('.right-div h1');
let rightDivP = document.querySelector('.right-div p');
let final = document.querySelector('.final');

// THE INPUTS
let principal = input[0].value;
let interestRate = input[2].value;
let years = input[1].value
// FOR THE ALL THE ERROR MESSAGE PRESENT IN THE DOCUMENT
let errorMessage = document.querySelectorAll('.error')

// FOR THE SIGNS DIV: BASICALLY THE DIVS THAT HOLD THE SYMBOLS
let signsDivs = document.querySelectorAll('.sign');
let money = document.querySelectorAll('.money');
let signsTag = document.querySelectorAll('.p-signs')

// ON INPUTS KEYUP
input[0].addEventListener('keyup', ()=>{
    money[0].style.backgroundColor = 'hsl(202, 86%, 94%)'
    signsTag[0].style.color = 'hsl(202, 55%, 16%)'
    signsDivs[0].style.backgroundColor = 'hsl(202, 86%, 94%)'
    errorMessage[0].innerHTML = ''
    errorMessage[0].style.color = 'red'
})
input[1].addEventListener('keyup', ()=>{
    money[1].style.backgroundColor = 'hsl(202, 86%, 94%)'
    signsTag[1].style.color = 'hsl(202, 55%, 16%)'
    signsDivs[1].style.backgroundColor = 'hsl(202, 86%, 94%)'
    errorMessage[1].innerHTML = ''
    errorMessage[1].style.color = 'red'
})
input[2].addEventListener('keyup', ()=>{
    money[2].style.backgroundColor = 'hsl(202, 86%, 94%)'
    signsTag[2].style.color = 'hsl(202, 55%, 16%)'
    signsDivs[2].style.backgroundColor = 'hsl(202, 86%, 94%)'
    errorMessage[2].innerHTML = ''
    errorMessage[2].style.color = 'red'
})
// WHEN YOU CLICK "CALCULATE THE REPAYMENT BUTTON"
input[5].addEventListener('click', ()=>{
    // FORM VALIDATION
    // LET'S CHECK IF THE INPUTS HAVE VALUES
    if (input[0].value == '') {
        money[0].style.backgroundColor = 'red'
        signsTag[0].style.color = 'white'
        signsDivs[0].style.backgroundColor = 'red'
        errorMessage[0].innerHTML = 'This field is required'
        errorMessage[0].style.color = 'red'
    } else if (input[1].value == '') {
        money[1].style.backgroundColor = 'red'
        signsTag[1].style.color = 'white'
        signsDivs[1].style.backgroundColor = 'red'
        errorMessage[1].innerHTML = 'This field is required'
        errorMessage[1].style.color = 'red'
    } else if (input[2].value == '') {
        money[2].style.backgroundColor = 'red'
        signsTag[2].style.color = 'white'
        signsDivs[2].style.backgroundColor = 'red'
        errorMessage[2].innerHTML = 'This field is required'
        errorMessage[2].style.color = 'red'
    } else if (!input[3].checked && !input[4].checked) {
        errorMessage[3].innerHTML = 'This field is required'
        errorMessage[3].style.color = 'red'
    } else {
        img.innerHTML = '';
        // CHANGING THE ARANGEMENT
        rightDiv.style.textAlign = 'left';
        rightDiv.style.margin = '50px 10%';

        // CHANGING THE ELEMENTS
        rightDivH1.innerHTML = 'Your results';
        rightDivP.innerHTML = 'Your results are shown below based on the information '+ 
        'you provided. To adjust the result. edit the form and ' + 'click "Calculate repayments" again'

        // ADDING THE FINAL CALCULATION DIV 
        final.innerHTML = `<div class="final-result">
                                <div class="inner-final">
                                    <p style='padding-bottom: 20px;'>Your monthly repayments</p>
                                    <h1><p class="p-signs-two" id="pound"> &pound</p>0</h1>
                                    <hr style='margin: 30px 0;'>
                                    <p style='padding: 20px 0;'>Total you will repay over the term</p>
                                    <h4><p class="p-signs-two" id="pound"> &pound</p>0</h4>
                                </div>
                            </div>`


        // THE CALCULATION THAT SHOWS THE FINAL RESULT
        /* 
        mortgage amount = x
        time = y
        interest rate = z
        i = prt
        */
        let interestToPayPerYear = input[2].value / 100 * input[0].value
        let interestToPayPerMonth = interestToPayPerYear / 12
        let interestOverTime = interestToPayPerYear * input[1].value +  Number(input[0].value)
        let totalOverTime = document.querySelector('.final-result div h4')
        let totalOverTimeMOnthly = document.querySelector('.final-result .inner-final h1')

        let monthlyInterestText = document.querySelectorAll('.inner-final p');
        let monthlyInterest = interestToPayPerMonth * input[2].value / 100

    // IF REPAYMENT IS CHECKED
        if (input[3].checked) {
            errorMessage[3].innerHTML = ''
            errorMessage[3].style.color = ''
            // alert('goood ')
            // console.log('Yearly Payemant' + interestToPayPerYear)
            // console.log('Monthly Payemant' + interestToPayPerMonth)
            totalOverTimeMOnthly.innerHTML = '<p class="p-signs-two" id="pound">&pound</p> ' + Math.round(interestToPayPerMonth)
            totalOverTimeMOnthly.style.fontSize = '40px'
            totalOverTimeMOnthly.style.color = 'hsl(61, 70%, 52%)'
            totalOverTime.innerHTML = '<p class="p-signs-two" id="pound">&pound</p> ' + Math.ceil(interestOverTime)
        }
        else{
            errorMessage[3].innerHTML = ''
            errorMessage[3].style.color = ''
            monthlyInterestText[0].innerHTML = 'Your monthly interest repayments'
            monthlyInterestText[1].innerHTML = 'Total interest you will repay over the term'
            totalOverTimeMOnthly.innerHTML = '<p class="p-signs-two lime" id="pound">&pound</p>' + Math.round(monthlyInterest)
            totalOverTimeMOnthly.style.fontSize = '40px'
            totalOverTimeMOnthly.style.color = 'hsl(61, 70%, 52%)'
            totalOverTime.innerHTML = '<p class="p-signs-two" id="pound">&pound</p>' + Math.ceil(interestOverTime)
        }
    }
    
})
