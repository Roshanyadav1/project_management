import instance from "../services/interceptor"

export const deteleTask = async (id) => {
    return await instance.post('/api/delete', { id })
}