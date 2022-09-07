console.log(`main.js loaded`)

const accordionPaneEls = document.querySelectorAll(
  `[data-accordion] .accordion-pane`
)
const attributeOpen = `data-open`

const collapseAllPanes = () => {
  accordionPaneEls.forEach((el) => el.removeAttribute(attributeOpen))
}

const accordionToggleEls = document.querySelectorAll(
  `[data-accordion] .accordion-toggle`
)
const accordionTitleEls = document.querySelectorAll(
  `[data-accordion] .accordion-title`
)
const accordionArrowEls = document.querySelectorAll(
  `[data-accordion] .accordion-arrow`
)

collapseAllPanes()

accordionTitleEls.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    collapseAllPanes()
    e.target.parentElement.parentElement.toggleAttribute(attributeOpen)
  })
})

accordionArrowEls.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    collapseAllPanes()
    e.target.parentElement.parentElement.toggleAttribute(attributeOpen)
  })
})
