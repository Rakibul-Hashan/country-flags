const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data.results))
}

const displayBuddies = (buddies) => {
    for (const buddy of buddies){
        console.log(`${buddy.name.title}  ${buddy.name.first} ${ buddy.name.last}`)
    }
}

loadBuddies()