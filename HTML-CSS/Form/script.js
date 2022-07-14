const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})

if (currentStep < 0) {
    currentStep = 0
    formSteps[currentStep].classList.add("active")
}
multiStepForm.addEventListener("click", e => {

    let incremantor
    if (e.target.matches("[data-next]")) {
        incremantor = 1
    } else if (e.target.matches("[data-previous]")) {
        incremantor = -1
    }

    if (incremantor == null) return
    const inputs = [...formSteps[currentStep].querySelectorAll("input")]
    const allValid = inputs.every(input => input.reportValidity())

    if (allValid) {
        currentStep += incremantor
        showCurrentStep()
    }

    console.log(currentStep)
})

formSteps.forEach(step => {
    step.addEventListener("animationend", e => {
        formSteps[currentStep].classList.remove("hide")
        e.target.classList.toggle("hide", !e.target.classList.contains("active"))
    })
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)

    })

}