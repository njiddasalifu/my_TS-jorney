import FullList from "../models/FullList";
interface DOMList{
    ul: HTMLDataListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList{
    ul: HTMLUListElement
    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''  
    }

    //reder method which receieves the full list
    render(fullList: FullList): void {
        this.clear()
        fullList.list.forEach(=> {
            const li = document.createElement("li") as HTMLImageElement
            li.className = "item"
        })
    }
}