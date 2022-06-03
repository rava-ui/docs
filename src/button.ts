
import { html, render } from 'lit-html'

let children = 'FirstName'
let Element = html`<button>${children}</button>`



export class Button {
    element: any
    parent: any
    constructor(element: any, parent: any) {
        this.element = element
        this.parent = parent
    }


    render() {
        render(this.element, this.parent)
    }
}


let button = new Button(`div`, document.body)

console.log(button)