export const getApi = async (api) => {
    const result = await fetch(api);
    const resultFinal = await result.json();
    return resultFinal;
}