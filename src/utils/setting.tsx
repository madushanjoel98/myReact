
let THEME_KEY = "mood";


let FUN_theme = localStorage.getItem(THEME_KEY) == null ? 'light' : localStorage.getItem("mood");





function setTheme(themeid: number) {
    switch (themeid) {
        case 1:
            localStorage.setItem(THEME_KEY, 'dark')
            break;
        default:
            localStorage.setItem(THEME_KEY, 'light')
            break;
    }
}





export { FUN_theme };