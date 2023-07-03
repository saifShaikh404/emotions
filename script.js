let emojisArr = [
    {emoji: "(n_n)", emotion: "Smile"},
    {emoji: "(._.)", emotion: "Uh Oh"},
    {emoji: "(-_-)", emotion: "Sleepy, Tired"},
    {emoji: "(;_;)", emotion: "Tears"},
    {emoji: "(@_@)", emotion: "Dizzy"},
    {emoji: "(O_O)", emotion: "Amazed"},
    {emoji: "(*^*)", emotion: "Astonished"},
    {emoji: "(>_<)", emotion: "Ouch"},
    {emoji: "(^_^)", emotion: "Happy"},
    {emoji: "*(^o^)*", emotion: "Happier"},
    {emoji: "(^o^)", emotion: "Glad"},
    {emoji: "(x.x)", emotion: "Dead"},
    {emoji: "(=_=)", emotion: "Bored"},
    {emoji: "(*-*)", emotion: "I love it"},
    {emoji: "(!_!)", emotion: "Sad"},
    {emoji: "(o_O)", emotion: "Incredulous"},
    {emoji: "(*o*)", emotion: "Incredible"},
    {emoji: "(o_o)", emotion: "Seriously"},
    {emoji: "(;o;)", emotion: "Crying Bad"},
    {emoji: "(.o.)", emotion: "Confused"},
    {emoji: "(-_-;)", emotion: "I messed it up"},
    {emoji: "('_')", emotion: "Serious"},
    {emoji: "(u_u)", emotion: "Sleepy, sad"},
    {emoji: "(xox)", emotion: "Noooo"},
    {emoji: "(>o<)", emotion: "Yuck"},
    {emoji: "(-_o)", emotion: "Wink"},
    {emoji: "8(>_<)8", emotion: "Jealous"},
    {emoji: "(9_9)", emotion: "Didn't Sleep"},
    {emoji: "(> >)", emotion: "Awry"},
    {emoji: "(`o`)", emotion: "You're Crazy"}
]

let divEle = document.createElement("div")
divEle.classList.add("row")

for(let i = 1; i <= 30 ; i++){
    divEle.innerHTML += `<div class="col-4 col-md-3 col-lg-2 text-center">
                            <div class="row">
                                <div class="col-12">
                                    <button class="btn emojis" value="${i}">${emojisArr[i-1].emoji}</button>
                                </div>
                                <div class="col-12">
                                    <p>${emojisArr[i-1].emotion}</p>
                                </div>
                            </div>
                        </div>`
}

document.querySelector(".container").appendChild(divEle)

let btns = document.querySelectorAll(".emojis")

Array.from(btns).forEach((btns) => {
    btns.addEventListener('click', (e) => {
        let newEle = document.createElement("input")
        newEle.value = e.target.innerText
        navigator.clipboard.writeText(newEle.value);
        newEle.remove()
    })
})