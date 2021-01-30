export const getEmployees = async () => {
    const data = await fetch(
        'https://randomuser.me/api/?results=50')
    const JSON = await data.json()
    return JSON.results;
}

