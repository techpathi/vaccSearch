const APIGetCall = async (API_URL) => {

    const resp = await fetch(API_URL);
    if (resp.ok) {
        const response = await resp.json();
        console.log('API Get response:', response);
        return response;
    }
    else {
        console.error('Cant fetch states now!');
    }
}

export default APIGetCall;