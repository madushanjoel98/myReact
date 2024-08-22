

export function Logout() {
    sessionStorage.removeItem("c");
    location.href = "/login";
return (<></>);
}